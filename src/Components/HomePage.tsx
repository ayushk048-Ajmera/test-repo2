import { Typography } from "@material-ui/core";
import React from "react";
import { JsxEmit } from "typescript";

export default function HomePage() {
  let forHome: JSX.Element | string = "";
  for (let i = 0; i < 1000; i++) {
    forHome += <Typography>homePAge {i}</Typography>;
  }
  return <div>{forHome}</div>;
}
