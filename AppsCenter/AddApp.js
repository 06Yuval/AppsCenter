const addItemToTheList = (data) => {
    localStorage.setItem('applications',
     JSON.stringify(JSON.parse(localStorage.getItem('applications')).concat(data)));
}

const getNextId = () => {
    let id = localStorage.getItem('id');
    localStorage.setItem('id', ++id);
    
    return id;
}

document.addEventListener("DOMContentLoaded", () => {
		
});

function publishApp() {
    let regName = new RegExp(/\w{4,30}$/);
    let boolName = regName.test(document.getElementById("name").value);
    let appName = document.getElementById("name").value;

    let regPrice = new RegExp(/^\d*[1-9]\d*$/);
    let boolPrice = regPrice.test(document.getElementById("price").value);
    let appPrice = document.getElementById("price").value;

    let regDesc = new RegExp(/\w{0,300}$/);
    let descp = document.getElementById("description").value
    let boolDesc = regDesc.test(descp)
    if(descp.length == 0) {
        descp = "this app does not have description";
    }

    let regCompany = new RegExp(/\w{0,30}$/);
    let companyName = document.getElementById("companyName").value
    let boolCompany = regCompany.test(companyName)
    if(companyName.length == 0) {
        companyName = "this app does not have a company";
    }

    let regImage = new RegExp(/\.{0,300}$/);
    let imgUrl = document.getElementById("ImageUrl").value
    if(imgUrl.length == 0) {
        imgUrl = "Help.png";
    }
    else {
     imgUrl = document.getElementById("ImageUrl").files[0].name; 
    }
    let boolImage = regImage.test(imgUrl)

    let errorMessage = document.getElementById("error");
    if(!(boolCompany && boolDesc && boolImage && boolName && boolPrice)) {
        errorMessage.style.display = "block";
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("price").style.borderColor = "green";
        if(!boolName) {
        document.getElementById("name").style.borderColor = "red"; }
        if(!boolPrice) {
        document.getElementById("price").style.borderColor = "red"; }
        document.getElementById("companyName").style.borderColor = "green";
        document.getElementById("ImageUrl").style.borderColor = "green";
        document.getElementById("description").style.borderColor = "green";
    }
    else {
        errorMessage.style.display = "none";
        document.getElementById("companyName").style.borderColor = "green";
        document.getElementById("ImageUrl").style.borderColor = "green";
        document.getElementById("description").style.borderColor = "green";
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("price").style.borderColor = "green";

         let appAdd = [
            {
                'id': getNextId(),
                'imageUrl': imgUrl,
                'name': appName ,
                'price': appPrice,
                'desc': descp,
                'companyName': companyName
            }];
            addItemToTheList(appAdd);
            document.getElementById("uploaded").style.display = "block";
        
    }
}