const $p_nivel_selected = document.querySelector("#nivel-selected");

let numberClassification = localStorage.getItem("numberClassification");

$p_nivel_selected.innerText = `You selected ${numberClassification} out of 5`;


