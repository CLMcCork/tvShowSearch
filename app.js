const form = document.querySelector('#searchForm');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    resultsDiv.innerHTML = ""; //this clears any previous results that are in the results div
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
            resultsDiv.append(img); //append the images to the resultsDiv 
        }
        
    }
}



