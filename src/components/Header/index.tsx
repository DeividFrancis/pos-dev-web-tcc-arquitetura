import Image from "next/image";
import { Logo } from "../Logo";
import style from "./style.module.css";

export function Header() {
  return (
    <header className={style.cabecalho}>
      <Logo />
      <h1 className={style["cabecalho__title"]}>
        Repositório de TCC do Bacharelado em Arquitetura e Urbanismo
      </h1>
    </header>
  );
}
