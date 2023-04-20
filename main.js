Promise.all([import('./components/my-div.js')])
.then(([mydiv]) => { 
    mydiv.default.show();
})
