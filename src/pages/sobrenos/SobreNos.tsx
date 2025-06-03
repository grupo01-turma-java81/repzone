import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

const devs = [
  {
    nome: "Giulio Arantes",
    cargo: "Desenvolvedor Java Back-End - Foco em Spring Boot",
    img: "https://i.postimg.cc/9QP57jqy/Ft-Aleatoria.jpg",
    github: "https://github.com/giulioarantes",
    linkedin: "https://www.linkedin.com/in/giulio-arantes/",
  },
  {
    nome: "Bruno Daniel",
    cargo: "Desenvolvedor Java Back-End - Foco em Spring Boot",
    img: "https://i.postimg.cc/zfMsmXmZ/bruno.jpg",
    github: "https://github.com/BrunoDaniel13",
    linkedin: "https://www.linkedin.com/in/bruno-daniel-ferreira-leite/",
  },
  {
    nome: "Yasmim Ruecas",
    cargo: "Desenvolvedor Java Back-End - Foco em Spring Boot",
    img: "https://i.postimg.cc/jdHtzfpW/Yasmin.png",
    github: "https://github.com/Yasmimruescas",
    linkedin: "https://www.linkedin.com/in/yasmim-ruescas/",
  },
  {
    nome: "Vitória Camilly",
    cargo: "Desenvolvedor Java Back-End - Foco em Spring Boot",
    img: "https://i.postimg.cc/C1nVdnCx/Vitoria.webp",
    github: "https://github.com/Vitoriacmlly",
    linkedin: "https://www.linkedin.com/in/vitoria-camilly/",
  },
  {
    nome: "Vinícius Cristhian",
    cargo: "Desenvolvedor Java Back-End - Foco em Spring Boot",
    img: "https://i.postimg.cc/c18sL2TB/Vini.jpg",
    github: "https://github.com/ViniCristhian",
    linkedin: "https://www.linkedin.com/in/vinicristhian/",
  },
  {
    nome: "Iago Willian",
    cargo: "Desenvolvedor Java Back-End - Foco em Spring Boot",
    img: "https://i.postimg.cc/sXM3SNzy/Iago.jpg",
    github: "https://github.com/IagoWiliian",
    linkedin: "https://www.linkedin.com/in/iago-willian-/",
  },
];

function SobreNos() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <h1 className="text-4xl font-bold mb-10">
        Desenvol<span className="text-yellow-500">vedores</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {devs.map((dev, index) => (
          <div
            key={dev.nome}
            className="flex bg-[#2e2f47] rounded-lg overflow-hidden shadow-lg"
          >
            <div className="flex-shrink-0 w-40 h-56 bg-[#23233a] flex items-center justify-center">
              <img
                src={dev.img}
                alt={dev.nome}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between p-6 flex-1">
              <div>
                <h2 className="text-xl font-bold mb-1">{dev.nome}</h2>
                <p className="text-sm mb-4">{dev.cargo}</p>
              </div>
              <div className="flex gap-3 mt-2">
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <GithubLogoIcon size={48} weight="bold" />
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <LinkedinLogoIcon size={48} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SobreNos;
