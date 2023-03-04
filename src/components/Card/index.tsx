import Image from "next/image";
import Link from "next/link";
import { IPublicacao } from "~/services/api";
import style from "./style.module.css";

interface Props {
  data: IPublicacao;
}
export function Card({
  data: { id, url, title, author, orientador },
  ...rest
}: Props) {
  return (
    <Link href={`/publicacoes/${id}`}>
      <div {...rest} className={style.card__container}>
        <Image src={url} alt="" fill className={style.card__img} />
        <h2>{title}</h2>
        <p>Author(a): {author}</p>
        <p>Orientador(a): {orientador}</p>
      </div>
    </Link>
  );
}
