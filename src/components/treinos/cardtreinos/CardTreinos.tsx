import React, { useState } from "react";
import { Pencil, Trash2, Check } from "lucide-react";

interface CardTreinosProps {
  nome: string;
  selecionado: boolean;
  onToggleSelecionado: () => void;
  onEditNome?: (novoNome: string) => void;
  onDelete?: () => void;
}

function CardTreinos({
  nome,
  selecionado,
  onToggleSelecionado,
  onEditNome,
  onDelete,
}: CardTreinosProps) {
  const [editando, setEditando] = React.useState(false);
  const [novoNome, setNovoNome] = React.useState(nome);

  React.useEffect(() => {
    setNovoNome(nome);
  }, [nome]);

  const handleEdit = () => {
    setEditando(true);
  };

  const handleMudanca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNovoNome(e.target.value);
  };

  const handleConfirmacao = () => {
    if (onEditNome && novoNome.trim() !== "" && novoNome !== nome) {
      onEditNome(novoNome);
    }
    setEditando(false);
  };

  const handleTeclaPressionada = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleConfirmacao();
    }
  };

  return (
    <div className="bg-[#2e2f47] text-white rounded-lg p-4 mb-4 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {editando ? (
            <>
              <input
                type="text"
                value={novoNome}
                onChange={handleMudanca}
                onKeyDown={handleTeclaPressionada}
                className="text-xl font-semibold bg-[#1f1f2e] text-white rounded px-2 py-1 outline-none"
                autoFocus
              />
              <Check
                className="w-5 h-5 text-green-400 cursor-pointer ml-1"
                onClick={handleConfirmacao}
              />
            </>
          ) : (
            <h3 className="text-xl font-semibold">{nome}</h3>
          )}
          <input
            type="checkbox"
            checked={selecionado}
            onChange={onToggleSelecionado}
            className="accent-yellow-500 w-4 h-4"
          />
        </div>
        <div className="flex gap-2">
          <Trash2
            className="w-4 h-4 text-white hover:text-red-500 cursor-pointer"
            onClick={onDelete}
          />
          {!editando && (
            <Pencil
              className="w-4 h-4 text-white hover:text-yellow-400 cursor-pointer"
              onClick={handleEdit}
            />
          )}
        </div>
      </div>
      <div className="flex gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-[#1f1f2e] p-4 rounded-md w-12 h-12 flex items-center justify-center shadow-sm"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/7118/7118254.png"
              alt="exercício"
              className="w-50 h-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardTreinos;
