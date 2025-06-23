import imageslogo from "../images/logo.jpeg";
import { useNavigate } from "react-router-dom";

const NavbarHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className=" pl-9 pt-5 pb-5 flex items-center justify-between pr-9 bg-gray-900
      "
      >
        <div className="flex gap-5 justify-center items-center">
          <div
            className="border-2 h-[70px] w-[70px] rounded-[50%] "
            style={{
              backgroundImage: `url(${imageslogo})`,
              backgroundSize: "cover",
            }}
          ></div>
          <p className="logoName">Local Taste</p>
        </div>
        <div className="flex gap-[40px]">
          <div
            className="link"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className="link"
            onClick={() => {
              navigate("/product");
            }}
          >
            Products
          </div>
          <div
            className="link"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
          <div
            className="link"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            className="link"
            onClick={() => {
              navigate("/contactPage");
            }}
          >
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarHeader;
