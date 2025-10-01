import type { FieldType } from "../../../interfaces/FieldType";
import { useFormik } from "formik";
import Form from "../../../components/Form";
const CategoryUITextFieldArray: FieldType[] = [
  {
    label: "Category Name",
    isCompulsory: "Compulsory",
    type: "text",
    name: "name",
  },
];

// Button
const { label, type, btnSvgIcon, color } = {
  label: "Submit",
  type: "small-width",
  btnSvgIcon: "fa fa-paper-plane",
  color: "bg-black",
};

import { initialValues } from "./List";

const Create = () => {
  const formik = useFormik({
    initialValues,
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
