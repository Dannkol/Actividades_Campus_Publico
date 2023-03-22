export default {
  title: {
    name: "Maderas el Artesano",
    href: "#",
  },
  navigator: [
    {
      name: "Tableros",
      href: "#",
    },
    {
      name: "Muebleria",
      href: "#",
    },
    {
      name: "Soluciones Arquitectonicas",
      href: "#",
    },
    {
      name: "Contactanos",
      href: "#",
    },
  ],
  listarNavbar() {
    let plantilla = "";
    this.navigator.forEach((item) => {
      plantilla += `<a class="p-2 link-secondary" href="${item.href}">${item.name}</a>`;
    });
    document.querySelector(".nav").insertAdjacentHTML("beforeend", plantilla);
  },
  DrawTitle() {
    document.querySelector("header").insertAdjacentHTML(
      "beforeend",
      `
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-12 text-center">
                    <a class="blog-header-logo text-dark" href="${this.title.href}">${this.title.name}</a>
                </div>
            </div>
        `
    );
  },
};
