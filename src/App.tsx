import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Treino from "./pages/treinos/Treinos";
import Exercicios from "./pages/exercicios/Exercicios";
import SobreNos from "./pages/sobrenos/SobreNos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout backgroundImage="url('https://ik.imagekit.io/uhimtlk7c/Design%20sem%20nome.png?updatedAt=1748654054745')">
              <Home />
            </Layout>
          }
        />
        <Route
          path="/treino"
          element={
            <Layout>
              <Treino />
            </Layout>
          }
        />
        <Route
          path="/exercicios"
          element={
            <Layout>
              <Exercicios />
            </Layout>
          }
        />
        <Route
          path="/sobrenos"
          element={
            <Layout>
              <SobreNos />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
