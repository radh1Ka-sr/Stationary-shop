// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;

//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;
// }, 1000);

// const superhero = require('superhero-name-library')
// import superhero from "superhero-name-library";
// var name=superhero.random();
// console.log(`my name is ${name}`);
//const express = require('express')
import express from "express";
import bodyParser from "body-parser";
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
  res.send("<h1>Hello World!</h1>")
  //console.log(req.rawHeaders);
})
app.post('/home', (req, res) => {
  res.sendStatus(201)
  //console.log(req.rawHeaders);
})
app.put('/about', (req, res) => {
  res.send("<h1>about page!</h1>")
  //console.log(req.rawHeaders);
})
app.patch('/contact', (req, res) => {
  res.send("<h1>Hello World!</h1>")
  //console.log(req.rawHeaders);
})
app.delete('/', (req, res) => {
  res.send("<h1>Hello World!</h1>")
  //console.log(req.rawHeaders);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
