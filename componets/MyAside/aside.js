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
  wsAside() {
    let aside = document.querySelector("#navbar_aside");
    const myWorker = new Worker("/componets/Workers/wsAside.js", {
      type: "module",
    });
    myWorker.postMessage({ module: "Draw_aside_title", data: this.info});
    myWorker.postMessage({ module: "Draw_aside_archive", data: this.archive});
    myWorker.postMessage({ module: "Draw_aside_Elsewhere", data: this.Elsewhere});
    myWorker.postMessage({module : "finished"})
    myWorker.addEventListener("message", (e) => {
      let doct = new DOMParser().parseFromString(e.data, 'text/html');
      console.log(...doct.body.children);
      e.data.module === "finished" ? myWorker.terminate() :  aside.append(...doct.body.children);
    });
  }
};
