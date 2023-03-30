export default {
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
      img_thumbnail : "./assets/img/Banner_carpinteria.jpg",
      text_thumbnail : "Economia"
    },
    {
        title: "Diseño",
        sub_title: "A tu medida",
        date: "13 Mar",
        description:
          "Diseños unicos, crean espacios maravillosos",
        more: {
          name: "Conece nuestros estandares",
          href: "#",
        },
        img_thumbnail : "./assets/img/Banner_carpinteria.jpg",
        text_thumbnail : "Calidad"
      },
      {
        title: "Diseño",
        sub_title: "A tu medida",
        date: "13 Mar",
        description:
          "Diseños unicos, crean espacios maravillosos",
        more: {
          name: "Conece nuestros estandares",
          href: "#",
        },
        img_thumbnail : "./assets/img/Banner_carpinteria.jpg",
        text_thumbnail : "Servicios"
      },
      {
        title: "Diseño",
        sub_title: "A tu medida",
        date: "13 Mar",
        description:
          "Diseños unicos, crean espacios maravillosos",
        more: {
          name: "Conece nuestros estandares",
          href: "#",
        },
        img_thumbnail : "./assets/img/Banner_carpinteria.jpg",
        text_thumbnail : "A tu medida"
      },
    
  ],

  wsdraw_banner(){
    let banner_card = document.querySelector("#banner_card");
    let banner_img = document.querySelector("#banner_img");
    const myWorker = new Worker("/componets/Workers/wsBanner.js", {
      type: "module",
    });
    myWorker.postMessage({module : "Draw_img", data : this.banner_img});
    myWorker.postMessage({module : "Draw_card", data : this.banner_card});
    myWorker.addEventListener("message", (e)=>{
      let doct = new DOMParser().parseFromString(e.data[0] , 'text/html');
      e.data[1] === "banner" 
      ? banner_img.append(...doct.body.children) 
      : e.data === "finished" ? myWorker.terminate() 
      : banner_card.append(...doct.body.children) ;
    })
    banner_img.style.backgroundImage = `url('${this.banner_img.img}')`
    banner_img.style.backgroundSize = "cover"
    banner_img.style.backgroundPosition = "center"
  }
};
