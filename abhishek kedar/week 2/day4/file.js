function load()
{
	document.getElementById("ltext").value= localStorage.like;
	 document.getElementById("dtext").value = localStorage.dislike;
	 console.log(localStorage.like);
	 console.log(localStorage.dislike);
}
function countLike() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.like) {
            localStorage.like = Number(localStorage.like)+1;
			console.log(localStorage.like);
        } else {
            localStorage.like = 1;
        }
        document.getElementById("ltext").value = localStorage.like;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function countDislike() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.dislike) {
            localStorage.dislike = Number(localStorage.dislike)+1;
				 console.log(localStorage.dislike);
        } else {
            localStorage.dislike = 1;
        }
        document.getElementById("dtext").value = localStorage.dislike;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
