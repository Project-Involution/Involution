import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from "@chakra-ui/react";

import { 
  Formik, 
  Form, 
  Field, 
  FormikProps, 
  FieldInputProps
} from 'formik';


const SignupPanel: React.FC = () => {

  function validateName(value: any): string | undefined {
    let error;
    if (value.toLowerCase() === "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (

    <Flex h={{ base: "100vh", lg: "80vh" }} justify="center" align="center">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={async (values, actions) => {

          interface TestResponse {
            msg: string;
          }

          let data: TestResponse = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)

          })
            .then(resp => resp.json())
            .then(resp => resp);

          alert(data["msg"]);

        }}
      >
        {(props: FormikProps<any>) => (
          <Form>

            <Field name="username" validate={validateName}>
              {({ 
                field, 
                form 
              }: {field: FieldInputProps<string>, form: any}) => (
                <FormControl isRequired isInvalid={form.errors.username && form.touched.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input {...field} id="username" placeholder="Max" />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ 
                field, 
                form 
              }: {field: FieldInputProps<string>, form: any}) => (
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" type="email" placeholder="Email" />
                </FormControl>
              )}
            </Field>

            <Field name="password">
              {({ 
                field, 
                form 
              }: {field: FieldInputProps<string>, form: any}) => (
                <FormControl isRequired>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input {...field} id="password" type="password" />
                </FormControl>
              )}
            </Field>

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>

          </Form>
        )}
      </Formik>
    </Flex>

  );
};

export default SignupPanel;
