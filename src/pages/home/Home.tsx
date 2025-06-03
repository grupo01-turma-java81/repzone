import { useNavigate } from "react-router-dom";

const ultimosTreinos = [
  {
    nome: "Treino A",
    descricao: "Descrição do grupo de exercícios",
    exercicios: [1, 2, 3],
  },
];

const ultimosExercicios = [
  {
    nome: "Supino Reto",
    descricao: "Treino para a região muscular do peitoral.",
    regiao: "Peitoral",
    dia: "Segunda-feira",
    treino: "A",
  },
];

function Home() {
  const navigate = useNavigate();
  const ultimoTreino = ultimosTreinos[ultimosTreinos.length - 1];
  const ultimoExercicio = ultimosExercicios[ultimosExercicios.length - 1];

  return (
    <div className="flex-1 flex justify-end items-center px-4 py-8">
      <div className="w-full max-w-xl space-y-8 mr-15">
        <div>
          <h2 className="text-xl font-bold mb-2">Último treino adicionado:</h2>
          <div className="bg-[#2e2f47] rounded-lg p-4 mb-2 shadow-md">
            <div className="text-lg font-semibold">{ultimoTreino.nome}</div>
            <div className="text-sm mb-2">{ultimoTreino.descricao}</div>
            <div className="flex gap-2 mb-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#23233a] p-2 rounded-md w-12 h-12 flex items-center justify-center"
                >
                  <img
                    src="https://media.discordapp.net/attachments/1342248054853468248/1378209113330159708/icons8-levantamento-de-peso-50.png?ex=683bc4c2&is=683a7342&hm=1d7c9922b3062449f5c3db1d7c3a8e4be656fb2ab72a4bf62ebb7c3fc4b9ec8f&=&format=webp&quality=lossless"
                    alt="exercício"
                    className="w-8 h-8"
                  />
                </div>
              ))}
            </div>
            <button
              className="w-full bg-[#5c5e7a] text-white rounded-full py-2 mt-2 hover:bg-[#44456a] transition cursor-pointer"
              onClick={() => navigate("/treino")}
            >
              Cadastrar novo Treino
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">
            Último exercício adicionado:
          </h2>
          <div className="bg-[#2e2f47] rounded-lg p-4 mb-2 shadow-md">
            <div className="text-lg font-semibold">{ultimoExercicio.nome}</div>
            <div className="text-sm">
              <span className="font-bold">Descrição:</span>{" "}
              {ultimoExercicio.descricao}
            </div>
            <div className="text-sm">
              <span className="font-bold">Região Muscular :</span>{" "}
              {ultimoExercicio.regiao}
            </div>
            <div className="text-xs flex items-center gap-1 mt-1">
              <span role="img" aria-label="calendário">
                📅
              </span>
              {ultimoExercicio.dia}
            </div>
            <div className="text-xs flex items-center gap-1 mt-1">
              <span className="font-semibold">Treino:</span>
              {ultimoExercicio.treino}
            </div>
            <button
              className="w-full bg-[#5c5e7a] text-white rounded-full py-2 mt-4 hover:bg-[#44456a] transition cursor-pointer"
              onClick={() => navigate("/exercicios")}
            >
              Cadastrar novo Exercício
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
