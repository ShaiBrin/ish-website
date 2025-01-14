import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const Footer = () => {
  return (
    <BottomNavigation
    className="footer self-end dark:bg-white px-0 py-2"
    sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center", // Center the name
        opacity: 0.7,
    }}
>
    <BottomNavigationAction
        label="Ishraq Shabab"
        icon={
            <div className="text-black text-lg font-semibold">
                © Ishraq Shabab
            </div>
        }
    />
</BottomNavigation>
  );
};

export default Footer;
