const root = document.documentElement;
root.classList.add("is-loading");

async function revealPage() {
  const images = Array.from(document.images);
  const minimumLoaderTime = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 350;

  await Promise.all([
    document.fonts.ready,
    new Promise((resolve) => setTimeout(resolve, minimumLoaderTime)),
    ...images.map((image) =>
      image.decode().catch(() => {
        console.warn("Image could not be decoded:", image.currentSrc || image.src);
      })
    ),
  ]);

  document.querySelector("main")?.removeAttribute("aria-busy");
  document.querySelector(".site-loader")?.setAttribute("aria-hidden", "true");
  root.classList.remove("is-loading");
  root.classList.add("is-loaded");
}

if (document.readyState === "complete") {
  revealPage();
} else {
  window.addEventListener("load", revealPage, { once: true });
}

try {
  const theme = localStorage.getItem("theme");
  if (theme === "light" || theme === "dark") {
    root.dataset.theme = theme;
  }
} catch (error) {
  console.warn("Theme preference could not be loaded.", error);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("main")?.setAttribute("aria-busy", "true");

  const themeButton = document.querySelector(".theme-toggle");
  const colorScheme = matchMedia("(prefers-color-scheme: dark)");
  const systemTheme = () => colorScheme.matches ? "dark" : "light";

  function syncThemeButton(theme) {
    themeButton.setAttribute("aria-pressed", String(theme === "dark"));
    themeButton.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  }

  syncThemeButton(root.dataset.theme || systemTheme());
  colorScheme.addEventListener("change", () => {
    if (!root.dataset.theme) syncThemeButton(systemTheme());
  });

  themeButton.addEventListener("click", () => {
    const nextTheme = (root.dataset.theme || systemTheme()) === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    syncThemeButton(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {
      console.warn("Theme preference could not be saved.", error);
    }
  });
});
