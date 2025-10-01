const SubmitButton = ({
  label,
  svgIcon,
  color = "bg-black",
  type,
  formik,
}: {
  label?: string;
  svgIcon: string;
  color?: string;
  formik?: any;
  type: string;
}) => {
  // Add Button Vanni ma h-min hunu paryo aarru same

  // Edit and Delete ma same

  // Form Ko Button ma w-max ra mt-5

  return (
    <>
      <button
        className={`${color} ${type === "full-width" && "w-full"}
        } text-white px-4 py-2 rounded-sm flex items-center justify-center  hover:cursor-pointer  gap-2`}
      >
        <i
          className={`${
            formik?.isSubmitting ? "fa fa-spinner fa-spin" : svgIcon
          } `}
        ></i>
        {label}
      </button>
    </>
  );
};

export default SubmitButton;
