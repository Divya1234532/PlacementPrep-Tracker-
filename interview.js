function addInterview(){

let score =
document.getElementById("score").value;

let li =
document.createElement("li");

li.innerText =
"Score: " + score;

document.body.appendChild(li);

}
