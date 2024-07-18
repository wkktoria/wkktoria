function ThemeSwitch() {
  return (
    <button
      type="button"
      className="btn rounded"
      onClick={() => {
        const themeIcon = document.querySelector("#themeIcon");

        if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
          document.documentElement.setAttribute("data-bs-theme", "light");
          themeIcon.classList.remove("bi-brightness-high");
          themeIcon.classList.add("bi-moon");
        } else {
          document.documentElement.setAttribute("data-bs-theme", "dark");
          themeIcon.classList.remove("bi-moon");
          themeIcon.classList.add("bi-brightness-high");
        }
      }}
    >
      <i
        id="themeIcon"
        className={
          document.documentElement.getAttribute("data-bs-theme") === "dark"
            ? "bi bi-brightness-high"
            : "bi bi-moon"
        }
      ></i>
    </button>
  );
}

export default ThemeSwitch;
