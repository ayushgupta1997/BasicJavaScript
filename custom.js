 // alert("rakesh rajput")
// document.write("welcome rakesh Rajput")

// *********variable********
// var x=10;
// var y="rakesh"
// document.write(x+ " "+y);

// *********operators*******
// var x=10;
// var y=20;
// var z="10";
// var c= x+y;
// document.write(x+z);
// document.write(x-y);
// var d= x>y;
// document.write(d);
// var a=x==z;
// var b=x===z;
// document.write(a);
// document.write("<br>");
// document.write(b);
// if (x>y){
// 	document.write("x is greater than y");
// } else {
// 		document.write("Y is greater than x");
// }

// *******switch case*******
// switch(x){
// 	case 5: document.write("this is 5");
// 	break;
// 	case 10: document.write("this is 10");
// 	break;
// }

//*********while loop*********
// var count = 5;
// while(count<10){
// 	document.write("Hi, I'm Rakesh Rajput");
// 	document.write("<br>");
// 	count++;
// }


//**********do while loop**********
// var count = 15;
// do {
// 	document.write("Hi, I'm Rakesh Rajput");
// 	count++;
// }
// while(count<x);


//********for loop*************
// for(var i=0; i<10; i++){
// 	document.write("Hi");
// 	document.write("<br>");
// }



//**********Array**************
// var arr = new Array;
// arr[0] ="rakes";
// arr[1] =10;
// document.write("<br>");
// document.write(arr[0]+" " +arr[1]);
// document.write("<br>");


// var array = new Array("rakesh", 8);
// document.write(array[0]+" " +array[1]);
// document.write("<br>");


// var arr1=["rakesh", 43];
// document.write(arr1[0]+" " +arr1[1]);
// document.write("<br>");



// //***********concat two array***********
// var concatArray = arr.concat(array);
// document.write("concatArray: "+ concatArray);
// document.write("<br>");


// sorting it used ASCIII value (sort method)
// var newarr=["Iphone", "Mac", "Android", "apple"];
// newarr.sort();
// document.write(newarr[0]);
// document.write("<br>");
// document.write(newarr);
// document.write("<br>");
// newarr.pop();
// document.write(newarr);
// document.write("<br>");
// newarr.push(10);
// document.write(newarr);


//***********function********
// function sum()
// {
// 	var a=10;
// 	var b=30;
// 	var c = a+b;
// 	document.write(c);
// }
// sum();

//**********string *********
// var str = "rakesrajput";
// var len = str.length; // length start from one 
// document.write(len);

// var char = str.charAt(4);
// document.write(char);

// var index = str.indexOf('j');
// document.write(index);

// var comp = str.localeCompare("raj");
// document.write("compare: " +comp);


//*********Event*************
// function callFun(){
// 	alert("you clicked");
// 	document.write("Your click the button");
	
// }


// function callFun1(){
	// alert("Mouse over");
	// document.write("Well done");
	
// }
// function callFun2(){
// 	alert("Mouse Outed");
// 	document.write("Well done");
	
// }

// function cal(){
// 	document.calc.answer.value=eval(document.calc.calculator.value);
// }
// function rst() {
// 	document.calc.calculator.value=" ";
// }

// function windLoc(){
// 	window.location ="https://www.facebook.com/rakeshrajput537"
// }

//********confirmation*********
// function confirmation(){
// 	var ans = confirm("you want to visit facebook profile");
// 	if (ans){
// 		alert("welcome to facebook");
// 		window.location ="https://www.facebook.com/rakeshrajput537"
// 	}
// 	else {
// 		alert("you are cancelled");
// 	}
// }

//****** Dialog box*****
// function promptCall() {
// 	var name = prompt("enter your name");
// 	alert("nice to meet you "+name);
// 	document.write("welcome "+name+"!");
// }


//*****Math************
// var a=Math.floor(99.99);
// var b=Math.round(10.534);
// var c=Math.log(0);
// var d=Math.max(21,23,433,53,34,344);
// var e = Math.floor(Math.random()*100);
// document.write(a);
// document.write("<br>");
// document.write(b);
// document.write("<br>");
// document.write(c);
// document.write("<br>");
// document.write(d);
//document.write("<br>");
// document.write(e);
// var x=Math.floor(( Math.random()*100));
// document.write(x);

 
// *********Date**************

// var dt = new Date();
// document.write(dt);
// var day = dt.getDay();
// document.write(day);

//********validation*****
// function validation() {
// 	var us =document.getElementById("user").value;
// 	var ps =document.getElementById("pass").value;
// 	if (us=="") {
// 		alert("please fill username");
// 		document.getElementById('username').innerHTML="**please  again fill username***";
// 		return false;
// 	} 
// 	if (ps=="") {
// 		alert("please fill password");
// 		document.getElementById('password').innerHTML="**please agaien fill password***";
// 		return false;
// 	}
// 	}
	

//*******Complete code validation*******
function validation() {
	var us = document.getElementById('user').value;
	var ps = document.getElementById('pass').value;
	var cnf = document.getElementById('cnfpass').value;
	var mo = document.getElementById('mobilenumber').value;
	var em = document.getElementById('emails').value;
	if (us=="") {
		document.getElementById('username').innerHTML="****Fill your name***";
		return false;
	}
	if ((us.length<=6) || (us.length>=20)) {
		document.getElementById('username').innerHTML="****Fill Enter between six to twenty***";
		return false;
	}
	if (!isNaN(us)) {
		document.getElementById('username').innerHTML="****Only number you can not fill***";
		return false;

	}
	if (ps=="") {
		document.getElementById('password').innerHTML="****Fill your password***";
		return false;
	}
	if (ps!=cnf) {
		document.getElementById('confirmpassword').innerHTML="***password not matching***";
		return false;

	}
	if (cnf=="") {
		document.getElementById('confirmpassword').innerHTML="****Password does not match***";
		return false;
	}
	if (mo=="") {
		document.getElementById('mobile').innerHTML="****Fill your valid mobile***";
		return false;
	}
	if (isNaN(mo)) {
		document.getElementById('mobile').innerHTML="****only number is allowed***";
		return false;
	}
	if (mo.length!=10) {
		document.getElementById('mobile').innerHTML="****Please fill 10 digit number***";
		return false;

	}
	if (em=="") {
		document.getElementById('email').innerHTML="****Fill your email***";
		return false;
	}
	if (em.indexOf('@')<=0) {
		document.getElementById('email').innerHTML="****Invalid Email***";
		return false;
	}
	// if (em.charAt(em.length-4!='.')){
	// 	document.getElementById('email').innerHTML="****Invalid EmailAgain***";
	// 	return false;

	// }
}





