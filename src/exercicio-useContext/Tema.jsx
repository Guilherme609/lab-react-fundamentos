import { useTheme } from "./ThemeContext";

export default function Tema() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Tema atual: {theme}</h2>
      <button onClick={toggleTheme}>Trocar Tema</button>
    </div>
  );
}
