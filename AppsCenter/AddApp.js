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

    let regPrice = new RegExp(/[0-9]/);
    let boolPrice = regPrice.test(document.getElementById("price").value);

    let regDesc = new RegExp(/\w{0,300}$/);
    let desc = document.getElementById("description").value
    let boolDesc = regDesc.test(desc)
    if(desc.length == 0) {
        desc = "this app does not have description";
    }

    let regCompany = new RegExp(/\w{0,30}$/);
    let companyName = document.getElementById("companyName").value
    let boolCompany = regCompany.test(companyName)
    if(companyName.length == 0) {
        companyName = "this app does not have a company";
    }

    let regImage = new RegExp(/\.{0,300}$/);
    let imgUrl = document.getElementById("ImageUrl").value
    let boolImage = regImage.test(imgUrl)
    if(imgUrl.length == 0) {
        imgUrl = "Help.png";
    }

    let errorMessage = document.getElementById("error");
    if(!(boolCompany && boolDesc && boolImage && boolName && boolPrice)) {
        errorMessage.style.display = "block";
    }
    else {
        errorMessage.style.display = "none";
        let applicationToAdd = [
            {
                'id': getNextId(),
                'imageUrl': imgUrl,
                'name': document.getElementById("name").value,
                'price': document.getElementById("price").value,
                'desc': desc,
                'companyName': companyName
            }];
            console.log(applicationToAdd);
            
            let String = 
            addItemToTheList(applicationToAdd);
    }
}