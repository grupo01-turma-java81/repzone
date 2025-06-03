import { useState } from "react";
import { Menu, ArrowLeft } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  if (
    location.pathname === "/treino" ||
    location.pathname === "/exercicios" ||
    location.pathname === "/sobrenos"
  ) {
    return (
      <nav className="backdrop-blur-sm flex items-center justify-center bg-[#2d2e46] text-white px-6 py-3 shadow-lg relative">
        <button
          className="absolute left-6 flex items-center"
          onClick={() => {
            if (location.pathname === "/exercicios") {
              navigate("/");
            } else {
              navigate(-1);
            }
          }}
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6 text-yellow-500 cursor-pointer" />
        </button>
        <span className="text-gray-300 font-semibold text-xl">
          {location.pathname === "/treino"
            ? "Treino"
            : location.pathname === "/exercicios"
            ? "Exercícios"
            : location.pathname === "/sobrenos"
            ? "Sobre Nós"
            : ""}
        </span>
        <div className="absolute right-6 flex items-center">
          <Menu
            className="text-yellow-500 w-6 h-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="absolute right-0 top-12 bg-[#2d2e46] rounded-xl shadow-lg py-2 px-4 flex flex-col gap-2 z-50 min-w-[140px]">
              <Link
                to="/"
                className="hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/treino"
                className="hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                Treino
              </Link>
              <Link
                to="/exercicios"
                className="hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                Exercícios
              </Link>
              <Link
                to="/sobrenos"
                className="hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                Sobre Nós
              </Link>
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="backdrop-blur-sm mt-4 mx-10 flex items-center justify-between bg-[#2d2e46] text-white px-6 py-3 rounded-2xl shadow-lg relative">
      <div className="flex items-center gap-2">
        <img
          src="https://ik.imagekit.io/uhimtlk7c/repzona%20(1).png?updatedAt=1748638221864"
          alt="logo"
          className="h-6"
        />
        <span className="text-gray-300 font-semibold text-xl">RepZone</span>
      </div>

      <Menu
        className="text-yellow-500 w-6 h-6 cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute right-0 top-14 bg-[#2d2e46] rounded-xl shadow-lg py-2 px-4 flex flex-col gap-2 z-50 min-w-[140px]">
          <Link
            to="/"
            className="hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/treino"
            className="hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Treino
          </Link>
          <Link
            to="/exercicios"
            className="hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Exercícios
          </Link>
          <Link
            to="/sobrenos"
            className="hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Sobre Nós
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
