import React from "react";
import { Img } from "react-image";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <>
      <div className="p-4 flex justify-between shadow-lg	">
        <div>
          <Img src={logo} alt="logo" className="px-4" />
        </div>
        <div className="px-4">
          <Button
            variant="text"
            sx={{
              color: "grey",
              fontSize: "1.3rem",
              textTransform: "capitalize",
            }}
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
