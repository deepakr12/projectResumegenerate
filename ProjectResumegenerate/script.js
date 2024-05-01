//alert("loading");
function addNewWEField() {
   // console.log("Adding new field");


   let newNode = document.createdElement("textarea");
   newNode.classlist.add("from-control");
   newNode.classlist.add("weField");
   newNode.classlist.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");

   let weOb = document.getElementBYId("we");
   let weADDButtonb = document.getElementBYId("WeAddButton");

   weOb.insertBefore(newNode, webaddButoonb);
}

function addNewAQField() {

}
function addNewWEField() {
   let newNode = document.createdElement("textarea");
   newNode.classlist.add("from-control");
   newNode.classlist.add("weField");
   newNode.classlist.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");

   let aqob = document.getElementBYId("aq");
   let aqADDButtonb = document.getElementBYId("aqAddButton");

   aqob.insertBefore(newNode, aqAddButtonOb);
}
// generating cv
function generatecv() {

   //console.log("generating CV");

   let nameField = document.getElementById("nameField").value;

   let nameT1 = document.getElementById("nameT1").innerHTML= nameField;
      

      //direct
      // document.getElementById("nameT2").innerHTML = nameField;

      //contact
      document.getElementById("contactT").innerHTML = document.getElementById("hiii").value; 
      // let s=document.getElementById("hiii").value 


      //address
       document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;

       document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

      document.getElementById("linkT").innerHTML = document.getElementById("linkdeinField").value;

      //objective
      document.getElementById("objectiveT").innerHTML = documet.getElementById("objectiveField ").value;

      //we

      let wes = document.getElementsByClassName("weField")

      let str = "";
   
      for(let e of wes) {
         str = str +`<li> $ {e.value} </li>`;
          
      }
      document.getElementById("weT").innerHTML = str;

      //aq

      let aqs = document.getElementsByClassName("eqField")

      let str1 = "";

      for(let e of aqs) {
         str1 +=`<li>$ {e.value} </li>`;
      }

      document.getElementById("aqt").innerHTML =str;
      




}
