import classNames from "@/utils/class";
import React, { useState } from "react";
import "@styles/components/sidebar.scss";
import { SidebarMenuCard, SidebarMenuItem } from "@/interface/sidebar.model";

interface SidebarProps {
  items: SidebarMenuItem[];
  card: SidebarMenuCard;
}

const Sidebar = ({ items, card }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classNames("SidebarMenu", isOpen ? "expanded" : "collapsed")}
    >
      <div className="menuButton">
        <button className="hamburguerButton" onClick={handleClick}>
          <i className="bx bx-expand-horizontal"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
