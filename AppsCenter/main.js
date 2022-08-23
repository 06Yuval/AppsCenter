document.addEventListener("DOMContentLoaded", () => {
  loadApps();
});

document.getElementById("search").addEventListener("keyup", async () => {
  filterApps();
});

function load(arr) {
    let strHTML = arr.map((x) => `
    <div class="card mb-3" style="max-width: 800px;">
    <div class="row no-gutters">
      <div class="col-md-4">
      <button class="btn btn-danger" id="${x.id}" type="button" onclick="deleteApp(this.id)" style="height: 200px;"><i class="fa fa-trash-o"></i></button>
        <img src="../client/assets/images/${x.imageUrl}" class="card-img" style="width: 150px; border-radius: 50%;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text">${x.descr}</p>
          <p class="card-text"><small class="text-muted">price:  ${x.price}$ <br> company name: ${x.companyName}</small></p>
        </div>
      </div>
    </div>
    </div>`); 
    strHTML = strHTML.join("");
    let tagId = document.getElementById("containerEl");
    tagId.innerHTML = strHTML;
}


    function searchApp(arr) {
      let input = document.getElementById('search').value.toLowerCase();
      const filterArray = arr.filter((app) => {
        if(app.name.toLowerCase().includes(input)) {
          return app;
        }
      });
      load(filterArray);
    }

    function deleteApp(id) {
      removeApplication(id);
    }

