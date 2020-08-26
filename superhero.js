let FavList = [];

const rescontainer = document.getElementById('result-container');
const containerele = document.getElementById('fav-list-container');
async function searchApi(val) {
    try {
        const res = await fetch(`https://superheroapi.com/api.php/10157143645741244/search/${val}`);



        const data = await res.json();

        if (data.response !== 'error') {

            console.log('Inside Data', data.response);
            init(data);
        } else {
            hideList();
        }
    }
    catch (err) {
        console.log("Lo aa gaya Error", err);
    }
}

init = (data) => {
    rescontainer.style.visibility = "visible";
    rescontainer.style.opacity = "1";
    let res = data.results;
    res.map((item) => {

        let ele = document.createElement("div");

        ele.classList.add("ele-div");

        let image = document.createElement("img");
        image.setAttribute("src", item.image.url);
        image.classList.add("hero-img");

        let txtele = document.createElement("div");
        txtele.classList.add("ele-div__title");

        let title = document.createElement("span");
        title.innerText = item.name;
        title.classList.add("title");

        let favBtn = document.createElement("button");
        favBtn.innerText = "Fav";
        favBtn.classList.add("fav-btn");

        txtele.appendChild(title);
        txtele.appendChild(favBtn);

        ele.appendChild(image);
        ele.appendChild(txtele);

        // rescontainer.appendChild(ele);
        rescontainer.prepend(ele);
        favBtn.addEventListener('click', (e) => {


            FavList.push(item);
            console.log(FavList);

            localStorage.setItem("data", item);

            openFav(item);

        });


    })
}

openFav = (item) => {
    hideList();
    console.log("Inside Fav List function", item);

    // let containerele = document.createElement("div");
    containerele.classList.add("fav-list");

    let favImg = document.createElement("img");
    favImg.setAttribute("src", item.image.url);

    let titleEle = document.createElement("div");
    titleEle.classList.add("fav-list__title");
    let titletxt = document.createElement("span");
    titletxt.innerText = item.name;
    titleEle.appendChild(titletxt);

    let bioInfo = document.createElement("p");
    bioInfo.innerText = item.biography["full-name"];
    console.log(bioInfo);
    titleEle.appendChild(bioInfo);

    containerele.appendChild(favImg);
    containerele.appendChild(titleEle);


}

hideList = () => {
    rescontainer.style.visibility = "hidden";
    rescontainer.style.opacity = "0";
}