export let wsfooter ={
    Draw_footer(obj){
        let plantilla = `
        <p>© ${new Date().getFullYear()} Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
            href="${obj.author.link}"> ${obj.author.name}</a>.
        </p>
        <p>
            <a href="#">${obj.copyrigth}</a>
        </p>
        <div class="blog-footer-copyright">
            
        </div>
        `
        return plantilla;
    }
}

self.addEventListener("message" , (e) =>{
    postMessage(wsfooter[`${
        e.data.module
    }`](e.data.data))
} )