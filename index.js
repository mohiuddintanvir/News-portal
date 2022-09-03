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

        fasiondiv.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                          { <button onclick="othertdetails('${fasionpage._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"> More</button>}
                        </div>
                      </div>
                    </div>
                  </div>
        `

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
    <h5 >${details.author.name ? details.author.name : 'Name not found '} </h5>

    `
    const modalbody = document.getElementById('modalbody');
    modalbody.innerHTML = `
     <h5>${details.total_view ? details.total_view : 'no view found'}</h5>
    `

}




