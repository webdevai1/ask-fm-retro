import React, { FC, useState } from 'react';

import { Header } from './Header';
import { ScreenProps } from '../types';
import { Screens } from '../../navigation';
import { useAppDispatch } from '../../app/hooks';
import { Post } from '../../components/Post/Post';
import { Box, Button, ScrollView } from '../../legos';
import { logout } from '../../features/auth/authSlice';
import { HeroProfile } from '../../components/HeroProfile';
import { QuestionModal } from '../../components/QuestionModal';
import { ProfileStatistic } from '../../components/ProfileStatistic';
import { useUserById } from '../../features/users/userSelectors';

export const ProfileScreen: FC<ScreenProps> = ({ navigation }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const user = useUserById('1');

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate(Screens.SignIn);
  };
  console.log('%c jordan user', 'color: lime;', user);
  return (
    <Box height="100%" width="100%" backgroundColor="white">
      <Header title="Profile" handleLogout={handleLogout} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroProfile
          avatarURL={user?.avatar || ''}
          backgroundURL={user?.bgPhoto || ''}
          name={user?.name || ''}
          username={user?.username || ''}
        />

        <ProfileStatistic
          answers={user?.posts.length || 0}
          likes={582}
          gifts={user?.gifts || 0}
          followers={user?.followers || 0}
        />
        <Box width="100%" alignItems="center" paddingTop={24}>
          <Box width="80%">
            <Button
              title="Ask me a Question"
              onPress={() => handleOpenModal()}
            />
          </Box>
        </Box>
        <Box paddingTop={8}>
          {user?.posts.map((item, index) => (
            <Post
              key={`${item.id}-${item.date}-${index}`}
              answer={item.answer || ''}
              date={item.date}
              likes={item.likes}
              photo={item.photo}
              id={item.id}
              question={item.question}
              user={{
                avatar: user?.avatar || '',
                id: user?.id || '',
                username: user?.username || '',
              }}
              isMyPost={true}
            />
          ))}
        </Box>
      </ScrollView>
      <QuestionModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </Box>
  );
};
