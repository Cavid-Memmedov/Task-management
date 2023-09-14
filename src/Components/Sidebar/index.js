import React, { useState } from "react";
import Styles from "./sidebar.module.css";
function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClick = (menuIndex) => {
    setActiveMenu(menuIndex);
  };

  return (
    <>
      <aside className="py-4 ps-4 ">
        <div className="d-flex align-items-center">
          <span className={`${Styles.logoname} d-inline-block`}>TaskMag</span>
        </div>
        <div className="mt-3 pb-5">
          <div className=" pt-5">
            <div
              className={`${
                Styles.menuname
              } px-4 p-2 rounded-3 d-inline-block ${
                activeMenu === 1 ? "activeMenu" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              <span className="pe-2">
                <i className="fa-solid fa-computer"></i>{" "}
              </span>
              <span>Dashboard</span>
            </div>
          </div>
          <div className=" pt-3">
            <div
              className={`${
                Styles.menuname
              } px-4 p-2 rounded-3 d-inline-block ${
                activeMenu === 2 ? "activeMenu" : ""
              }`}
              onClick={() => handleClick(2)}
            >
              <span className="pe-2">
                <i className="fa-solid fa-folder-closed"></i>{" "}
              </span>
              <span>Project</span>
            </div>
          </div>
          <div className=" pt-3">
            <div
              className={`${
                Styles.menuname
              } px-4 p-2 rounded-3 d-inline-block ${
                activeMenu === 3 ? "activeMenu" : ""
              }`}
              onClick={() => handleClick(3)}
            >
              <span className="pe-2">
                <i className="fa-solid fa-chart-line"></i>
              </span>
              <span>Activity </span>
            </div>
          </div>
          <div className=" pt-3">
            <div
              className={`${
                Styles.menuname
              } px-4 p-2 rounded-3 d-inline-block ${
                activeMenu === 4 ? "activeMenu" : ""
              }`}
              onClick={() => handleClick(4)}
            >
              <span className="pe-2">
                <i className="fa-solid fa-bell"></i>{" "}
              </span>
              <span>Notification</span>
            </div>
          </div>
          <div className=" pt-3">
            <div
              className={`${
                Styles.menuname
              } px-4 p-2 rounded-3 d-inline-block ${
                activeMenu === 5 ? "activeMenu" : ""
              }`}
              onClick={() => handleClick(5)}
            >
              <span className="pe-2">
                <i className="fa-solid fa-gear"></i>{" "}
              </span>
              <span>Setting</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
