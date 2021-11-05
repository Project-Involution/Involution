import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  VStack,
  FormErrorMessage
} from "@chakra-ui/react";

import { Formik, Form, Field, FormikProps } from 'formik';


const SignupPanel: React.FC = () => {

  function validateName(value: any): string | undefined {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (

    <Flex h={{ base: "100vh", lg: "80vh" }} justify="center" align="center">
      <Formik
        initialValues={{ username: "Sasuke", email:"example@example.com" }}
        onSubmit={async (values, actions) => {

          interface TestResponse{
            msg: string;
          }

          let data: TestResponse = await fetch("http://localhost:5000/login", {
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
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.username && form.touched.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input {...field} id="username" placeholder="Max" />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email">

              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>

                  <Input {...field} id="email" type="email" placeholder="email" />

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
