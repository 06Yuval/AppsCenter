const getData = () => {
    if (localStorage.getItem('applications') == null) {
        localStorage.setItem('applications', JSON.stringify(applications));
        localStorage.setItem('id', id);
    }

    return JSON.parse(localStorage.getItem('applications'));
}

document.addEventListener("DOMContentLoaded", () => {
  arr = getData();
  load(arr);
});


function load(arr) {
    let strHTML = arr.map((x) => `
    <div class="card mb-3" style="max-width: 500px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="../client/assets/images/${x.imageUrl}" class="card-img" style="width: 150px; border-radius: 50%;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.desc}</p>
          <p class="card-text"><small class="text-muted">price:  ${x.price}$ <br> company name: ${x.companyName}</small></p>
        </div>
      </div>
    </div>
    </div>`); 
    strHTML = strHTML.join("");
    let tagId = document.getElementById("containerEl");
    tagId.innerHTML = strHTML;
}



    function searchApp() {
      let input = document.getElementById('search').value.toLowerCase();
      const filterArray = getData().filter((app) => {
        if(app.name.toLowerCase().includes(input)) {
          return app;
        }
      });
      load(filterArray);
    }

