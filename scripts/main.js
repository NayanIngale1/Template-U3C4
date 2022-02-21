async function apiCall(url) {


    //add api call logic here
    try {
        
        let res = await fetch(url);
        let data = await res.json();

        return data;

    } catch (error) {
        console.log('error:', error)
        
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(el => {
        
    

        let card = document.createElement("div");
        card.className = 'news'
        card.addEventListener('click', () => {
            
            localStorage.setItem("article", JSON.stringify(el));
            window.location.href = './news.html'
        })

        let imgdiv = document.createElement('div');
        imgdiv.className = 'imgDiv';
        let img = document.createElement('img');
        img.src = el.urlToImage;

        let infodiv = document.createElement('div');
        infodiv.className ='infoDiv';

        let title = document.createElement('h1');

        title.innerText = el.title;

        let discr = document.createElement('h4');
        discr.innerText = el.description

        let date = document.createElement('h4');
        date.innerText = el.publishedAt;

        imgdiv.append(img);
        infodiv.append(title, discr, date);
        card.append(imgdiv, infodiv);

        main.append(card);

    });

}

export { apiCall, appendArticles }


