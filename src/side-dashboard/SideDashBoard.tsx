import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { LiaHouzz } from "react-icons/lia";
import {
  FaBuilding,
  FaFolder,
  FaMap,
  FaMapMarkerAlt,
  FaProductHunt,
  FaQuestionCircle,
  FaRegMoneyBillAlt,
  FaRoad,
  FaShoppingBasket,
  FaUsers,
} from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import {
  AppTitle,
  MenuButton,
  Sidebar,
  SubMenu,
  SubMenuButton,
} from "./SideDashBoard.styled";

const SideDashBoard = () => {
  const [openMenu, setOpenMenu] = useState<string>("inventory");

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <Sidebar>
      <AppTitle>App Management</AppTitle> <br/>
      <MenuButton
        $isOpen={openMenu === "inventory"}
        $isFirst={true}
        onClick={() => toggleMenu("inventory")}
      >
        <span className="menu-label">
          <LiaHouzz className="menu-icon" /> Inventory
        </span>
        {openMenu === "inventory" ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowLeftIcon />
        )}
      </MenuButton>
      <SubMenu $isOpen={openMenu === "inventory"}>
        <SubMenuButton href="/products">
          <FaProductHunt className="sub-menu-icon" /> Products
        </SubMenuButton>
        <SubMenuButton href="/category">
          <FaFolder className="sub-menu-icon" /> Categories
        </SubMenuButton>
        <SubMenuButton href="/subcategories">
          <FaFolder className="sub-menu-icon" /> Sub Categories
        </SubMenuButton>
        <SubMenuButton href="/productbrands">
          <FaFolder className="sub-menu-icon" /> Product Brands
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaFolder className="sub-menu-icon" /> Product Types
        </SubMenuButton>
      </SubMenu>

      <MenuButton
        $isOpen={openMenu === "customers"}
        $isFirst={false}
        onClick={() => toggleMenu("customers")}
      >
        <span className="menu-label">
          <FaUsers className="menu-icon" /> Customers
        </span>
        {openMenu === "customers" ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowLeftIcon />
        )}
      </MenuButton>
      <SubMenu $isOpen={openMenu === "customers"}>
        <SubMenuButton href="/#">
          <FaUsers className="sub-menu-icon" /> Add Customers
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaUsers className="sub-menu-icon" /> Customer List
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaMap className="sub-menu-icon" /> Delivery Address
        </SubMenuButton>
      </SubMenu>

      <MenuButton
        $isOpen={openMenu === "orders"}
        $isFirst={false}
        onClick={() => toggleMenu("orders")}
      >
        <span className="menu-label">
          <FaShoppingBasket className="menu-icon" /> Orders
        </span>
        {openMenu === "orders" ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowLeftIcon />
        )}
      </MenuButton>
      <SubMenu $isOpen={openMenu === "orders"}>
        <SubMenuButton href="/#">
          <FaShoppingBasket className="sub-menu-icon" /> Route Orders
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaShoppingBasket className="sub-menu-icon" /> Hub Orders
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaShoppingBasket className="sub-menu-icon" /> Delivery Boy Orders
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaShoppingBasket className="sub-menu-icon" /> Locality Orders
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaShoppingBasket className="sub-menu-icon" /> Order Summary
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaShoppingBasket className="sub-menu-icon" />
          Future Order Summary
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaShoppingBasket className="sub-menu-icon" /> Order Schedular Status
        </SubMenuButton>
      </SubMenu>

      <MenuButton
        $isOpen={openMenu === "delivery-boys"}
        $isFirst={false}
        onClick={() => toggleMenu("delivery-boys")}
      >
        <span className="menu-label">
          <FaCarRear className="menu-icon" />
          Delivery Boys
        </span>
        {openMenu === "delivery-boys" ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowLeftIcon />
        )}
      </MenuButton>
      <SubMenu $isOpen={openMenu === "delivery-boys"}>
        <SubMenuButton href="/#">
          <FaCarRear className="sub-menu-icon" /> Delivery Boys
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaRegMoneyBillAlt className="sub-menu-icon" />
          Commission Setup
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaRegMoneyBillAlt className="sub-menu-icon" />
          Commission Payouts
        </SubMenuButton>
      </SubMenu>

      <MenuButton
        $isOpen={openMenu === "faqs"}
        $isFirst={false}
        onClick={() => toggleMenu("faqs")}
      >
        <span className="menu-label">
          <FaQuestionCircle className="menu-icon" />
          Faqs
        </span>
        {openMenu === "faqs" ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowLeftIcon />
        )}
      </MenuButton>
      <SubMenu $isOpen={openMenu === "faqs"}>
        <SubMenuButton href="/#">
          <FaQuestionCircle className="sub-menu-icon" />
          Faq Categoried
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaQuestionCircle className="sub-menu-icon" />
          Faqs
        </SubMenuButton>
      </SubMenu>

      <MenuButton
        $isOpen={openMenu === "localities"}
        $isFirst={false}
        onClick={() => toggleMenu("localities")}
      >
        <span className="menu-label">
          <FaMap className="menu-icon" /> Localities
        </span>
        {openMenu === "localities" ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowLeftIcon />
        )}
      </MenuButton>
      <SubMenu $isOpen={openMenu === "localities"}>
        <SubMenuButton href="/#">
          <FaRoad className="sub-menu-icon" /> Truck Routes
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaBuilding className="sub-menu-icon" />
          Hubs
        </SubMenuButton>
        <SubMenuButton href="/#">
          <FaMapMarkerAlt className="sub-menu-icon" />
          Localities
        </SubMenuButton>
      </SubMenu>
    </Sidebar>
  );
};

export default SideDashBoard;
