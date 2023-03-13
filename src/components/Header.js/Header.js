import React from "react";
import { useNavigate } from "react-router-dom";
import { irParaFeed, irParaHome, irParaLogin } from "../../Routes/coordinator";
import { Cabecalho, Titulo } from "./styled";

export default function Header() {
  const navigate = useNavigate();
  const mudarPagina = () => {
    if (localStorage.getItem("token")) {
      irParaFeed(navigate);
    } else {
      irParaHome(navigate);
    }
  };
  return (
    <Cabecalho>
      <Titulo onClick={() => mudarPagina(navigate)}>Labeddit</Titulo>
      <button onClick={() => irParaLogin(navigate)}>Login</button>
    </Cabecalho>
  );
}
