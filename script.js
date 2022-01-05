 function one(e){
    this.style.backgroundColor = 'red'
   }
 function two(e){
   this.style.backgroundColor = 'blue'
   e.stopPropagation()
}
function two_2(e){
   this.style.width =' 250px';
   // e.stopImmediatePropagation() this one is use for the two event . after first event it's doesn't work ..
}
function three(e){
   this.style.backgroundColor = 'yellow'

} 

var divOne = document.getElementById('div1')
var divTwo = document.getElementById('div2')
var divThree = document.getElementById('div3')

divOne.addEventListener("click",one,false)
divTwo.addEventListener("click",two,false)
divThree.addEventListener("click",two_2,false)
divThree.addEventListener("click",three,false)


