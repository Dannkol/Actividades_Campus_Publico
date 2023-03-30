import config from "../Workers/config.js";
export default {
  DrawPost() {
    config.dataMypost()
    Object.assign(this,JSON.parse(localStorage.getItem("mypost")))
    const post = document.querySelectorAll(".blog-post");
    const myWorker = new Worker("/componets/Workers/MyfirstPost.js", {
      type: "module",
    });
    this.posts.forEach((posts) =>{
      myWorker.postMessage({module: "draw_subtitle" , data: posts.title});
      myWorker.postMessage({module: "draw_date" , data: posts.meta_data});
      myWorker.postMessage({module: "draw_p" , data: posts.meta_data.description});
      myWorker.postMessage({module: "draw_table" , data: posts.meta_data.description[3].table});
      myWorker.postMessage({module: "draw_lista" , data: posts.meta_data.description[3].lista});
    })
    myWorker.postMessage({module: "finished"});
    myWorker.addEventListener("message", (e)=>{
      let doct = new DOMParser().parseFromString(e.data , 'text/html');
      e.data.module === "finished" ? myWorker.terminate() : post.forEach(post => post.append(...doct.body.children));
    })
    
  },
};
