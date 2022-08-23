document.addEventListener("DOMContentLoaded", () => {
    function onSumbit(event) {
        event.preventDefault();
    }
		
});

function publishApp() {
    let regName = new RegExp(/\w{4,30}$/);
    let boolName = regName.test(document.getElementById("name").value);

    let regPrice = new RegExp(/^\d*[1-9]\d*$/);
    let boolPrice = regPrice.test(document.getElementById("price").value);

    let regDesc = new RegExp(/\w{0,300}$/);
    let descp = document.getElementById("description").value;
    let boolDesc = regDesc.test(descp)

    let regCompany = new RegExp(/\w{0,30}$/);
    let companyName = document.getElementById("companyName").value || "this app does not have a company";
    let boolCompany = regCompany.test(companyName)

    let regImage = new RegExp(/\.{0,300}$/);
    let imgUrl = document.getElementById("ImageUrl").value;
    let boolImage = regImage.test(imgUrl)

    
    document.getElementById("companyName").style.borderColor = "green";
    document.getElementById("ImageUrl").style.borderColor = "green";
    document.getElementById("description").style.borderColor = "green";
    let errorMessage = document.getElementById("error");
    
    if(!(boolCompany && boolDesc && boolImage && boolName && boolPrice)) {
        errorMessage.style.display = "block";
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("price").style.borderColor = "green";

        if(!boolName) {
        document.getElementById("name").style.borderColor = "red"; }
        if(!boolPrice) {
        document.getElementById("price").style.borderColor = "red"; }
    }
    else {
        errorMessage.style.display = "none";
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("price").style.borderColor = "green";

            addApplication();
            document.getElementById("uploaded").style.display = "block";
        
    }
}