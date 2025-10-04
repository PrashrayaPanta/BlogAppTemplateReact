import { Info, Star, FileText } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Form from "@/components/Form";
import type { FieldType } from "@/interfaces/FieldType";
import EditProfile from "./Profile/Edit";
import { ChangePassword } from "./Profile";

const Dashboard = () => {
  const EditProfileTextAreaUIArray: FieldType[] = [
    {
      label: "Username",
      name: "username",
      type: "text",
    },
  ];

  const [activeTab, setActiveTab] = useState("details");
  const tabs = [
    { id: "editprofile", label: "Edit Profile", icon: FileText },
    { id: "changepassword", label: "Change Password", icon: Star },
  ];

  return (
    <>
      {/* Tab Section having tab as reviews, soecification, shipping info */}

      <div className="mt-8">
        <nav className="flex justify-center border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col items-center pb-4 pt-2 px-1 ${
                    activeTab === tab.id
                      ? "text-orange-500"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  <Icon className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                      layoutId="activeTab"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="">
          {activeTab === "editprofile" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EditProfile />
              {/* <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Specification</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.details &&
                    Object.keys(product.details).map((key) => (
                      <TableRow key={key}>
                        <TableCell className="font-bold">
                          {key
                            .split(/(?=[A-Z])/)
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </TableCell>
                        <TableCell>{product.details[key]}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table> */}
            </motion.div>
          )}

          {activeTab === "changepassword" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChangePassword />
              {/* <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Specification</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.details &&
                    Object.keys(product.details).map((key) => (
                      <TableRow key={key}>
                        <TableCell className="font-bold">
                          {key
                            .split(/(?=[A-Z])/)
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </TableCell>
                        <TableCell>{product.details[key]}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table> */}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
