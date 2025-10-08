import BlogSection from "@/components/BlogSection";
import { useParams } from "react-router-dom";

const CategoriesProduct = () => {
  const { slug } = useParams();

  console.log(slug);

  return (
    <>
      <BlogSection />
    </>
  );
};

export default CategoriesProduct;
