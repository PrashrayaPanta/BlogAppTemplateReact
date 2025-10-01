import { useFormik } from "formik";

import type { FormikProps } from "formik";
import Form from "../../components/Form";
import * as Yup from "yup";

import type { FieldType } from "../../interfaces/FieldType";

import { http } from "../../http";

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

export interface LoginFormValues {
  email: string;
  password: string;
}

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
  const formik: FormikProps<LoginFormValues> = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);

      const Login = async () => {
        try {
          await http.post("/users/login", values);
        } catch ({ response }) {
          // console.log(error);
          formik.setFieldError("email", response?.data?.message);
        } finally {
          setSubmitting(false);
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
