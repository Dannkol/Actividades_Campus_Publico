export default {
  posts: [
    {
      title: "Los Tableros a tu medida",
      meta_data: {
        date: "January 1, 2021",
        description: [
          {
            text: "parafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
          },
          {
            text: "parafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
          },
          {
            subtitle: "Precios",
          },
          {
            table: [
              {
                "Tipo de Tablero": "Acrilico escolar",
                "Tamaño": "80 x 120 cm",
                "Precio": 200000,
              },
              {
                "Tipo de Tablero": "Acrilico personal",
                "Tamaño": "40 x 60 cm",
                "Precio": 100000,
              },
              {
                "Tipo de Tablero": "Corcho escolar",
                "Tamaño": "80 x 120 cm",
                "Precio": 180000,
              },
              {
                "Tipo de Tablero": "Corcho personal",
                "Tamaño": "40 x 60 cm",
                "Precio": 90000,
              },
              {
                "Tipo de Tablero": "Caballete",
                "Tamaño": "180 cm",
                "Precio": 90000,
              },
            ],
          },
        ],

        autor: [
          {
            name: "John Doe",
            href: "upchh@example.com",
          },
        ],
      },
      slug: "first-sample-blog-post",
      content: [],
    },
  ],
  wspost(){
    
  },
  DrawPost() {
    const post = document.querySelector(".blog-post");
    const fragment = document.createDocumentFragment();
    const myWorker = new Worker("/componets/Workers/MyfirstPost.js", {
      type: "module",
    });
    console.log()

    myWorker.postMessage({module: "draw_p" , data:this.posts[0].meta_data.description});
    myWorker.postMessage({module: "draw_table" , data:this.posts[0].meta_data.description[3].table});
    myWorker.addEventListener("message", (e)=>{
      let doct = new DOMParser().parseFromString(e.data , 'text/html')
      console.log(e)
      post.append(...doct.body.children);
          
    })
  },
};
