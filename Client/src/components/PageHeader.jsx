import { Divider, Typography } from "@mui/material";
import { string } from "prop-types";
import React from "react";

export default function PageHeader({ title, subtitle }) {
  return (
    <>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
}

PageHeader.propType = {
  title: string.isRequired,
  subtitle: string.isRequired,
};
