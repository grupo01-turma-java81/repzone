import { useState, useEffect } from "react";
import CardTreino from "../cardtreinos/CardTreinos";

interface ListaTreinosProps {
  setAdicionarTreino: (fn: () => void) => void;
}

function ListaTreinos({ setAdicionarTreino }: ListaTreinosProps) {
  const [treinos, setTreinos] = useState([
    {
      id: 1,
      nome: "Treino A",
      descricao: "Descrição do grupo",
      selecionado: true,
    },
    {
      id: 2,
      nome: "Treino B",
      descricao: "Descrição do grupo",
      selecionado: false,
    },
    {
      id: 3,
      nome: "Treino C",
      descricao: "Descrição do grupo",
      selecionado: false,
    },
  ]);

  useEffect(() => {
    setAdicionarTreino(() => (nome: string) => {
      setTreinos((anterior) => [
        ...anterior,
        {
          id: Date.now(),
          nome,
          descricao: "Descrição do grupo de exercícios",
          selecionado: false,
        },
      ]);
    });
  }, [setAdicionarTreino]);

  const toggleSelecionado = (id: number) => {
    setTreinos((anterior) =>
      anterior.map((treino) =>
        treino.id === id
          ? { ...treino, selecionado: !treino.selecionado }
          : treino
      )
    );
  };

  const editarNomeTreino = (id: number, novoNome: string) => {
    setTreinos((anterior) =>
      anterior.map((treino) =>
        treino.id === id ? { ...treino, nome: novoNome } : treino
      )
    );
  };

  const excluirTreino = (id: number) => {
    setTreinos((anterior) => anterior.filter((treino) => treino.id !== id));
  };

  return (
    <div className="px-6 py-4">
      {treinos.map((treino) => (
        <CardTreino
          key={treino.id}
          nome={treino.nome}
          selecionado={treino.selecionado}
          onToggleSelecionado={() => toggleSelecionado(treino.id)}
          onEditNome={(novoNome) => editarNomeTreino(treino.id, novoNome)}
          onDelete={() => excluirTreino(treino.id)}
        />
      ))}
    </div>
  );
}

export default ListaTreinos;
