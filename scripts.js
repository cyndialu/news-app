const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
async function fetchNews(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    }catch (error){
        console.error(`There was an error: `, error);
    }
}
function displayNews(articles){
    const newsDiv = document.querySelector("#news");
    for(const article of articles){
        if(article.title !== "[Removed]"){
            const articleCard = document.createElement('div');
            articleCard.classList.add('conatainer','w-50','d-inline-block');
            articleCard.innerHTML = `<div class="card"><img class="card-img-top" src="${article.urlToImage}" alt="${article.title}">
            <div class="card-body"><h4 class="card-title">${article.title}</h4>
            <a href="${article.url}" class="btn btn-outline-dark mt-3">See more</a></div></div>`;
            newsDiv.appendChild(articleCard);
        }        
    }
}
            
fetchNews();