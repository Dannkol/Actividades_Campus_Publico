export let wsAside = {
    Draw_aside_title(obj) {
        let plantilla = `
        <div>
            ${obj
                .map((item) => {
                    return `
                            <div class="p-4 mb-3 bg-light rounded">
                                <h4 class="fst-italic">${item.title}</h4>
                                <p class="mb-0">${item.description}</p>
                            </div>
                        `;
                })
                .join("")}
                
        </div>
        `
            return plantilla;
    },
    Draw_aside_archive(obj) {
        let plantilla = `
        <div class="p-4">
            <h4 class="fst-italic">${obj.title}</h4>
            <ol class="list-unstyled mb-0">
                ${obj.data
                    .map(
                        (item) =>
                            `<li><a href="${item.href}">${item.date}</a></li>`
                    )
                    .join("")}
            </ol>
        </div>
        `
        return plantilla;
    },
    Draw_aside_Elsewhere(obj) {
        let plantilla = `
        <div class="p-4">
            <h4 class="fst-italic">${obj.title}</h4>
            <ol class="list-unstyled">
                ${obj.data
                    .map(
                        (item) =>
                            `<li><a href="${item.href}">${item.name}</a></li>`
                    )
                    .join("")}
            </ol>
        </div>`
        return plantilla;
    }

}

self.addEventListener("message",(e)=>{
    e.data.module === "finished" ? postMessage({module : e.data.module}) : postMessage(wsAside[`${e.data.module}`](e.data.data));
})

