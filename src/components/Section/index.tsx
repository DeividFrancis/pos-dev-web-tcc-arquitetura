import { PropsWithChildren } from "react";
import style from "./style.module.css";

export function Section({ children }: PropsWithChildren) {
  return <div className={style.section}>{children}</div>;
}
