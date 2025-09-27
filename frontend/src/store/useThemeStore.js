import { create } from "zustand";

const getInitialTheme = () => {
	try {
		const saved = localStorage.getItem("theme");
		if (saved === "light" || saved === "dark") return saved;
		return window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	} catch {
		return "light";
	}
};

export const useThemeStore = create((set, get) => ({
	theme: getInitialTheme(),
	setTheme: (newTheme) => {
		const themeName = String(newTheme || "light");
		set({ theme: themeName });
		try {
			localStorage.setItem("theme", themeName);
		} catch {
			// ignore write errors
		}
	},
	toggleTheme: () => {
		const next = get().theme === "dark" ? "light" : "dark";
		get().setTheme(next);
	},
}));
