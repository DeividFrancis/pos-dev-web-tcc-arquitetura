import Link from "next/link";
import { HTMLAttributes } from "react";
import style from "./style.module.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  value: number;
  isSelected: boolean;
}
export function PaginationItem({ value, isSelected, ...rest }: Props) {
  return (
    <button
      className={
        isSelected
          ? style["pagination__item--selected"]
          : style["pagination__item"]
      }
      {...rest}
    >
      {value}
    </button>
  );
}
