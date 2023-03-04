import { useState } from "react";
import { Header } from "~/components/Header";

export default function Cadastro() {
  const [name, setName] = useState("");
  return (
    <>
      <Header />
      <h2>Cadastro de TCC</h2>
      <form action="">
        <label htmlFor="nome">Nome</label>
        <br />
        <input
          id="nome"
          type="text"
          value={name}
          onChange={(envent) => {
            setName(envent.target.value);
          }}
        />
        <br />
        <h1>{name}</h1>
      </form>
    </>
  );
}
