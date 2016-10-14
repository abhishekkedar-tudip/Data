	var i=0;
	
function sub()
{
	if(document.getElementById('tname').value==""||document.getElementById('tage').value=="")
	{}else{
	var n=document.getElementById('tname').value;
	var a=document.getElementById('tage').value;
	if(i==0)
	{i++;
document.getElementById('fs').style.display='inline';
		document.getElementById('tab').innerHTML="<tr><td><h6>First Name</h6></td><td><h6>Age</h6></td><tr>";
}
$("document").ready(function(){
    $("#tab").append("<tr><td>"+n+"</td><td>"+a+"</td><tr>");
});
//document.getElementById('tab').innerHTML="<tr><td>"+n+"</td><td>"+a+"</td><tr>";
	console.log(n);
	console.log(a);
	}
}
function res()
{document.getElementById('tab').innerHTML="";
	location.reload();
	
}