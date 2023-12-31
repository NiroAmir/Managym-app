import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";

export default function LeftNavBar() {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon />
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <Logo />
        <NavItem to={ROUTES.HOME} label="Home" />
        <NavItem to={ROUTES.ABOUT} label="About us" />
        {user?.isAdmin && <NavItem to={ROUTES.WORKOUTS} label="Workouts" />}
        {user?.isTrainee && (
          <NavItem to={ROUTES.MY_WORKOUTS} label="My Workouts" />
        )}
        {user && <NavItem to={ROUTES.FAV_WORKOUTS} label="Favorite Workouts" />}
      </Box>
    </Box>
  );
}
