self.addEventListener("message" , (e) => {
    console.log(JSON.parse(e.data.data))
})