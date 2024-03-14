import { Link, Outlet } from "react-router-dom";
import { navData } from "../utilities/data";
import { LoaderAnimation, Logo } from "../assets";
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
      {domLoaded ? (
        <div>
          <div
            className={` ${
              location === "/our_programs"
                ? " border-baseOrange absolute left-[5%] right-[50%] bg-mainWhite"
                : " border-darkerBlue"
            } nav flex items-center justify-between w-[90%] mx-auto rounded-full mt-6 border-2 py-[2px] px-[3px]`}
          >
            <div className="brnad">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="nav-links">
              {location === "/our_programs" ? (
                ""
              ) : (
                <ul className="flex items-center gap-5">
                  {navData.map((page) => (
                    <a key={page.id} href={page.to}>
                      <li className="inter-small">{page.page}</li>
                    </a>
                  ))}
                </ul>
              )}
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
      ) : (
        <div className="h-[100vh] w-full bg-mainWhite flex items-center justify-center">
          <img src={LoaderAnimation} alt="loaer" className="m-auto" />
        </div>
      )}
    </>
  );
};

export default RootLayout;
