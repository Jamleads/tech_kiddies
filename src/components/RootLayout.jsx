import { Link, Outlet } from "react-router-dom";
import { navData } from "../utilities/data";
import Button from "./Button";
import { Logo } from "../assets";

const RootLayout = () => {
  return (
    <>
      {/* <div className="float-btn flex items-center justify-center">
        <Button btnText={"Explore Our Programs"} />
        <Button
          btnText={"Join Our Parent Community"}
          btnStyle={`lg:px-5 px-3 py-3 bg-transparent border-0 underline text-xs inter-regular font-bold`}
        />
      </div> */}

      <div className="nav flex items-center justify-between w-[90%] mx-auto rounded-full mt-6 border-2 border-darkerBlue py-[2px] px-[3px]">
        <div className="brnad">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-links">
          <ul className="flex items-center gap-5">
            {navData.map((page) => (
              <Link key={page.id} to={page.to}>
                <li className="inter-small">{page.page}</li>
              </Link>
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
