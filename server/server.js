const express = require("express");
const cors = require("cors");
const shortid = require("shortid");
const {getAll, addApp, checkIfExists, deleteApp} =  require("./queries.js");

const app = express();
app.use(express.json());
app.use(cors());    
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


//Endpoints

app.get("/api/applications", async (req, res) => {
    const apps = await getAll();
    if(!apps || !apps.length) {
        res.status(404).send("Not exist");
    } else {
        res.send(apps);
    }
});

app.post("/api/applications", async (req, res) => {
    const newApp = {
        "id": shortid.generate(),
        "imageUrl": req.body.imageUrl,
        "name": req.body.name,
        "price": req.body.price,
        "desc": req.body.desc,
        "companyName": req.body.companyName,
        "createdAt": new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    };
    addApp(newApp);
    res.send(newApp);   
});

app.delete("/api/applications/:id", async (req, res) => {
    const appID = req.params.id;
    const check = await checkIfExists(appID);
    if(!check || !check.length) {
        res.status(404).send("Not exist");
    } else {
    deleteApp(appID);
    res.send(`Application has been deleted`);
    }
});