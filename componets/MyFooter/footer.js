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
        const footer = document.querySelector('.blog-footer');
        const myWorker = new Worker("/componets/Workers/wsFooter.js", {
            type: "module",
        });
        myWorker.postMessage({module: "Draw_footer" , data : this.info});
        myWorker.addEventListener("message", (e) =>{
            let doc = new DOMParser().parseFromString(e.data , 'text/html');
            footer.appendChild(...doc.body.children)
            myWorker.terminate();
        });
        
    }
}