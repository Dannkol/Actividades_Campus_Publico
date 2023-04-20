import myCard from "./componets/card/my-card.js";

myCard.show()

document.addEventListener("DOMContentLoaded", (e)=>{

    const myWorker = new Worker("./componets/card/wkmycard.js")
    myWorker.postMessage([])
    myWorker.addEventListener("message", (e)=>{
        console.log(e.data);
        let doc = new DOMParser().parseFromString(e.data,"text/html")
        console.log(doc.body)
        document.body.appendChild(...doc.body.children)
    })
    

   

})



/* 


    [
    "\n            <div>\n                <my-card name=\"bulbasaur\" img_front=\"\" img_back=\"\" species=\"\" hp=\"\"  speed=\"\" defense=\"\" attack=\"\" ></my-card>    \n            <div>\n\n        ",
    "\n            <div>\n                <my-card name=\"ivysaur\" img_front=\"\" img_back=\"\" species=\"\" hp=\"\"  speed=\"\" defense=\"\" attack=\"\" ></my-card>    \n            <div>\n\n        ",
    "\n            <div>\n                <my-card name=\"venusaur\" img_front=\"\" img_back=\"\" species=\"\" hp=\"\"  speed=\"\" defense=\"\" attack=\"\" ></my-card>    \n            <div>\n\n        ",
    "\n            <div>\n                <my-card name=\"charmander\" img_front=\"\" img_back=\"\" species=\"\" hp=\"\"  speed=\"\" defense=\"\" attack=\"\" ></my-card>    \n            <div>\n\n        ",
    "\n            <div>\n                <my-card name=\"charmeleon\" img_front=\"\" img_back=\"\" species=\"\" hp=\"\"  speed=\"\" defense=\"\" attack=\"\" ></my-card>    \n            <div>\n\n        ",
    "\n            <div>\n                <my-card name=\"charizard\" img_front=\"\" img_back=\"\" species=\"\" hp=\"\"  speed=\"\" defense=\"\" attack=\"\" ></my-card>    \n            <div>\n\n        ",
    "\n            <div>\n                <my-card name=\"squirtle\" img_front=\"\" img_back=\"\" species=\"\" hp=\"\"  speed=\"\" defense=\"\" attack=\"\" ></my-card>    \n            <div>\n\n        ",
    "\n            <div>\n                <my-card name=\"wartortle\" img_front=\"\" img_back=\"\" species=\"\" hp=\"\"  speed=\"\" defense=\"\" attack=\"\" ></my-card>    \n            <div>\n\n        "
]


*/