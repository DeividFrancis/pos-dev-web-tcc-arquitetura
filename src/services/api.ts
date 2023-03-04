import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3010",
});

export { api };

export interface IPublicacao {
  id: string;
  url: string;
  title: string;
  author: string;
  orientador: string;
  arquivo: string;
}
