import { TextInputIOSProps } from 'react-native';
import React, { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Screens, RootStackParamList } from '../navigation';
import { Box, Button, Input, ScrollView, Logo, Text } from '../legos';
import { StackNavigationProp } from '@react-navigation/stack';

type FieldNameType = 'fullName' | 'username' | 'password';

interface signUpFields {
  id: string;
  fieldName: FieldNameType;
  placeholder?: string;
  type?: TextInputIOSProps['textContentType'];
  component: string;
  label?: string;
  variant1?: string;
  variant2?: string;
}

const signUpFields: signUpFields[] = [
  {
    id: 'fullName-standard-required',
    fieldName: 'fullName',
    placeholder: 'Full Name',
    type: 'name',
    component: 'input',
  },
  {
    id: 'username-standard-required',
    fieldName: 'username',
    placeholder: 'Username',
    type: 'nickname',
    component: 'input',
  },
  {
    id: 'standard-password-input',
    fieldName: 'password',
    placeholder: 'Password',
    type: 'password',
    component: 'input',
  },
];

const initialValuesForm = {
  fullName: '',
  username: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  username: Yup.string()
    .required('Username is required')
    .matches(/^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*$/, 'Invalid username format'),
  password: Yup.string().required('Password is required'),
});

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.SignUp
>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
}

export const SignUpScreen: FC<ScreenProps> = ({ navigation }) => {
  //TODO: Add yup validations

  const handlerSubmit = (values: {
    fullName: string;
    username: string;
    password: string;
  }) => {
    console.log('%c jordan values', values);
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
        <Box>
          <Formik
            initialValues={initialValuesForm}
            onSubmit={handlerSubmit}
            validationSchema={validationSchema}>
            {({ handleChange, values, handleSubmit, errors, touched }) => (
              <>
                {signUpFields.map(
                  ({ component, fieldName, label, placeholder, type }) => {
                    return component === 'input' ? (
                      <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        marginBottom={25}
                        key={fieldName}>
                        <Box flex={1} marginRight={0} width={45}>
                          <Input
                            label={placeholder}
                            placeholder={placeholder}
                            value={values[fieldName]}
                            textContentType={type}
                            onChangeText={handleChange(fieldName)}
                            error={
                              (touched?.[fieldName] && errors?.[fieldName]) ||
                              ''
                            }
                            type="outline"
                            secureTextEntry={fieldName === 'password'}
                          />
                        </Box>
                      </Box>
                    ) : null;
                  },
                )}

                <Button
                  onPress={() => handleSubmit()}
                  title="Create account"
                  bgColor="btnBlue"
                  width={300}
                />
              </>
            )}
          </Formik>
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          paddingVertical={16}
          width={300}>
          <Text style={{ marginRight: 8, color: 'white' }}>
            Do you have an account?
          </Text>
          <Button
            onPress={() => navigation.navigate(Screens.SignIn)}
            title="Login"
            type="text"
            textDecorationLine="underline"
          />
        </Box>
      </Box>
    </ScrollView>
  );
};
