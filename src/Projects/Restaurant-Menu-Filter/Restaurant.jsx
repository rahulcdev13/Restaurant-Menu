import React, { useState } from "react";
import "./Restaurant.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElm) => {
      return curElm.Category;
    })
  ),"All",
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (Category) => {
    if (Category==="All") {
      setMenuData(Menu) 
      return;
      
    }
    const updatedList = Menu.filter((currElem) => {
      return currElem.Category === Category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard FinalmenuData={menuData} />
    </>
  );
};

export default Restaurant;
