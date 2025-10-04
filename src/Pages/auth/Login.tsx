import { useFormik } from "formik";

import Form from "../../components/Form";
import * as Yup from "yup";

import type { FieldType } from "../../interfaces/FieldType";

import { http } from "../../http";

import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "@/store";
import { useNavigate } from "react-router-dom";

interface userinfo {
  user: string;
}

const loginUIArray: FieldType[] = [
  {
    label: "Email",
    type: "text",
    isCompulsory: "Compulsory",
    name: "email",
  },

  {
    label: "Password",
    type: "password",
    isCompulsory: "Compulsory",
    name: "password",
  },
];

export interface ButtonType {
  type?: string;
  label: string;
  btnSvgIcon: string;
  color: string;
}

const { label, btnSvgIcon, color }: ButtonType = {
  label: "Login",
  btnSvgIcon: "fa fa-arrow-right-to-bracket",
  color: "bg-black",
};

const LoginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form is submiited");

      console.log(values);

      const Login = async () => {
        try {
          const { data } = await http.post("/users/login", values, {
            withCredentials: true,
          });
          console.log(data.token);
          const { user } = jwtDecode(data.token);

          console.log("This is userInfo which is in decoded from token", user);
          localStorage.setItem("userInfo", JSON.stringify(user));
          dispatch(setUser(user));
          navigate("/dashboard");
        } catch ({ response }) {
          formik.setFieldError("email", response?.data.message);
        } finally {
          setSubmitting(false);
          formik.resetForm();
        }
      };

      Login();
    },

    //   await http.post("")

    // }
  });

  return (
    <>
      {/* <!-- Login Form --> */}
      <Form
        type="HorizontalFormCenter"
        title="Login"
        formik={formik}
        UITextArray={loginUIArray}
        btnLabel={label}
        btnSvgIcon={btnSvgIcon}
        color={color}
      />
    </>
  );
};

export default Login;
