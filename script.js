const accessKey = "nD6Rl2toWHeJF4UcEuEK3ccICOGJMA8bPpOZta0QlxY"


const inputText = document.getElementById("input-text")
const searchBtn = document.getElementById("btn")
const loadMoreBtn = document.getElementById("load-more-btn")
const imgSection = document.getElementById("img-section")


 let keyword = "";
 let page = 1;

async function searchImages(){
    keyword = inputText.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}