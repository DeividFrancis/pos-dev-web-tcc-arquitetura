import { Inter } from "next/font/google";
import { CardList } from "~/components/CardList";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <CardList />
      <Footer />
    </>
  );
}
