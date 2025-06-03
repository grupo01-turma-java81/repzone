import React, { useState } from "react";
import { Trash2, Pencil, Check, X } from "lucide-react";

interface CardExercicioProps {
  nome: string;
  descricao: string;
  regiao: string;
  dia: string;
  treino: string;
  onDelete: () => void;
  onEdit: (novo: {
    nome: string;
    descricao: string;
    regiao: string;
    dia: string;
    treino: string;
  }) => void;
}

function CardExercicios({
  nome,
  descricao,
  regiao,
  dia,
  treino,
  onDelete,
  onEdit,
}: CardExercicioProps) {
  const [editando, setEditando] = useState(false);
  const [novoNome, setNovoNome] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novaRegiao, setNovaRegiao] = useState("");
  const [novoDia, setNovoDia] = useState("");
  const [novoTreino, setNovoTreino] = useState("");

  const handleSalvar = () => {
    onEdit({
      nome: novoNome,
      descricao: novaDescricao,
      regiao: novaRegiao,
      dia: novoDia,
      treino: novoTreino,
    });
    setEditando(false);
  };

  const handleCancelar = () => {
    setNovoNome(nome);
    setNovaDescricao(descricao);
    setNovaRegiao(regiao);
    setNovoDia(dia);
    setNovoTreino(treino);
    setEditando(false);
  };

  React.useEffect(() => {
    if (editando) {
      setNovoNome(nome);
      setNovaDescricao(descricao);
      setNovaRegiao(regiao);
      setNovoDia(dia);
      setNovoTreino(treino);
    }
  }, [editando, nome, descricao, regiao, dia, treino]);

  return (
    <div className="bg-[#2e2f47] text-white rounded-lg p-4 mb-4 shadow-md">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          {editando ? (
            <div className="flex flex-col gap-2">
              <input
                className="bg-[#23233a] rounded px-2 py-1 text-white mb-1"
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
                placeholder="Nome do exercício"
              />
              <input
                className="bg-[#23233a] rounded px-2 py-1 text-white mb-1"
                value={novaDescricao}
                onChange={(e) => setNovaDescricao(e.target.value)}
                placeholder="Descrição"
              />
              <input
                className="bg-[#23233a] rounded px-2 py-1 text-white mb-1"
                value={novaRegiao}
                onChange={(e) => setNovaRegiao(e.target.value)}
                placeholder="Grupo Muscular"
              />
              <input
                className="bg-[#23233a] rounded px-2 py-1 text-white mb-1"
                value={novoDia}
                onChange={(e) => setNovoDia(e.target.value)}
                placeholder="Dia da semana"
              />
              <input
                className="bg-[#23233a] rounded px-2 py-1 text-white"
                value={novoTreino}
                onChange={(e) => setNovoTreino(e.target.value)}
                placeholder="Treino"
              />
            </div>
          ) : (
            <>
              <div className="text-lg font-semibold">{nome}</div>
              <div className="text-sm">Descrição: {descricao}</div>
              <div className="text-sm">Região Muscular : {regiao}</div>
              <div className="text-xs flex items-center gap-1 mt-1">
                <span role="img" aria-label="calendário">
                  📅
                </span>
                {dia}
              </div>
              <div className="text-xs mt-1">
                <span className="font-semibold">Treino:</span> {treino}
              </div>
            </>
          )}
        </div>
        <div className="flex gap-2 ml-2">
          {editando ? (
            <>
              <span title="Salvar">
                <Check
                  className="w-4 h-4 text-green-400 cursor-pointer"
                  onClick={handleSalvar}
                />
              </span>
              <span title="Cancelar">
                <X
                  className="w-4 h-4 text-red-400 cursor-pointer"
                  onClick={handleCancelar}
                />
              </span>
            </>
          ) : (
            <>
              <span title="Excluir">
                <Trash2
                  className="w-4 h-4 text-white hover:text-red-500 cursor-pointer"
                  onClick={onDelete}
                />
              </span>
              <span title="Editar">
                <Pencil
                  className="w-4 h-4 text-white hover:text-yellow-400 cursor-pointer"
                  onClick={() => setEditando(true)}
                />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardExercicios;
