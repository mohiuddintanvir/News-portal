function loadnewssection() {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => getportalname(data.data.news_category))
};

function getportalname(posts) {
    const postcontainer = document.getElementById('post-container')
    for (const post of posts) {
        console.log(post)
        const postdiv = document.createElement('div');
        postdiv.classList.add('post')
        postdiv.innerHTML = `    
        <p>${post.category_name}</p> 
  
`;
        postcontainer.appendChild(postdiv)
    }

}


loadnewssection();
