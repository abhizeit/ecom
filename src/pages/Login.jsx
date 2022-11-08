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
import { login } from "../redux/auth/auth.actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuth, isLoading, isError } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      //   married: false,
      //   country: "",
    },
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

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
          {/* <Checkbox
          name="married"
          onChange={formik.handleChange}
          value={formik.values.married}
        >
          Married
        </Checkbox>

        <Select
          name="country"
          onChange={formik.handleChange}
          value={formik.values.country}
          placeholder="select your country"
        >
          <option value="india">india</option>
          <option value="nepal">nepal</option>
          <option value="china">china</option>
        </Select> */}
          <Button size="lg" mt={6} type="submit" width="100%">
            Login
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
