import Form from "@/components/Form";
import type { FieldType } from "@/interfaces/FieldType";
import type { ButtonType } from "@/interfaces/ButtonType";
import { useFormik } from "formik";

const PostUIArray: FieldType[] = [
  {
    label: "Name",
    isCompulsory: "Compulsory",
    type: "text",
    name: "name",
  },
];

const { type, label, btnSvgIcon, color }: ButtonType = {
  label: "Submit",
  btnSvgIcon: "fa fa-paper-plane",
  color: "bg-black",
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
        title="Edit Post"
        formik={formik}
        UITextArray={PostUIArray}
        btnType={type}
        btnLabel={label}
        btnSvgIcon={btnSvgIcon}
        color={color}
      />
    </>
  );
};

export default Edit;
