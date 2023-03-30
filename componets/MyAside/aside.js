import config from "../Workers/config.js";
export default {
  wsAside() {
    config.dataMyside()
    Object.assign(this,JSON.parse(localStorage.getItem("myaside")))
    let aside = document.querySelector("#navbar_aside");
    const myWorker = new Worker("/componets/Workers/wsAside.js", {
      type: "module",
    });
    myWorker.postMessage({ module: "Draw_aside_title", data: this.info});
    myWorker.postMessage({ module: "Draw_aside_archive", data: this.archive});
    myWorker.postMessage({ module: "Draw_aside_Elsewhere", data: this.Elsewhere});
    myWorker.postMessage({module : "finished"})
    myWorker.addEventListener("message", (e) => {
      let doct = new DOMParser().parseFromString(e.data, 'text/html');
      console.log(...doct.body.children);
      e.data.module === "finished" ? myWorker.terminate() :  aside.append(...doct.body.children);
    });
  }
};
