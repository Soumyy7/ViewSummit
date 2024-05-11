import React from "react";
import { Dropdown, DropdownToggle } from "reactstrap";
import Bot from "views/Bot2";

function FixedPlugin(props) {
  const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setdropDownIsOpen(!dropDownIsOpen);
  };

  return (
    <div className="fixed-plugin">
      <Dropdown isOpen={dropDownIsOpen} toggle={toggleDropdown}>
        <DropdownToggle tag="div">
          <i className="fa fa-cog fa-2x" />
        </DropdownToggle>
        {/* <ul className="dropdown-menu show"> */}
        <ul className={`dropdown-menu ${dropDownIsOpen ? "show" : ""}`}>
          {dropDownIsOpen && (
            <>
              <li className="header-title">Welcome to ChatBot</li>
              <li className="adjustments-line">
                <Bot />
              </li>
            </>
          )}
        </ul>
      </Dropdown>
    </div>
  );
}

export default FixedPlugin;
