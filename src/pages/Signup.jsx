import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Center,
  //   Checkbox,
  //   Select,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import { login, signup } from "../redux/auth/auth.actions";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const { isSignedUp, isSignUpLoading, isSignUpError } = useSelector(
    (store) => store.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      type: "customer",
      //   married: false,
      //   country: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(signup(values));
    },
  });
  useEffect(() => {
    if (isSignedUp) {
      navigate("/login");
    }
  }, [isSignedUp]);

  return (
    <Center width="100%">
      <Box
        boxShadow="dark-lg"
        width={["80%", "60%", "50%", "50%"]}
        padding="5rem"
      >
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </FormControl>
          <Button
            isLoading={isSignUpLoading}
            loadingText="Signing Up"
            size="lg"
            mt={6}
            type="submit"
            width="100%"
          >
            Login
          </Button>
        </form>
        {isSignUpError ? (
          <Text>Something went wrong whilt signing up</Text>
        ) : null}
        <Link to="/login">login</Link>
      </Box>
    </Center>
  );
};

export default Signup;
