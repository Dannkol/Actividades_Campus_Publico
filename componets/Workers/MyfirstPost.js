export let wsdraw_post = {
  draw_subtitle(obj) {
    let plantilla = `<h2 class="blog-post-title">${obj}</h2>`;
    return plantilla;
  },
  draw_date(obj) {
    let plantilla = `<p class="blog-post-meta">${obj.date} by <a href="${obj.autor[0].href}">${obj.autor[0].name}</a></p>`;
    return plantilla;
  },
  draw_p(obj) {
    let plantilla = "";
    obj.map((item) => {
      item.text ? plantilla += `<p>${item.text}</p>` : false;
    });
    return plantilla;
  },
  draw_table(obj) {
    let plantilla = `
    <table class="table">
      <thead>
        <tr>
          ${Object.keys(obj[0]).map((item) => {
      return `<th>${item}</th>`;
    })}
        </tr>
      </thead>
      ${obj
        .map((item) => {
          return `
          <tr>
            <td>${item["Tipo de Tablero"]}</td>
            <td>${item["Tamaño"]}</td>
            <td>${item["Precio"]}</td>
          </tr>
        `;
        })
        .join("")}

    </table>
    
    `;
    return plantilla;
  },
  draw_lista(obj) {
    let plantilla = `
      <ul>
        ${obj.map((item) => {
          return `<li>${item ? item : false}</li>`;
        }).join('')
        }
      </ul>`
    return plantilla;
  }
}


self.addEventListener("message", (e) => {
  e.data.module === "finished" ? postMessage({module : e.data.module}) : postMessage(wsdraw_post[`${e.data.module}`](e.data.data));
});
