import { Text } from 'react-native';
import React, { FC } from 'react';

import { Screens, RootStackParamList } from '../navigation';
import { Box, Button, Input, ScrollView, Logo } from '../legos';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/auth/authSlice';

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .required('Login is required')
    .matches(/^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*$/, 'Invalid login format'),
  password: Yup.string().required('Password is required'),
});

const initialValuesForm = {
  login: 'q',
  password: 'q',
};

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.SignIn
>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
}

export const SignInScreen: FC<ScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const onSubmit = async ({
    login: username,
    password,
  }: {
    login: string;
    password: string;
  }) => {
    await dispatch(login());
    await navigation.navigate(Screens.Tabs);
  };

  return (
    <ScrollView backgroundColor="mainBlue">
      <Box
        alignItems="center"
        justifyContent="center"
        height="100%"
        backgroundColor="mainBlue"
        paddingTop={200}>
        <Box marginBottom={100}>
          <Logo color="white" />
        </Box>

        <Formik
          initialValues={initialValuesForm}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({ handleChange, values, errors, touched, handleSubmit }) => (
            <>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginBottom={30}>
                <Box flex={1} marginRight={0} width={45} maxWidth={300}>
                  <Input
                    value={values.login}
                    onChangeText={handleChange('login')}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    label="placeholder"
                    type="outline"
                    error={(touched.login && errors.login) || ''}
                  />
                </Box>
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginBottom={30}>
                <Box flex={1} marginRight={0} width={45} maxWidth={300}>
                  <Input
                    label=""
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder="Password"
                    textContentType="password"
                    autoCapitalize="none"
                    error={(touched.password && errors.password) || ''}
                    type="outline"
                    secureTextEntry
                  />
                </Box>
              </Box>

              <Button
                onPress={handleSubmit}
                title="Login"
                bgColor="btnLime"
                width={300}
              />
            </>
          )}
        </Formik>

        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          paddingVertical={16}
          width={300}>
          <Text style={{ marginRight: 4, color: 'white' }}>
            Don`t you have an account?
          </Text>
          <Button
            onPress={() => navigation.navigate(Screens.SignUp)}
            title="Create account"
            bgColor="btnLime"
            type="text"
            textDecorationLine="underline"
          />
        </Box>
      </Box>
    </ScrollView>
  );
};
