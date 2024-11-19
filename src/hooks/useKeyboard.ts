import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

interface UseKeyboardReturnType {
  isKeyBoardVisible: boolean;
  dismiss: () => void;
  height: number;
}
export const useKeyboard = (): UseKeyboardReturnType => {
  const [isKeyBoardVisible, setIsKeyboardVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const dismiss = () => {
    Keyboard.dismiss();
    setIsKeyboardVisible(false);
  };
  useEffect(() => {
    const onKeyboardDidShow = (e: any) => {
      setHeight(e.endCoordinates.height);
      setIsKeyboardVisible(true);
    };
    const onKeyboardDidHide = () => {
      setIsKeyboardVisible(false);
      setHeight(0);
    };
    const subKeyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const subKeyboardDidHide = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      subKeyboardDidShow.remove();
      subKeyboardDidHide.remove();
    };
  }, []);
  return { isKeyBoardVisible, dismiss, height };
};
