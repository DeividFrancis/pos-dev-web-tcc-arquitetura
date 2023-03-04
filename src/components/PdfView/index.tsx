import style from "./style.module.css";

interface Props {
  arquivo?: string;
}

export function PdfView({ arquivo }: Props) {
  return (
    <>
      {arquivo && (
        <iframe src={arquivo} className={style["pdfview__container"]}></iframe>
      )}
    </>
  );
}
