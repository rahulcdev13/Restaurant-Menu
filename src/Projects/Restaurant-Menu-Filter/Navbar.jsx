import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div className="main-navbar">
        <div className="navbar">
          <div className="btn-group">
            {menuList.map((curElm) => {
              return (
                <>
                  <button
                    className="btn-group__item"
                    onClick={() => filterItem(curElm)}
                  >
                    {curElm}
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
