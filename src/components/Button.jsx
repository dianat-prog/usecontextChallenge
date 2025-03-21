import { useTheme } from "../themes/ThemeContext"; // ✅ Importar correctamente

const Button = () => {
    const { theme, toggleTheme } = useTheme(); // ✅ Usar el hook

    return (
        <button 
            onClick={toggleTheme} 
            className="p-2 bg-gray-700 text-white rounded-lg"
        >
            {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
        </button>
    );
};

export default Button;