const { connection } = require("./database.js");
const fs = require("fs");

async function getAll() {
  const client = await connection();
  try {
    const result = await client.query("SELECT * FROM applications.t_apps");
    return result.rows;
  } catch (err) {
    console.log(err);
  } finally {
    await client.end();
  }
}

async function addApp(app) {
    const client = await connection();
    try {
        await client.query(`INSERT INTO applications.t_apps
        VALUES($1, $2, $3, $4, $5, $6, $7)`, [app.id, app.imageUrl, app.name, app.price, app.desc, app.companyName, app.createdAt]);
    } catch(err) {
        console.log(err);
    } finally {
        await client.end();
    }
}   

async function getSingleApp(appID) {
    const client = await connection();
    try {
        const result = await client.query(`SELECT * FROM applications.t_apps WHERE id = '${appID}'`);
        return result.rows;
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

async function deleteApp(appID) {
    const client = await connection();
    try {
        await client.query(`DELETE FROM applications.t_apps WHERE id = '${appID}'`);
    } catch(err) {
        console.log(err);
    } finally {
        await client.end();
    }
}


//updating app, it's working but never used... (not enough time to finish)
async function updateApp(app) {
    const client = await connection();
    try {
        await client.query(`UPDATE applications.t_apps SET "imageUrl" = '${app.imageUrl}',
         name = '${app.name}',
          price = ${app.price},
           descr = '${app.desc}',
           "companyName" = '${app.companyName}'
             WHERE id = '${app.id}'`);
    } catch(err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

module.exports = {getAll, addApp, getSingleApp, deleteApp, updateApp};
