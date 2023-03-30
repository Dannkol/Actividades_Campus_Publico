import config from "../Workers/config.js";

export default {
  Drawheader(){
    config.dataMyheader();
    Object.assign(this, JSON.parse(localStorage.getItem("myheader")));
    const nav = document.querySelector('.nav');
    const header = document.querySelector('header');
    const myWorker = new Worker("/componets/Workers/wsHeader.js", {
      type: "module",
    });
    myWorker.postMessage({module : "listarNavbar", data: this.navigator});
    myWorker.postMessage({module : "DrawTitle", data: this.title});
    myWorker.postMessage({module: "finished"});
    myWorker.addEventListener("message", (e) => {
      let doct = new DOMParser().parseFromString(e.data[0] , 'text/html')
      e.data[1] === "nav" 
      ? nav.append(...doct.body.children) 
      : e.data === "finished" ? myWorker.terminate() 
      : header.append(...doct.body.children) ;
    })
    //document.querySelector(".nav").insertAdjacentHTML("beforeend", plantilla);
    // document.querySelector("header")
  }
};
