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
  type: "full-width",
  label: "Submit",
  btnSvgIcon: "fa fa-paper-plane",
  color: "bg-red-500",
};

const Edit = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
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
        btnType={type}
        btnLabel={label}
        btnSvgIcon={btnSvgIcon}
        color={color}
      />
    </>
  );
};

export default Edit;
