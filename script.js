let mainTitle = document.getElementById("main_title");
let titleinput = document.getElementById("title_input");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective");
let submitbutton = document.getElementById("submit_button");

function updatemaintitle(){
    mainTitle.innerHTML = titleinput.value;

}

function updatenoun(){
    noun.innerText = nouninput.value;

}

function updateverb(){
    verb.innerText = verbinput.value;
}

function updateadjective(){
    adjective.innerText = adjective.value;

}

function submitbutton(){
    submitbutton.innerText = submitbutton.value;
}

function input(event){
 event.preventDefault();
}

titleinput.addEventListener("input", updatemaintitle);
submitbutton.addEventListener("click", updatevalue);