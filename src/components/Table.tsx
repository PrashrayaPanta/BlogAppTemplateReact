import { useFormik } from "formik";
import NavigationButton from "./NavigationButton";
import SubmitButton from "./SubmitButton";

const Table = ({ formik }: { formik: any }) => {
  return (
    <>
      <table className="px-3 w-full">
        <thead>
          <tr className="">
            <th className="bg-black text-left border-r border-gray-300 text-white px-2">
              Name
            </th>
            <th className="bg-black text-left border-r border-gray-300 text-white px-2">
              created at
            </th>
            <th className="bg-black text-left border-r border-gray-300 text-white px-2">
              Updated at
            </th>
            <th className="bg-black text-left border-r border-gray-300 text-white px-2">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {/* <!-- First Row --> */}
          <tr className="text-gray-800">
            {/* <!-- Category Name --> */}
            <td className="px-2 border border-gray-300">Fashion</td>

            {/* <!-- Created At --> */}
            <td className="px-2 border border-gray-300">
              Aug 15, 2025 2:13 PM
            </td>

            {/* <!-- Updated At --> */}
            <td className="px-2 border border-gray-300">
              Aug 15, 2025 2:13 PM
            </td>

            {/* <!-- Actions --> */}
            <td className="px-2 py-2 border border-gray-300">
              <div className="flex items-center gap-3">
                {/* <!-- Edit Hyperlink --> */}

                {/* <SubmitButton
                  label="Edit"
                  svgIcon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 23 30"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.076 4.87514L19.6778 10.1603C19.8295 10.3829 19.8295 10.7462 19.6778 10.9689L10.9569 23.7658L7.25139 24.3693C6.75625 24.4513 6.33698 23.8361 6.39288 23.1095L6.80417 17.672L15.525 4.87514C15.6767 4.65248 15.9243 4.65248 16.076 4.87514ZM22.5448 3.53334L20.5962 0.673965C19.9892 -0.21666 19.003 -0.21666 18.392 0.673965L16.9785 2.74818C16.8267 2.97084 16.8267 3.33412 16.9785 3.55678L20.5802 8.84193C20.7319 9.06459 20.9795 9.06459 21.1313 8.84193L22.5448 6.76772C23.1517 5.87123 23.1517 4.42397 22.5448 3.53334ZM15.3333 20.2853V26.2501H2.55556V7.50014H11.7316C11.8594 7.50014 11.9792 7.42397 12.071 7.29506L13.6682 4.95131C13.9717 4.506 13.7561 3.75014 13.3288 3.75014H1.91667C0.858507 3.75014 0 5.0099 0 6.56264V27.1876C0 28.7404 0.858507 30.0001 1.91667 30.0001H15.9722C17.0304 30.0001 17.8889 28.7404 17.8889 27.1876V17.9415C17.8889 17.3146 17.3738 17.004 17.0703 17.4435L15.4731 19.7872C15.3852 19.922 15.3333 20.0978 15.3333 20.2853Z" />
                    </svg>
                  }
                  color="bg-black"
                /> */}
                <NavigationButton label="Edit" svgIcon="fas fa-edit" />
                {/* <a
                    href="/category/edit"
                    className="bg-black text-white flex items-center px-4 py-2 gap-2 rounded-sm hover:bg-gray-800 transition"
                  >
                    <span>Edit</span>
                  </a> */}

                {/* <!-- Delete Button --> */}

                <SubmitButton
                  label="Delete"
                  svgIcon="fa-solid fa-trash"
                  color="bg-red-500"
                  formik={formik}
                />
                {/* <a
                    href="#"
                    className="bg-red-500 text-white flex items-center px-4 py-2 gap-2 rounded-sm hover:bg-red-600 transition"
                  >
                    <span>Delete</span>
                  </a> */}
              </div>
            </td>
          </tr>

          {/* <!-- Second Row --> */}

          <tr className="text-gray-800">
            {/* <!-- Category Name --> */}
            <td className="px-2 border border-gray-300">Fashion</td>

            {/* <!-- Created At --> */}
            <td className="px-2 border border-gray-300">
              Aug 15, 2025 2:13 PM
            </td>

            {/* <!-- Updated At --> */}
            <td className="px-2 border border-gray-300">
              Aug 15, 2025 2:13 PM
            </td>

            {/* <!-- Actions --> */}
            <td className="px-2 py-2 border border-gray-300">
              <div className="flex items-center gap-3">
                {/* <!-- Edit Button --> */}

                <NavigationButton label="Edit" svgIcon="fas fa-edit" />
                {/* <a
                  href="/category/edit"
                  className="bg-black text-white flex items-center px-4 py-2 gap-2 rounded-sm hover:bg-gray-800 transition"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 23 30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.076 4.87514L19.6778 10.1603C19.8295 10.3829 19.8295 10.7462 19.6778 10.9689L10.9569 23.7658L7.25139 24.3693C6.75625 24.4513 6.33698 23.8361 6.39288 23.1095L6.80417 17.672L15.525 4.87514C15.6767 4.65248 15.9243 4.65248 16.076 4.87514ZM22.5448 3.53334L20.5962 0.673965C19.9892 -0.21666 19.003 -0.21666 18.392 0.673965L16.9785 2.74818C16.8267 2.97084 16.8267 3.33412 16.9785 3.55678L20.5802 8.84193C20.7319 9.06459 20.9795 9.06459 21.1313 8.84193L22.5448 6.76772C23.1517 5.87123 23.1517 4.42397 22.5448 3.53334ZM15.3333 20.2853V26.2501H2.55556V7.50014H11.7316C11.8594 7.50014 11.9792 7.42397 12.071 7.29506L13.6682 4.95131C13.9717 4.506 13.7561 3.75014 13.3288 3.75014H1.91667C0.858507 3.75014 0 5.0099 0 6.56264V27.1876C0 28.7404 0.858507 30.0001 1.91667 30.0001H15.9722C17.0304 30.0001 17.8889 28.7404 17.8889 27.1876V17.9415C17.8889 17.3146 17.3738 17.004 17.0703 17.4435L15.4731 19.7872C15.3852 19.922 15.3333 20.0978 15.3333 20.2853Z" />
                  </svg>
                  <span>Edit</span>
                </a> */}

                {/* <!-- Delete Button --> */}
                <SubmitButton
                  label="Delete"
                  svgIcon="fa fa-trash"
                  color="bg-red-500"
                  formik={formik}
                />
              </div>
            </td>
          </tr>

          {/* <!-- Third Row --> */}

          <tr className="text-gray-800">
            {/* <!-- Category Name --> */}
            <td className="px-2 border border-gray-300">Fashion</td>

            {/* <!-- Created At --> */}
            <td className="px-2 border border-gray-300">
              Aug 15, 2025 2:13 PM
            </td>

            {/* <!-- Updated At --> */}
            <td className="px-2 border border-gray-300">
              Aug 15, 2025 2:13 PM
            </td>

            {/* <!-- Actions --> */}
            <td className="px-2 py-2 border border-gray-300">
              {/* <!-- Two Hypewr Link with Edit and Delete Button --> */}
              <div className="flex items-center gap-3">
                {/* <!-- Edit Button -->
                <!-- All Same --> */}
                <NavigationButton label="Edit" svgIcon="fas fa-edit" />

                {/* <!-- Delete Button --> */}
                <SubmitButton
                  label="Delete"
                  svgIcon="fa fa-trash"
                  color="bg-red-500"
                  formik={formik}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
