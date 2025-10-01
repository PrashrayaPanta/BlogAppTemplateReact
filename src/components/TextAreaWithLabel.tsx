const TextAreaWithLabel = ({
  label,
  isCompulsory,
  formik,
  name,
}: {
  label: string;
  isCompulsory?: string;
  formik: any;
  name?: string;
}) => {
  console.log(formik, name);

  console.log(formik);
  const hasError = name && formik.errors[name] && formik.touched[name];
  const errorMessage = hasError ? formik.errors[name] : "";
  return (
    <>
      <div className="flex  flex-col">
        {/* Label with Mandatory Icon */}
        <div className="flex">
          <label htmlFor="">{label}</label>
          {isCompulsory === "Compulsory" && (
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-red-500"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 6v12"></path>
              <path d="M17.196 9 6.804 15"></path>
              <path d="m6.804 9 10.392 6"></path>
            </svg>
          )}
        </div>

        <textarea
          name={name}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          value={formik?.values[name]}
          rows={4}
          placeholder="Enter your message"
          className={`w-full border-1 focus:outline-none px-2 rounded-sm ${
            hasError ? "border-red-500" : "border-gray-300"
          }`}
        ></textarea>
        {/* Display error message */}
        {hasError && (
          <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default TextAreaWithLabel;
