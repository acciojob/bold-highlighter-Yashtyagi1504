let strongs = document.querySelectorAll("strong");
let link = document.querySelector("a");

link.addEventListener("mouseover",highlight);
link.addEventListener("mouseout",return_normal);

function highlight() {
    //Write your code here
	strongs.forEach(strong=>{
		strong.style.color = "green";
	})


}


function return_normal() {
    //Write your code here
	strongs.forEach(strong=>{
		strong.style.color = "black";
	})
    
}
