export default {
  dataMyheader() {
    localStorage.setItem(
      "myheader",
      JSON.stringify({
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
      })
    );
  },
  dataMyside() {
    localStorage.setItem(
      "myaside",
      JSON.stringify({
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
      })
    );
  },
  dataMypost() {
    localStorage.setItem(
      "mypost",
      JSON.stringify({
        posts: [
          {
            title: "Los Tableros a tu medida",
            meta_data: {
              date: "January 1, 2021",
              description: [
                {
                  text: "parafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
                },
                {
                  text: "parafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
                },
                {
                  subtitle: "Precios",
                },
                {
                  table: [
                    {
                      "Tipo de Tablero": "Acrilico escolar",
                      Tamaño: "80 x 120 cm",
                      Precio: 200000,
                    },
                    {
                      "Tipo de Tablero": "Acrilico personal",
                      Tamaño: "40 x 60 cm",
                      Precio: 100000,
                    },
                    {
                      "Tipo de Tablero": "Corcho escolar",
                      Tamaño: "80 x 120 cm",
                      Precio: 180000,
                    },
                    {
                      "Tipo de Tablero": "Corcho personal",
                      Tamaño: "40 x 60 cm",
                      Precio: 90000,
                    },
                    {
                      "Tipo de Tablero": "Caballete",
                      Tamaño: "180 cm",
                      Precio: 90000,
                    },
                  ],
                },
              ],

              autor: [
                {
                  name: "John Doe",
                  href: "upchh@example.com",
                },
              ],
            },
            slug: "first-sample-blog-post",
            content: [],
          },
          {
            title: "Los Tableros a tu medida",
            meta_data: {
              date: "January 1, 2021",
              description: [
                {
                  text: "parafo 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
                },
                {
                  text: "parafo 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
                },
                {
                  subtitle: "Precios",
                },
                {
                  lista: ["item 1", "item 2", "item 3"],
                },
              ],

              autor: [
                {
                  name: "Juan Jesus",
                  href: "upchh@example.com",
                },
              ],
            },
            slug: "first-sample-blog-post",
            content: [],
          },
        ],
      })
    );
  },
  dataMyfooter() {
    localStorage.setItem(
      "myfooter",
      JSON.stringify({
        info: {
          copyrigth: "Derechos reservados a Dannkol",
          author: {
            name: "Dannkol",
            link: "https://dannkool.com",
          },
        },
      })
    );
  },
  dataMybanner() {
    localStorage.setItem(
      "mybanner",
      JSON.stringify({
        banner_img: {
          title: "Trabajos echos a la media de tus necesidades",
          description:
            "Somo fabricantes y vendedores directos, nuestros productos se caracterizan por una alta calidad, confiabilidad y precios competitivos",
          more: {
            name: "Conoce más",
            href: "#",
          },
          img: "./assets/img/Banner_carpinteria.jpg",
        },
        banner_card: [
          {
            title: "Tabajos",
            sub_title: "Calidad",
            date: "12 Mar",
            description:
              "Carantizamos la calidad de todos nuestros protductos y servicios",
            more: {
              name: "Conece nuestros estandares",
              href: "#",
            },
            img_thumbnail: "./assets/img/Banner_carpinteria.jpg",
            text_thumbnail: "Economia",
          },
          {
            title: "Diseño",
            sub_title: "A tu medida",
            date: "13 Mar",
            description: "Diseños unicos, crean espacios maravillosos",
            more: {
              name: "Conece nuestros estandares",
              href: "#",
            },
            img_thumbnail: "./assets/img/Banner_carpinteria.jpg",
            text_thumbnail: "Calidad",
          },
          {
            title: "Diseño",
            sub_title: "A tu medida",
            date: "13 Mar",
            description: "Diseños unicos, crean espacios maravillosos",
            more: {
              name: "Conece nuestros estandares",
              href: "#",
            },
            img_thumbnail: "./assets/img/Banner_carpinteria.jpg",
            text_thumbnail: "Servicios",
          },
          {
            title: "Diseño",
            sub_title: "A tu medida",
            date: "13 Mar",
            description: "Diseños unicos, crean espacios maravillosos",
            more: {
              name: "Conece nuestros estandares",
              href: "#",
            },
            img_thumbnail: "./assets/img/Banner_carpinteria.jpg",
            text_thumbnail: "A tu medida",
          },
        ],
      })
    );
  },
};
