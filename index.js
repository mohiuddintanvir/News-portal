// news catagory 

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
        // postdiv.classList.add('post')
        postdiv.innerHTML = `    
        <p class="m-lg-5 ps-lg-5 ms-sm-5 " onclick="elemnet('${post.category_id}')">${post.category_name}</p> 
  
`;
        postcontainer.appendChild(postdiv)
    }

}
loadnewssection();


// entertainment sector 
function elemnet(id) {
    console.log(id)
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => entertainmentelement(data.data))
};
const entertainmentelement = fasionnews => {
    const entertainmentpage = document.getElementById('Entertainment');
    entertainmentpage.innerText = ' ';
    fasionnews.forEach(fasionpage => {
        console.log(fasionpage);
        const fasiondiv = document.createElement('div');
        fasiondiv.classList.add('col');
        fasiondiv.innerHTML = `
        <div class="card">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${fasionpage.author.name}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                                <button onclick="othertdetails('${fasionpage._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"> More</button>

                               

                        </div>
                    </div>`;
        entertainmentpage.appendChild(fasiondiv);
    });

}



// 
function othertdetails(id) {
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showmodel(data.data[0]))

}
const showmodel = details => {
    console.log(details);
    const modalid = document.getElementById('exampleModal');
    const modaltitleid = document.getElementById('exampleModalLabel');
    modaltitleid.innerHTML = `
    <h5 >${details.author.name} </h5>

    `
    const modalbody=document.getElementById('modalbody');
    

}

