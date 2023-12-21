
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port = 3000;

const staticPath = path.join(__dirname,".././public");
const templatePath = path.join(__dirname,".././templates/views");
const partialPath = path.join(__dirname,".././templates/partials");

app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
	res.render("index");
});

app.get("/about",(req,res)=>{
	res.render("about");
});
app.get("/weather",(req,res)=>{
	res.render("weather");
});
app.get("*",(req,res)=>{
	res.render("error");
});

app.listen(port,()=>{
	console.log(`listening on port no. ${port}`);
})