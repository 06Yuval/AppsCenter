const getData = () => {
    if (localStorage.getItem('applications') == null) {
        localStorage.setItem('applications', JSON.stringify(applications));
        localStorage.setItem('id', id);
    }

    return JSON.parse(localStorage.getItem('applications'));
}

document.addEventListener("DOMContentLoaded", () => {
  getData()
});


function load() {
    let map = getData().map((x) => `
    <div class="card mb-3" style="max-width: 500px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="AppsCenter/images/${x.id}/${x.imageUrl}" class="card-img" style="width: 150px; border-radius: 50%;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
          <p class="card-text"><small class="text-muted">price: ${x.price} <br> company name: ${x.companyName}</small></p>
        </div>
      </div>
    </div>
    </div>`); 
    map = map.join("");
    let tag_id = document.getElementById("container");
    tag_id.innerHTML = map;
}



    function searchApp() {
      let input = document.getElementById('search').value
      input= input.toLowerCase();
      let listApp = document.getElementsByClassName("card mb-3");
      let listAppNames = document.getElementsByClassName("card-title");
      for(let i = 0; i < listApp.length; i++) {
        if(!listAppNames[i].innerHTML.toLowerCase().includes(input)) {
          listApp[i].style.display="none"
        }
        else {
          listApp[i].style.display = "block";
        }
      }
    }

