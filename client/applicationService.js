  //filter apps
  const filterApps = async () => {
    try {
        const response =  await fetch("http://localhost:3000/api/applications");
        const result =  await response.json();
        searchApp(result);
    } catch(err) {
        console.log("error", err);
    }
  };

//show all apps
const loadApps = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/applications");
        const result = await response.json();
        load(result);
    } catch(err) {
        console.log("error", err);
    }
};

//add app
const addApplication = async () => {
    const dataToSend = {
        imageUrl: document.getElementById("ImageUrl").value,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        desc: document.getElementById("description").value,
        companyName: document.getElementById("companyName").value,
    };
    try {
        await fetch("http://localhost:3000/api/applications", {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: { "content-type": "application/json" },
          });
    } catch(err) {
        console.log("error", err);
    }
};
