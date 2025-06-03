import { useState } from "react";
import CardExercicio from "../cardexercicios/CardExercicios";
import { Plus, X } from "lucide-react";

interface Exercicio {
  id: number;
  nome: string;
  descricao: string;
  regiao: string;
  dia: string;
  treino: string;
}

interface ListaExerciciosProps {
  editando: boolean;
  setEditando: (valor: boolean) => void;
  novoNome: string;
  setNovoNome: (valor: string) => void;
  novaDescricao: string;
  setNovaDescricao: (valor: string) => void;
  novaRegiao: string;
  setNovaRegiao: (valor: string) => void;
  novoDia: string;
  setNovoDia: (valor: string) => void;
  novoTreino: string;
  setNovoTreino: (valor: string) => void;
  handleAdicionarClick: () => void;
  handleCancelar: () => void;
}

function ListaExercicios({
  editando,
  setEditando,
  novoNome,
  setNovoNome,
  novaDescricao,
  setNovaDescricao,
  novaRegiao,
  setNovaRegiao,
  novoDia,
  setNovoDia,
  novoTreino,
  setNovoTreino,
  handleCancelar,
}: ListaExerciciosProps) {
  const [exercicios, setExercicios] = useState<Exercicio[]>([
    {
      id: 1,
      nome: "Supino Reto",
      descricao: "Treino para a região muscular do peitoral.",
      regiao: "Peitoral",
      dia: "Segunda-feira",
      treino: "A",
    },
    {
      id: 2,
      nome: "Supino Inclinado",
      descricao: "Treino para a região muscular superior do peitoral.",
      regiao: "Peitoral",
      dia: "Segunda-feira",
      treino: "A",
    },
    {
      id: 3,
      nome: "Rosca Direta",
      descricao: "Treino para a região muscular do bíceps.",
      regiao: "Bíceps",
      dia: "Segunda-feira",
      treino: "B",
    },
  ]);

  const handleAdicionar = () => {
    if (
      novoNome.trim() &&
      novaDescricao.trim() &&
      novaRegiao.trim() &&
      novoDia.trim() &&
      novoTreino.trim()
    ) {
      setExercicios((anterior) => [
        ...anterior,
        {
          id: Date.now(),
          nome: novoNome,
          descricao: novaDescricao,
          regiao: novaRegiao,
          dia: novoDia,
          treino: novoTreino,
        },
      ]);
      setNovoNome("");
      setNovaDescricao("");
      setNovaRegiao("");
      setNovoDia("");
      setNovoTreino("");
      setEditando(false);
    }
  };
  const excluirExercicio = (id: number) => {
    setExercicios((anterior) =>
      anterior.filter((exercicio) => exercicio.id !== id)
    );
  };

  const editarExercicio = (
    id: number,
    novo: {
      nome: string;
      descricao: string;
      regiao: string;
      dia: string;
      treino: string;
    }
  ) => {
    setExercicios((anterior) =>
      anterior.map((exercicio) =>
        exercicio.id === id ? { ...exercicio, ...novo } : exercicio
      )
    );
  };

  return (
    <div className="px-6 py-2">
      {exercicios.map((exercicio) => (
        <CardExercicio
          key={exercicio.id}
          nome={exercicio.nome}
          descricao={exercicio.descricao}
          regiao={exercicio.regiao}
          dia={exercicio.dia}
          treino={exercicio.treino}
          onDelete={() => excluirExercicio(exercicio.id)}
          onEdit={(novo) => editarExercicio(exercicio.id, novo)}
        />
      ))}

      {editando ? (
        <div className="bg-[#2e2f47] text-white rounded-lg p-4 mb-4 shadow-md flex flex-col gap-2 relative">
          <button
            className="absolute top-2 right-2"
            onClick={handleCancelar}
            title="Cancelar"
          >
            <X className="w-5 h-5 text-red-400 cursor-pointer" />
          </button>
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            className="bg-[#23233a] text-white rounded px-2 py-1"
            placeholder="Nome do exercício"
          />
          <input
            type="text"
            value={novaDescricao}
            onChange={(e) => setNovaDescricao(e.target.value)}
            className="bg-[#23233a] text-white rounded px-2 py-1"
            placeholder="Descrição do exercício"
          />
          <input
            type="text"
            value={novaRegiao}
            onChange={(e) => setNovaRegiao(e.target.value)}
            className="bg-[#23233a] text-white rounded px-2 py-1"
            placeholder="Grupo muscular do exercício"
          />
          <input
            type="text"
            value={novoDia}
            onChange={(e) => setNovoDia(e.target.value)}
            className="bg-[#23233a] text-white rounded px-2 py-1"
            placeholder="Dia do exercício"
          />
          <input
            type="text"
            value={novoTreino}
            onChange={(e) => setNovoTreino(e.target.value)}
            className="bg-[#23233a] text-white rounded px-2 py-1"
            placeholder="Treino"
          />
          <div className="flex justify-end">
            <span title="Adicionar exercício">
              <Plus
                className="w-5 h-5 text-yellow-400 cursor-pointer"
                onClick={handleAdicionar}
              />
            </span>
          </div>
        </div>
      ) : (
        <div
          className="bg-[#2e2f47] text-white rounded-lg p-4 mb-4 shadow-md flex items-center justify-between cursor-pointer hover:bg-[#23233a] transition"
          onClick={() => setEditando(true)}
        >
          <span className="text-lg">Adicionar exercício</span>
          <Plus className="w-5 h-5 text-yellow-400" />
        </div>
      )}
    </div>
  );
}

export default ListaExercicios;
