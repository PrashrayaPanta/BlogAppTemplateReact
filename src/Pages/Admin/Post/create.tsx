import type { FieldType } from "../../../interfaces/FieldType";
import type { ButtonType } from "@/interfaces/ButtonType";
import { useFormik } from "formik";
import Form from "../../../components/Form";
import * as Yup from "yup";
const PostUITextArray: FieldType[] = [
  {
    label: "Title",
    isCompulsory: "Compulsory",
    type: "text",
    name: "name",
  },
];

const PostUITextareaArray: FieldType[] = [
  {
    name: "description",
    label: "Description",
    isCompulsory: "Compulsory",
  },
];

const PostFileUploadUIArray: FieldType[] = [
  {
    name: "images",
    label: "Images",
    isCompulsory: "Compulsory",
  },
];

const { label, btnSvgIcon, color }: ButtonType = {
  label: "Submit",
  btnSvgIcon: "fa fa-paper-plane",
  color: "bg-black",
};

export const ValidationSchema = Yup.object({
  name: Yup.string().required("Email is required"),
  description: Yup.string().required("Description is required"),
  images: Yup.mixed().test(
    "count",
    "select atleast one file",
    (files) => files.length > 0
  ),
  // .test("type", "select valid image files", (files) => {
  //   for (let image of files) {
  //     if (!image.type.startsWith("image")) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }),
});

const Create = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      images: [],
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form
      title="Post Add Form"
      formik={formik}
      UITextArray={PostUITextArray}
      UITextAreaArray={PostUITextareaArray}
      fileUploadUIInformation={PostFileUploadUIArray}
      btnLabel={label}
      btnSvgIcon={btnSvgIcon}
      color={color}
    />
  );
};

export default Create;
