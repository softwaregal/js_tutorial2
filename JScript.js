function get_details(){
var temp={ 
           name:"",
           age:0,
           place:"",
           date:""
         };
temp.name=document.getElementById("name").value;
temp.age=document.getElementById("age").value;
temp.date=document.getElementById("dob").value;
temp.place=document.getElementById("placeOfBirth").value;
console.log(temp.name);
console.log(temp.age);
console.log(temp.date);
console.log(temp.place);
}