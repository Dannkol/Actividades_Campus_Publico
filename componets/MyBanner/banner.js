import config from "../Workers/config.js";
export default {
  wsdraw_banner(){
    config.dataMybanner()
    Object.assign(this, JSON.parse(localStorage.getItem("mybanner")))
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
