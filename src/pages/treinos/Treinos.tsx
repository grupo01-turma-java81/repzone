import { useState } from "react";
import { Plus } from "lucide-react";
import ListaTreinos from "../../components/treinos/listatreinos/ListaTreinos";

function Treino() {
  const [editando, setEditando] = useState(false);
  const [novoNome, setNovoNome] = useState("Treino X");
  const [adicionarTreino, setAdicionarTreino] = useState<
    ((nome: string) => void) | null
  >(null);

  const handleAdicionarClick = () => {
    if (novoNome.trim() !== "" && adicionarTreino) {
      adicionarTreino(novoNome);
      setNovoNome("Treino X");
      setEditando(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="px-6 py-4">
        {editando && (
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
              className="text-2xl font-bold bg-[#1f1f2e] text-white rounded px-2 py-1 outline-none"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAdicionarClick();
              }}
              placeholder="Nome do novo treino"
            />
            <span title="Adicionar treino">
              <Plus
                className="w-5 h-5 text-yellow-400 cursor-pointer"
                onClick={handleAdicionarClick}
              />
            </span>
          </div>
        )}
        {!editando && (
          <div className="text-2xl font-bold text-white mb-2 select-none">
            Adicionar Treino
          </div>
        )}
        <p className="text-gray-300">Criado por Giovana Silva</p>
        {!editando && (
          <button
            className="text-sm text-yellow-500 mt-2 inline-block hover:underline cursor-pointer"
            onClick={() => setEditando(true)}
          >
            + Criar treino
          </button>
        )}
      </div>
      <ListaTreinos setAdicionarTreino={setAdicionarTreino} />
    </div>
  );
}

export default Treino;
