let browserWSEndpoint ='';
const puppeteer = require("puppeteer");

async function initiatePuppeteer(){
await fetch("http://127.0.0.1:9222/json/version")
.then(response=> response.json())
.then(function(data){
browserWSEndpoint = data.webSocketDebuggerUrl;
})
.catch(error => console.log(error));
}

initiatePuppeteer();

document.getElementById("deon-button")
.addEventListener("click", puppetIT);

async function puppetIT(){
const browser = await puppeteer.connect({
browserWSEndpoint: browserWSEndpoint
});
const page = await browser.newPage();

await page.goto('https://github.com/ramynath/')
}
