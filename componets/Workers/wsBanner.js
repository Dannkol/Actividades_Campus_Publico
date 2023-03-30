export let wsBanner = {
    Draw_img(obj) {
        let plantilla = `
            <div class="col-md-6 px-0">
                <h1 class="display-4 fst-italic">${obj.title}</h1>
                    <p class="lead my-3">${obj.description}</p>
                    <p class="lead mb-0"><a href="${obj.more.href}" class="text-white fw-bold">${obj.more.name}</a></p>
            </div>           
        `
        return [plantilla, "banner"];
    },
    Draw_card(obj) {
        let plantilla = ``
        obj.forEach((item) => {
            plantilla +=
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
                                dy=".3em">${item.text_thumbnail}</text>
                            </svg>
                
                        </div>
                    </div>
              </div>
            `
        })
        return [plantilla , "card"];
    }
}

self.addEventListener("message", (e) => {
    postMessage(wsBanner[`${
        e.data.module
    }`](e.data.data))
})