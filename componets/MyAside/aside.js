export default {
  info: [
    {
      title: "About",
      description:
        "Somo una empresa lideres en la fabricacion de tableros y articulos de oficina en carpinteria, con experiencia amplia en soluciones de arquitectonicas.",
    },
    {
      title: "About",
      description:
        "Somo una empresa lideres en la fabricacion de tableros y articulos de oficina en carpinteria, con experiencia amplia en soluciones de arquitectonicas.",
    },
  ],
  archive: {
    title: "Archivos",
    data: [
      {
        date: "Proyecto casa em el arbol 2018.",
        href: "#",
      },
      {
        date: "Proyecto solucion arqitectonicas 2019.",
        href: "#",
      },
      {
        date: "Proyecto muebleria inteligente 2020.",
        href: "#",
      },
      {
        date: "Proyecto muebleria inteligente 2020.",
        href: "#",
      },
      {
        date: "Proyecto muebleria inteligente 2020.",
        href: "#",
      },
      {
        date: "Proyecto muebleria inteligente 2020.",
        href: "#",
      },
    ],
  },

  Elsewhere: {
    title: "Encuentranos",
    data: [
      {
        name: "Linkedin",
        href: "#",
      },
      {
        name: "Twitter",
        href: "#",
      },
      {
        name: "Facebook",
        href: "#",
      },
    ],
  },
  Draw_aside() {
    let data = document.querySelector("#navbar_aside");
    data.insertAdjacentHTML(
      "beforeend",
      `
        <div class="position-sticky h-75 overflow-auto" style="top: 2rem;">
            ${this.info
              .map((item) => {
                return `
                            <div class="p-4 mb-3 bg-light rounded">
                                <h4 class="fst-italic">${item.title}</h4>
                                <p class="mb-0">${item.description}</p>
                            </div>
                        `;
              })
              .join("")}
            <div class="p-4">
                <h4 class="fst-italic">${this.archive.title}</h4>
                <ol class="list-unstyled mb-0">
                    ${this.archive.data
                      .map(
                        (item) =>
                          `<li><a href="${item.href}">${item.date}</a></li>`
                      )
                      .join("")}
                </ol>
            </div>

            <div class="p-4">
                <h4 class="fst-italic">${this.Elsewhere.title}</h4>
                <ol class="list-unstyled">
                    ${this.Elsewhere.data
                      .map(
                        (item) =>
                          `<li><a href="${item.href}">${item.name}</a></li>`
                      )
                      .join("")}
                </ol>
            </div>
        </div>
        `
    );
  },
};
