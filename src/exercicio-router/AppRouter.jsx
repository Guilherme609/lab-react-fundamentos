import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Página Inicial</h2>;
}
function About() {
  return <h2>Sobre</h2>;
}
function Contact() {
  return <h2>Contato</h2>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
