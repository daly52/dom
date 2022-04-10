const btnPlus=document.querySelectorAll(".plus");
const btnmin=document.querySelectorAll(".minus")
const chekboxtag=document.getElementsByClassName("check");
const delet=document.getElementsByClassName("delete");
const like=document.getElementsByClassName("like");
//console.log(chekboxtag)
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click",increment);
    chekboxtag[i].addEventListener("click",totelprice);
    btnmin[i].addEventListener("click",min);
    delet[i].addEventListener("click",deletee);
 like[i].addEventListener("click",wishlist)

}
function wishlist(event) {

    var btnlike = event.target;
    
  
    if(btnlike.style.color==="gray"){
        btnlike.style.color = "red";
    }
    else {
        btnlike.style.color = "gray";
    } 
  }
function deletee(e){
    var delet=e.target;
    //console.log(delet);
    var tdelem=delet.parentElement.parentElement.parentElement.parentElement;
    console.log(tdelem);
    tdelem.remove();
}

function min(e){

  var  btnMin=e.target;
  var divElt=btnMin.parentElement;
  var quentitytag=divElt.querySelector("p");
 // console.log(quentitytag)
 quentityvalue=Number(quentitytag.innerHTML);
 if(quentityvalue>0)
 {
    quentityvalue--;
 }
 
  //console.log(quentityvalue);
  quentitytag.innerHTML=quentityvalue;

  var trElt=divElt.parentElement.parentElement;
var unitpricevalue=Number(trElt.querySelector(".unitePrice").innerHTML);
//console.log(unitpricevalue)
var pricetag=trElt.querySelector(".price");
var pricevalue=Number(pricetag.innerHTML);
pricevalue=quentityvalue*unitpricevalue;
pricetag.innerHTML=pricevalue;


}


function increment(event){
    //console.log(event);
    var btnplus=event.target;
    // console.log(btnplus);
    var divElt=btnplus.parentElement;
    var quentitytag=divElt.querySelector("p");
   // console.log(quentitytag)
   quentityvalue=Number(quentitytag.innerHTML);
   quentityvalue++;
    //console.log(quentityvalue);
    quentitytag.innerHTML=quentityvalue;

    var trElt=divElt.parentElement.parentElement;
var unitpricevalue=Number(trElt.querySelector(".unitePrice").innerHTML);
//console.log(unitpricevalue)
var pricetag=trElt.querySelector(".price");
 var pricevalue=Number(pricetag.innerHTML);
 pricevalue=quentityvalue*unitpricevalue;
 pricetag.innerHTML=pricevalue;
}
//totale price
function totelprice(e){
    checkbox=e.target;
    var pricevalue=Number(checkbox.parentElement.parentElement.querySelector(".price").innerHTML);
    var totaltag=document.getElementById("total");
    var totalvalue=Number(totaltag.innerHTML);
    var btnPluss=checkbox.parentElement.parentElement.querySelector(".plus");
    if(checkbox.checked===true){
        totalvalue+=pricevalue;
        btnPluss.setAttribute("disabled",true);

    }
    else{
        totalvalue-=pricevalue;
        btnPluss.removeAttribute("disabled");

    }
    totaltag.innerHTML=totalvalue;


}