import { useLocation } from "react-router-dom";

const NavigationButton = ({
  label,
  svgIcon,
  color = "bg-black",
  type,
}: {
  label?: string;
  svgIcon: string;
  color?: string;
  type?: string;
}) => {
  const { pathname } = useLocation();

  // Add Button Vanni ma h-min hunu paryo aarru same

  // Edit and Delete ma same

  // Form Ko Button ma w-max ra mt-5) => {
  return (
    <>
      <a
        href={`http://localhost:5173${pathname}/${label?.toLowerCase()}`}
        className={`${color} ${type === "small-width" && "w-max"}  ${
          type === "min-height-content" && "h-min"
        }
  } text-white px-4 py-2 rounded-sm   flex items-center justify-center  hover:cursor-pointer  gap-2`}
      >
        <i className={svgIcon}></i>
        {label}
      </a>
    </>
  );
};

export default NavigationButton;
