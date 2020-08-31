const gridContainer = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");
const deleteBtn = document.getElementById("delete");
const rainbowBtn = document.getElementById("rainbow");
const blackBtn = document.getElementById("black");

resetBtn.addEventListener("click", test);
deleteBtn.addEventListener("click", clearGrid);
rainbowBtn.addEventListener("click", rainbowGrid);
blackBtn.addEventListener("click", blackGrid);

CreateGrid(4);

function CreateGrid(num){
    for (let i = 0;i < num*num; i++){
        const div = document.createElement("div");
        div.style.border= "1px solid";
        div.setAttribute("id", "griddiv");
        div.addEventListener("mouseover", ()=> div.style.backgroundColor = "black");
        gridContainer.appendChild(div);
    }

    
    gridContainer.style.gridTemplateColumns = `repeat(${num}, auto)`;
}


function nums(){
    let number = prompt("Enter a number");
    return number;
}

function test(){
    removeChilds(gridContainer);

    let num = nums();

    CreateGrid(num);
}

function removeChilds(parent){
    if(parent.firstChild === null) return;

    while(parent.firstChild != null){
        parent.removeChild(parent.firstChild);
    }
}

function clearGrid(){
    const griddiv = document.querySelectorAll("#griddiv");
    griddiv.forEach((div) => div.style.backgroundColor = "white");
}

function rainbowGrid(){
    const griddiv = document.querySelectorAll("#griddiv");
    griddiv.forEach((div) => div.addEventListener("mouseover", 
    ()=> div.style.backgroundColor = "rgb("+getRandomInt(0,256)+", "+getRandomInt(0,256)+", "+getRandomInt(0,256)+")"));
}

function blackGrid(){
    const griddiv = document.querySelectorAll("#griddiv");
    griddiv.forEach((div) => div.addEventListener("mouseover", ()=> div.style.backgroundColor = "black"));

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
