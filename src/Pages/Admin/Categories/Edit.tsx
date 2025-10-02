import Form from "@/components/Form";
import type { FieldType } from "@/interfaces/FieldType";
import { useFormik } from "formik";

const CategoryUIArray: FieldType[] = [
  {
    label: "Category Name",
    isCompulsory: "Compulsory",
    type: "text",
    name: "name",
  },
];

const { type, label, btnSvgIcon, color } = {
  type: "small-width",
  label: "Submit",
  btnSvgIcon: "fa fa-paper-plane",
  color: "bg-black",
};

import { initialValues } from "./List";
import { CatgeoryValidationSchema } from "./Create";

const Edit = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: CatgeoryValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
    },
  });

  return (
    <>
      {/* <!-- Login Form --> */}
      <Form
        title="Edit Category"
        formik={formik}
        UITextArray={CategoryUIArray}
        btnLabel={label}
        btnType={type}
        btnSvgIcon={btnSvgIcon}
        color={color}
      />
    </>
  );
};

export default Edit;
