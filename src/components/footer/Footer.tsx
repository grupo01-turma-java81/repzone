function Footer() {
  return (
    <footer className="bg-[#2C2E4A] text-white text-xs px-4 py-2 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
        <p>
          <span className="font-bold">“RepZone” organization treinin</span>
          <br />
          Grupo 1 - Projeto Integrador 2025 <br />
          Generation Brasil.
        </p>
      </div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a
          href="https://brazil.generation.org/"
          target="_blank"
          className="hover:underline"
        >
          Generation
        </a>
        <a
          href="https://github.com/grupo01-turma-java81"
          target="_blank"
          className="hover:underline"
        >
          CodaNervoso
        </a>
        <a
          href="http://localhost:5173/"
          target="_blank"
          className="hover:underline"
        >
          RepZone
        </a>
        <a
          href="https://www.metlife.com.br/"
          target="_blank"
          className="hover:underline"
        >
          MetLife
        </a>
      </div>
    </footer>
  );
}

export default Footer;
