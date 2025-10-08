import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.value);

  console.log(user);

  if (!user) {
    navigate("/login");
  }

  return element;
};

export default PrivateRoute;
