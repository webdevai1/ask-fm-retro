import React, { FC, useEffect, useState } from 'react';
import { Modal, Switch, TextInput } from 'react-native';

import { theme } from '../utils';
import { Question } from '../app/mockTypes';
import { Box, Button, Text } from '../legos';
import { useAppDispatch } from '../app/hooks';
import { CloseIcon } from '../legos/icons/CloseIcon';
import { AddPhotoIcon } from '../legos/icons/AddPhotoIcon';
import { questions } from '../features/questions/questionsSlice';

type QuestionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const QuestionModal: FC<QuestionModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  const [limitText, setLimitText] = useState(300);
  const [isEnabled, setIsEnabled] = useState(true);
  useEffect(() => {
    setLimitText(300 - text.length);
  }, [text.length]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handlerSendQuestion = async () => {
    const data: Question = {
      question: text || '',
      author: isEnabled ? null : 'Oleg',
    };
    await dispatch(questions(data));
    await setText('');
    await onClose();
  };

  return (
    <Box flex={1}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          onClose();
        }}>
        <Box
          backgroundColor="white"
          height="100%"
          marginTop={180}
          paddingHorizontal={16}
          borderRadius={20}>
          <Box
            flexDirection="row"
            marginTop={12}
            marginBottom={30}
            justifyContent="flex-end">
            <Button
              type="icon"
              title="X"
              onPress={onClose}
              bgColor="transparent"
              colorTitle="grayLight"
              icon={() => <CloseIcon size={35} color="#cccccc" fill="black" />}
            />
          </Box>
          <Box borderColor="grayDark" borderWidth={1} borderRadius={5}>
            <TextInput
              autoFocus
              multiline
              numberOfLines={8}
              maxLength={300}
              style={{
                minHeight: 150,
                maxHeight: 200,
                padding: 10,
                fontSize: 16,
              }}
              placeholder="Ask me something"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingVertical={10}>
            <Box flexDirection="row" alignItems="center">
              <Button
                type="icon"
                title="X"
                onPress={handlerSendQuestion}
                bgColor="transparent"
                colorTitle="grayLight"
                icon={() => (
                  <AddPhotoIcon
                    size={35}
                    color={theme.colors.primary}
                    fill="black"
                    colorPlus="#ff0000"
                  />
                )}
              />
              <Switch
                trackColor={{ false: '#767577', true: theme.colors.btnLime }}
                thumbColor={isEnabled ? theme.colors.primary : '#f4f3f4'}
                ios_backgroundColor={theme.colors.primary}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
              />
              <Text fontSize={12} color="primary">
                Anonymous
              </Text>
            </Box>
            <Text color="primary">{limitText}</Text>
          </Box>
          <Button
            title="Send"
            bgColor="primary"
            onPress={handlerSendQuestion}
          />
        </Box>
      </Modal>
    </Box>
  );
};
