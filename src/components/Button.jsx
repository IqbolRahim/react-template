import React from "react";
import style from "./Button.module.className={}";

export default function Button(props) {
  const { children } = props;
  return <button className={style.main}>{children}</button>;
}
