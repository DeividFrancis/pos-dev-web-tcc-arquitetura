import { Inter } from "next/font/google";
import { CardList } from "~/components/CardList";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Section } from "~/components/Section";

export default function Home() {
  return (
    <main>
      <Header />
      <Section>
        <CardList />
      </Section>
      <Footer />
    </main>
  );
}
