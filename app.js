const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm} };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    //this gets the image: console.log(res.data[0].show.image.medium);
    makeImages(res.data);
    form.elements.query.value = ""; 
})  

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
        
    }
}


//could write a function to clear all the images 