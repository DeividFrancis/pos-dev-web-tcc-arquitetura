import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { PdfView } from "~/components/PdfView";
import { Section } from "~/components/Section";
import { api, IPublicacao } from "~/services/api";
import style from "~/components/Card/style.module.css";
export default function ListarPublicacoes() {
  const router = useRouter();

  const id = String(router.query.id);

  const [publicacao, setPublicacao] = useState<IPublicacao>();

  async function fetchById(id: string) {
    try {
      const res = await api.get(`/publicacoes/${id}`);
      const { data } = res;
      setPublicacao(data);
    } catch (error) {
      console.log("[ERRO] ", error);
    }
  }

  useEffect(() => {
    fetchById(id);
  }, [id]);

  return (
    <main>
      <Header />
      <Section>
        <h2 className={style["card__title"]}>{publicacao?.title}</h2>
        <div className={style["card_description"]}>
          <p>Author(a): {publicacao?.author}</p>
          <p>Orientador(a): {publicacao?.orientador}</p>
        </div>
        <PdfView arquivo={publicacao?.arquivo} />
      </Section>
      <Footer />
    </main>
  );
}
