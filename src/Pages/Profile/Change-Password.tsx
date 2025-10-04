import Form from "@/components/Form";
import type { ButtonType } from "@/interfaces/ButtonType";
import type { FieldType } from "@/interfaces/FieldType";
import { useFormik } from "formik";

import * as Yup from "yup";

const ChangePasswordTextArray: FieldType[] = [
  {
    label: "Old Password",
    isCompulsory: "Compulsory",
    type: "text",
    name: "oldPassword",
  },
  {
    label: "New Password",
    isCompulsory: "Compulsory",
    type: "text",
    name: "newPassword",
  },
];

const { label, btnSvgIcon, color }: ButtonType = {
  label: "Submit",
  btnSvgIcon: "fa fa-paper-plane",
  color: "bg-black",
};

export const EditProfileValidationSchema = Yup.object({
  oldPassword: Yup.string().required("Old Passwword is required"),
  newPassword: Yup.string().required("new Password is required"),
});

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: EditProfileValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form
      type="HorizontalFormCenter"
      title="Change Password"
      UITextArray={ChangePasswordTextArray}
      btnSvgIcon={btnSvgIcon}
      color={color}
      btnLabel={label}
      formik={formik}
    />
  );
};

export default ChangePassword;
