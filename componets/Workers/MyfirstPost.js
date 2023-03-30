import post from "../MyPosts/post.js";

export let wsdraw_post = {
  draw_p(obj) {
    let plantilla = "";
    obj.map((item) => {
      plantilla += `<p>${item.text}</p>`;
    });
    return plantilla;
  },
  draw_table(obj) {
    let plantilla = `
    <table class="table">

      ${obj
        .map((item) => {
          return `
          <tr>
            <td>${item["Tipo de Tablero"]}</td>
            <td>${item["Tamaño"]}</td>
            <td>${item["Precio"]}%</td>
          </tr>
        `;
        })
        .join("")}

    </table>
    
    `;
    return plantilla;
  },
};
  
self.addEventListener("message", (e) => {
  console.log(e.data);
  postMessage(wsdraw_post[`${e.data.module}`](e.data.data));
});
