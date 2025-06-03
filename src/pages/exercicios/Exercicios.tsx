import { useState } from "react";
import ListaExercicios from "../../components/exercicios/listaexercicios/ListaExercicios";

function Exercicios() {
  const [editando, setEditando] = useState(false);
  const [novoNome, setNovoNome] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novaRegiao, setNovaRegiao] = useState("");
  const [novoDia, setNovoDia] = useState("");
  const [novoTreino, setNovoTreino] = useState("");

  const handleAdicionarClick = () => {
    setNovoNome("");
    setNovaDescricao("");
    setNovaRegiao("");
    setNovoDia("");
    setNovoTreino("");
    setEditando(false);
  };

  const handleCancelar = () => {
    setNovoNome("");
    setNovaDescricao("");
    setNovaRegiao("");
    setNovoDia("");
    setNovoTreino("");
    setEditando(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col pb-20">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center relative mb-4">
          <span className="absolute left-0"></span>
        </div>
        <ListaExercicios
          editando={editando}
          setEditando={setEditando}
          novoNome={novoNome}
          setNovoNome={setNovoNome}
          novaDescricao={novaDescricao}
          setNovaDescricao={setNovaDescricao}
          novaRegiao={novaRegiao}
          setNovaRegiao={setNovaRegiao}
          novoDia={novoDia}
          setNovoDia={setNovoDia}
          novoTreino={novoTreino}
          setNovoTreino={setNovoTreino}
          handleAdicionarClick={handleAdicionarClick}
          handleCancelar={handleCancelar}
        />
      </div>
    </div>
  );
}

export default Exercicios;
