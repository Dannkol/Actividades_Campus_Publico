import config from "../Workers/config.js";
export default {
  Draw_footer() {
    config.dataMyfooter();
    Object.assign(this, JSON.parse(localStorage.getItem("myfooter")));
    const footer = document.querySelector(".blog-footer");
    const myWorker = new Worker("/componets/Workers/wsFooter.js", {
      type: "module",
    });
    myWorker.postMessage({ module: "Draw_footer", data: this.info });
    myWorker.addEventListener("message", (e) => {
      let doc = new DOMParser().parseFromString(e.data, "text/html");
      footer.appendChild(...doc.body.children);
      myWorker.terminate();
    });
  },
};
