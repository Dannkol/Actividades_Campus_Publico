export default {
  banner_img: {
    title: "Trabajos echos a la media de tus necesidades",
    description:
      "Somo fabricantes y vendedores directos, nuestros productos se caracterizan por una alta calidad, confiabilidad y precios competitivos",
    more: {
      name: "Conoce más",
      href: "#",
    },
    img: "./assets/img/Banner_carpinteria.jpg"
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
      img_thumbnail : "./assets/img/Banner_carpinteria.jpg"
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
        img_thumbnail : "./assets/img/Banner_carpinteria.jpg"
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
        img_thumbnail : "./assets/img/Banner_carpinteria.jpg"
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
        img_thumbnail : "./assets/img/Banner_carpinteria.jpg"
      },
    
  ],
  Draw_img() {
    let banner_img = document.querySelector("#banner_img")
    banner_img.style.backgroundImage = `url('${this.banner_img.img}')`
    banner_img.style.backgroundSize = "cover"
    banner_img.style.backgroundPosition = "center"

    banner_img.insertAdjacentHTML("beforeend",
        `
        <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">${this.banner_img.title}</h1>
                <p class="lead my-3">${this.banner_img.description}</p>
                <p class="lead mb-0"><a href="${this.banner_img.more.href}" class="text-white fw-bold">${this.banner_img.more.name}</a></p>
        </div>
        `
    )
  },
  Draw_card() {
    let banner_card = document.querySelector("#banner_card");
    this.banner_card.forEach((item) => {
        banner_card.insertAdjacentHTML("beforeend",
        `
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${item.title}</strong>
                        <h3 class="mb-0">${item.sub_title}</h3>
                        <div class="mb-1 text-muted">${item.date}</div>
                        <p class="card-text mb-auto">${item.description}</p>
                        <a href="${item.more.href}" class="stretched-link">${item.more.name}</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" >
                        <image href="${item.img_thumbnail}" style="transform: scale(0.35)" x="-200" y="0"/>
                        <text x="50%" y="50%" fill="#eceeef"
                            dy=".3em">Thumbnail</text>
                        </svg>
            
                    </div>
                </div>
          </div>
        `
        )
    })
  }
};
