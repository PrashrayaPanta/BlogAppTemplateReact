import NavigationButton from "@/components/NavigationButton";
import Table from "@/components/Table";
import Title from "@/components/Title";
import { useFormik } from "formik";

export const initialValues: { name: string } = { name: "" };

const List = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {/* Catgeory Table Plus ADD Hyper Link with Category List Text  */}
      <div className="shadow-2xl rounded-sm py-8  px-4 mx-4 ">
        {/* <!-- Add Category  Hyper Link + Category List Text --> */}
        <div className="flex justify-between py-4 flex-wrap lg:flex-nowrap">
          <Title text="Category List" />

          <NavigationButton
            label="Add"
            svgIcon="fa-solid fa-plus"
            color="bg-black"
            type="min-height-content"
          />

          {/* <h1 className="font-bold md:text-4xl text-lg">Category List</h1> */}

          {/* <!-- h-min unique for it --> */}

          {/* <!-- Add Hyper Link --> */}

          {/* <a
            href="/category/add"
            className="bg-black px-4 py-2 flex items-center h-min text-white hover:cursor-pointer gap-3 rounded-sm"
          >
            Add
          </a> */}
        </div>

        <div className="overflow-x-auto">
          {/* Table */}
          <Table formik={formik} />
        </div>
      </div>
    </>
  );
};

export default List;
