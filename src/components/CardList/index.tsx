import axios from "axios";
import { useEffect, useState } from "react";
import { api, IPublicacao } from "~/services/api";
import { Card } from "../Card";
import { PaginationItem } from "./PaginationItem";
import style from "./style.module.css";

const TOTAL = 20;
const PEER_PAGE = 5;
const PAGES = TOTAL / PEER_PAGE;

export function CardList() {
  const [publicacoes, setPublicacoes] = useState<IPublicacao[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchAll(page: number) {
    try {
      const res = await api.get("/publicacoes", {
        params: { _page: page, _limit: PEER_PAGE },
      });
      const { data } = res;
      setPublicacoes(data);
    } catch (error) {
      console.log("GUGU", error);
    }
  }

  useEffect(() => {
    fetchAll(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className={style.card_list__container}>
        {publicacoes.map((item, index) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className={style.pagination__container}>
        {Array.from({ length: PAGES })
          .map((_, index) => index + 1)
          .map((page) => (
            <PaginationItem
              key={page}
              isSelected={page == currentPage}
              value={page}
              onClick={() => setCurrentPage(page)}
            />
          ))}
      </div>
    </>
  );
}
