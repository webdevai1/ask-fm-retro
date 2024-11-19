import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

export type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export interface ScreenProps {
  navigation: ScreenNavigationProp;
}
