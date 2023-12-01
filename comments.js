// create web server
const express = require('express');
const app = express();
const port = 3000;
// get data from database
const db = require('./db');
// use express to get data from client
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use express to get data from client
// create function to check data
function checkData(data) {
    if (data.name == '' || data.name == undefined) {
        return false;
    }
    if (data.content == '' || data.content == undefined) {
        return false;
    }
    return true;
}
// create function to check data
// create function to check data
function checkDataId(data) {
    if (data.id == '' || data.id == undefined) {
        return false;
    }
    return true;
}
// create function to check data
// create function to get data from database
function getDataFromDb() {
    let data = db.get('comments').value();
    return data;
}
// create function to get data from database
// create function to get data from database by id
function getDataFromDbById(id) {
    let data = db.get('comments').find({ id: id }).value();
    return data;
}
// create function to get data from database by id
// create function to add data to database
function addDataToDb(data) {
    db.get('comments').push(data).write();
}
// create function to add data to database
// create function to update data to database
function updateDataToDb(data) {
    db.get('comments').find({ id: data.id }).assign(data).write();
}
// create function to update data to database
// create function to delete data to database
function deleteDataToDb(id) {
    db.get('comments').remove({ id: id }).write();
}
// create function to delete data to database
// create function to get max id
function getMaxId() {
    let data = db.get('comments').value();
    let maxId = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id > maxId) {
            maxId = data[i].id;
        }
    }
    return maxId;
}
// create function to get max id
// create function to get data from database
function getData()