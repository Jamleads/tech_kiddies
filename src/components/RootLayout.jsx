import { Link, Outlet } from "react-router-dom";
import { navData } from "../utilities/data";
import { Logo } from "../assets";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const path = useLocation();
  const location = path.pathname;
  console.log("location", location);

  useEffect(() => {
    const handleDOMLoaded = () => {
      setDomLoaded(!domLoaded);
    };
    window.onload = handleDOMLoaded;
    return () => {
      window.onload = null;
    };
  }, [domLoaded]);

  return (
    <>
      <div>
        <div
          className={` ${
            location === "/our_programs"
              ? "border-baseOrange absolute left-[5%] right-[50%] bg-mainWhite"
              : location === "/subscribe"
              ? "border-darkerBlue absolute left-[5%] right-[50%] bg-mainWhite"
              : " border-darkerBlue"
          } nav flex items-center justify-between w-[90%] mx-auto rounded-full mt-6 border-2 py-[2px] px-[3px]`}
        >
          <div className="brnad">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="nav-links">
            <ul className="flex items-center gap-5">
              {navData.map((page) => (
                <li key={page.id} className="inter-small">
                  {page.to.startsWith("#") ? (
                    <a href={location === "/" ? page.to : "/"}>{page.page}</a>
                  ) : (
                    <Link to={page.to}>{page.page}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="action">
            <Link to="our_programs">
              <button
                className={`${
                  location === "/our_programs"
                    ? " bg-baseOrange"
                    : " bg-darkerBlue"
                } px-5 py-3 rounded-full border-0 text-mainWhite text-xs`}
              >
                Explore Our Programs
              </button>
            </Link>
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
