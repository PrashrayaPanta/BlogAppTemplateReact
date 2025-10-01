import Form from "../../components/Form";

import { useFormik } from "formik";

import type { FormikProps } from "formik";

import * as Yup from "yup";

const RegisterUIInformation: RegisterUI[] = [
  {
    label: "username",
    isCompulsory: "Compulsory",
    type: "text",
    name: "username",
  },

  {
    label: "email",
    isCompulsory: "Compulsory",
    type: "text",
    name: "email",
  },

  {
    label: "password",
    isCompulsory: "Compulsory",
    type: "password",
    name: "password",
  },
];

export interface RegisterUI {
  label: string;
  isCompulsory?: string;
  type: string;
  name: string;
}

export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
}

const { type, label, btnSvgIcon, color } = {
  type: "small-width",
  label: "Register",
  btnSvgIcon: "fa fa-arrow-right-to-bracket",
  color: "bg-black",
};

const RegisterValidationSchema = Yup.object({
  username: Yup.string().required("Email is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
  const formik: FormikProps<RegisterFormValues> = useFormik<RegisterFormValues>(
    {
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: RegisterValidationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    }
  );
  return (
    <>
      {/* <!-- Register Form --> */}

      <Form
        title="Register Form"
        type="HorizontalFormCenter"
        UITextArray={RegisterUIInformation}
        formik={formik}
        btnLabel={label}
        btnType={type}
        btnSvgIcon={btnSvgIcon}
        color={color}
      />
    </>
  );
};

export default Register;
