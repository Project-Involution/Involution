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
  
  
  const LoginPanel: React.FC = () => {

  
    return (
  
      <Flex h={{ base: "100vh", lg: "80vh" }} justify="center" align="center">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values, actions) => {
  
            interface TestResponse {
              msg: string;
            }
  
            let data: TestResponse = await fetch("http://localhost:5000/login", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              credentials: "include",
              body: JSON.stringify(values)
  
            })
              .then(resp => resp.json())
              .then(resp => resp);
  
            alert(data["msg"]);
  
          }}
        >
          {(props: FormikProps<any>) => (
            <Form>
  
              <Field name="username">
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
  
  export default LoginPanel;
  