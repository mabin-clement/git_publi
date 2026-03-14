function vote(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var res = document.getElementById("result")




if(age >= 18){
    result.innerHTML= name + " " + "you can vote"
}else{
    result.innerHTML = age + " " + "you cant"
}
}