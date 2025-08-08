import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  useEffect(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      setIsDark(true);
    }
  }, []);

  return (
    <button className="btn btn-outline-primary" onClick={toggleTheme}>
      {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
