import Image from "next/image";
import style from "./style.module.css";

export function Header() {
  return (
    <header className={style.cabecalho}>
      <Image src="/logo-ifro.png" width={79} height={112} alt="Logo ifro" />
      <div>Repositório de TCC do Bacharelado em Arquitetura e Urbanismo</div>
    </header>
  );
}
