import Form from "@/components/Form";
import type { ButtonType } from "@/interfaces/ButtonType";
import type { FieldType } from "@/interfaces/FieldType";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

import * as Yup from "yup";
const EditProfileTextArray: FieldType[] = [
  {
    label: "Username",
    isCompulsory: "Compulsory",
    type: "text",
    name: "username",
  },
  {
    label: "Email",
    isCompulsory: "Compulsory",
    type: "text",
    name: "email",
  },
];

const { type, label, btnSvgIcon, color }: ButtonType = {
  type: "small-width",
  label: "Submit",
  btnSvgIcon: "fa fa-paper-plane",
  color: "bg-black",
};

export const EditProfileValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("email is required"),
});

const EditProfile = () => {
  const user = useSelector((state) => state.user.value);

  const formik = useFormik({
    initialValues: {
      username: user.username,
      email: user.email,
    },
    validationSchema: EditProfileValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Form
        title="Edit Profile"
        UITextArray={EditProfileTextArray}
        btnSvgIcon={btnSvgIcon}
        color={color}
        btnLabel={label}
        btnType={type}
        formik={formik}
      />
    </>
  );
};

export default EditProfile;
