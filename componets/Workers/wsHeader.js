export let wsheader = {
    listarNavbar(obj) {
        let plantilla = "";
        obj.forEach((obj) => {
            plantilla += `<a class="p-2 link-secondary" href="${obj.href}">${obj.name}</a>`;
        });
        return [plantilla , 'nav'];
    },
    DrawTitle(obj) {
        let plantilla =`
                <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-12 text-center">
                        <a class="blog-header-logo text-dark" href="${obj.href}">${obj.name}</a>
                    </div>
                </div>
            `
        return [plantilla, 'header'];
    },
}

self.addEventListener('message', (e) =>{
    e.data.module === "finished" ? postMessage({module : e.data.module}) : postMessage(wsheader[`${e.data.module}`](e.data.data));
})