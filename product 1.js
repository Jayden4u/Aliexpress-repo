//start of Background image changer
function background1(){
    document.querySelector('#bg-pics').style.background = "url('./assets/S531fdf32429746a89825350698e962f0F.jpg') center center / cover";
}

function background2(){
    document.querySelector('#bg-pics').style.background = "url('./assets/Sa126872dedea429491c143484ca73d861.jpg') center center / cover";
}

function background3(){
    document.querySelector('#bg-pics').style.background = "url('./assets/big 2.webp') center center / cover";
}

function background4() {
    document.querySelector('#bg-pics').style.background = "url('./assets/S8ef4591808484adc9b466082082e408ay (1).jpg') center center / cover";
}

function background5() {
    document.querySelector("#bg-pics").style.background = "url('./assets/S4bae5ea5548b4dc59ad9a50a598f1af5L.jpg') center center / cover";
}
//end of backgroung img changer


//text size changer onclick
function change1() {
    document.getElementById('size-change').innerHTML = "S"
}

function change2() {
    document.getElementById('size-change').innerHTML = "M"
}

function change3() {
    document.getElementById('size-change').innerHTML = "L"
}

function change4() {
    document.getElementById('size-change').innerHTML = "XL"
}

function change5() {
    document.getElementById('size-change').innerHTML = "XXL"
}

function change6() {
    document.getElementById('size-change').innerHTML = "XXXL"
}
//end of text size-changer onclick

//
function color1() {
    document.getElementById('color-change').innerHTML = "NAVY BLUE"
}

function color2() {
    document.getElementById('color-change').innerHTML = "BLACK"
}

function color3() {
    document.getElementById('color-change').innerHTML = "WHITE"
}

// const container = document.getElementById("img-container");
//         const img = document.querySelector("#bg-pics"); 

//         container.addEventListener("mousemove", (e) => {
//             const x = e.clientX - e.target.offsetLeft;
//             const y = e.clientY - e.target.offsetTop;

//             console.log(x,y);

//             img.style.transformOrigin = `${x}px ${y}px` ;
//             img.style.transform = "scale(2)"
//         })

//         container.addEventListener("mouseleave", () => {
//             img.style.transformOrigin = "center";
//             img.style.transform = "scale(1)";
//         })