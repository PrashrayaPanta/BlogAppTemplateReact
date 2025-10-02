import type { FieldType } from "../../../interfaces/FieldType";
import { useFormik } from "formik";
import Form from "../../../components/Form";
import type { ButtonType } from "../../../interfaces/ButtonType";
const CategoryUITextFieldArray: FieldType[] = [
  {
    label: "Category Name",
    isCompulsory: "Compulsory",
    type: "text",
    name: "name",
  },
];

// Button
const { label, type, btnSvgIcon, color }: ButtonType = {
  label: "Submit",
  btnSvgIcon: "fa fa-paper-plane",
  color: "bg-black",
};

import * as Yup from "yup";

export const CatgeoryValidationSchema = Yup.object({
  name: Yup.string().required("Email is required"),
});

import { initialValues } from "./List";

const Create = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: CatgeoryValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form
      title="Category Add Form"
      formik={formik}
      UITextArray={CategoryUITextFieldArray}
      btnLabel={label}
      btnType={type}
      btnSvgIcon={btnSvgIcon}
      color={color}
    />
  );
};

export default Create;
