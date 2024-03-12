import { Link, Outlet } from "react-router-dom";
import { navData } from "../utilities/data";
import Button from "./Button";
import { Logo } from "../assets";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const RootLayout = () => {
  const location = useLocation();
  console.log("location", location.pathname);

  useEffect(() => {
    const handleDOMLoaded = () => {
      console.log("Yes, every element has loaded");
    };

    window.onload = handleDOMLoaded;
    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <>
      <div
        className={` ${""} nav flex items-center justify-between w-[90%] mx-auto rounded-full mt-6 border-2 border-darkerBlue py-[2px] px-[3px]`}
      >
        <div className="brnad">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="nav-links">
          <ul className="flex items-center gap-5">
            {navData.map((page) => (
              <a key={page.id} href={page.to}>
                <li className="inter-small">{page.page}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="action">
          <Button btnText={"Explore Our Programs"} />
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
