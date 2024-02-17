const accessKey = "nD6Rl2toWHeJF4UcEuEK3ccICOGJMA8bPpOZta0QlxY"


const inputText = document.getElementById("input-text")
const searchBtn = document.getElementById("btn")
const loadMoreBtn = document.getElementById("load-more-btn")
const imgSection = document.getElementById("img-section")


 let keyword = "";
 let page = 1;

async function searchImages(){
    keyword = inputText.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    
    if(page === 1){
        imgSection.innerHTML = "";
    }

    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.appendChild(image);
        imgSection.appendChild(imageLink)
        
    })
    loadMoreBtn.style.display = "block";

}
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault;
    page = 1;
    searchImages();
})
loadMoreBtn.addEventListener("click", (e) =>{
    page++;
    searchImages();
})