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
        <div class=" ms-4"> 
        <button type="button" class="btn  m-lg-4    ms-3 ms-sm-5 text-center"  onclick="elemnet('${post.category_id}')"> ${post.category_name.slice(0)}</button>
        
        </div>
       
 
       
  
`;
        postcontainer.appendChild(postdiv)
    }

}
loadnewssection();


// entertainment sector 
function elemnet(id) {

    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => entertainmentelement(data.data))
        .catch(error => console.log(error))
    loadSpinner(true)
};

const loaduserAsync = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    try {
        const res = await fatch(url);
        const data = await res.json();
        entertainmentelement(data.data)
    }
    catch (error) {
        console.log(error, 'There is no data ')
    }

}
const entertainmentelement = fasionnews => {
    const checklength = fasionnews.length;
    inputfield(checklength);
    fasionnews.sort((a, b) => {
        return b.total_view - a.total_view;

    });
    checklength.innerText = '';
    const entertainmentpage = document.getElementById('Entertainment');
    entertainmentpage.innerText = ' ';
    fasionnews.forEach(fasionpage => {
        console.log(fasionpage);
        const fasiondiv = document.createElement('div');

        fasiondiv.innerHTML = `
        
        <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${fasionpage.image_url}" class="img-fluid rounded-start h-100" alt="...">
                      </div>
                      <div class="col-md-8 ">
                        <div class="card-body">
                          <h5 class="card-title">${fasionpage.title ? fasionpage.title : 'No title'}</h5>
                          <p class="card-text text-truncate">${fasionpage.details ? fasionpage.details : 'no details'}</p>
                          <div class="d-flex ps-5z">
                          <img src="${fasionpage.author.img}" class="img-fluid rounded-circle w-25 h-25 " alt="..."> 
                          <span class="ms-3 mt-4"> ${fasionpage.author.name ? fasionpage.author.name : 'No name is here'}</span>
                          <i class="fa-solid fa-eye ms-4 mt-4">${fasionpage.total_view}</i>
                            <button onclick="othertdetails('${fasionpage._id}')" class="ms-3 mt-4 w-25 h-25" data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        `

        entertainmentpage.appendChild(fasiondiv);
    });

    loadSpinner(false);
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


const loadSpinner = (isspinner) => {
    const loadSpiner = document.getElementById("load-spinner");
    if (isspinner == true) {
        loadSpiner.classList.remove("d-none");
    }
    else {
        loadSpiner.classList.add("d-none");
    }

}
function inputfield(filed) {
    const inputdide = document.getElementById('inputfild');
    inputdide.value = `
    ${filed}'Items for catagory'
    `

}










