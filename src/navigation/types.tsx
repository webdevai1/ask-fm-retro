export enum Screens {
  Starting = 'Starting',
  Tabs = 'Tabs',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  Home = 'Home',
  Profile = 'Profile',
  Friends = 'Friends',
  Questions = 'Questions',
}

export type RootStackParamList = {
  [Screens.SignIn]: undefined;
  [Screens.SignUp]: undefined;
  [Screens.Starting]: undefined;
  [Screens.Tabs]: undefined;
};
