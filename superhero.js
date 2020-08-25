let FavList = [];

const rescontainer = document.getElementById('result-container');
async function searchApi(val) {
    try {
        const res = await fetch(`https://superheroapi.com/api.php/10157143645741244/search/${val}`);


        console.log(res);
        const data = await res.json();

        if (data.response !== 'error') {
            init(data);
        } else {
            rescontainer.style.visibility = "hidden";
            rescontainer.style.opacity = "0";
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
        rescontainer.appendChild(ele);

        favBtn.addEventListener('click', (e) => {

            FavList.push(item);
        });

        let favele = document.createElement("div");
    })
}

openFav = () => {
    
}