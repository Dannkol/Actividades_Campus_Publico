export default {
    info : {
        copyrigth : 'Derechos reservados a Dannkol',
        author : 
            {
                name : 'Dannkol',
                link : 'https://dannkool.com'
            }
    

    },
    Draw_footer(){
        document.querySelector('.blog-footer').insertAdjacentHTML('beforeend', 
        `
            <p>© ${new Date().getFullYear()} Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
                href="${this.info.author.link}"> ${this.info.author.name}</a>.
            </p>
            <p>
                <a href="#">${this.info.copyrigth}</a>
            </p>
            <div class="blog-footer-copyright">
                 
            </div>
        
        `)
    }
}