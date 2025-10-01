import type { FieldType } from "../../../interfaces/FieldType";
import { useFormik } from "formik";
import Form from "../../../components/Form";
const CategoryUITextArray: FieldType[] = [
  {
    label: "Category Name",
    isCompulsory: "Compulsory",
    type: "text",
    name: "name",
  },
];

// Button

interface ButtonType {
  label: string;
  type?: string;
  btnSvgIcon: string;
  color: string;
}

const { label, btnSvgIcon, color }: ButtonType = {
  label: "Submit",
  btnSvgIcon: "fa fa-paper-plane",
  color: "bg-black",
};

const Create = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form
      title="Post Add Form"
      formik={formik}
      UITextArray={CategoryUITextArray}
      btnLabel={label}
      btnSvgIcon={btnSvgIcon}
      color={color}
    />
  );
};

export default Create;
