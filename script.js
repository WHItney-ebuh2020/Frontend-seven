// primitives - 1222, 1.222, 'asasss', true

// oop - object oriented programming

// programming paradigms - a type/approach of programming

// functional programming

// var michael  = {
//   sum: function (a, b){
//     return a + b;
//   }
// }

// michael.sum(a, b);

// key - magic, value - magic is a spiritual thing al

// var person = {
//   name: 'Whitney',
//   surname: 'Ebuh',
//   age: 22,
//   isSingle: false,
//   walk: function (){
//     return this.name;
//   }
// };

// person.walk()

//   person['surname']


// functions, objects, arrays

// function sum (a, b){
//   return a + b;
// }

// function getMeNewNumbers(){
//   return sum(1, 5);
// }

// null, undefined

// var arr = [1, 2, 3, 4, 5];

// var newArr = arr.map(function (value, index){
//   console.log({value});

//   return value * 2;
// })

// console.log({newArr})
// console.log(newArr, 'this is new arr')

// [2, 4, 6, 8, 10]


// DOM - Document Object Model

const links = document.querySelectorAll(".bigcontainerli");

// links

// truthy value = !falsy values

// falsy values - 0, '', false, null, undefined 

links.forEach(
  link => {
    // console.log({link});
    
  const sibling = link.nextElementSibling;
  
  
  if (sibling) {
    if (sibling.nodeName === "DIV") { 
      link.addEventListener("click", () => {
        sibling.childNodes[1].classList.toggle("open");
      });
    }
     // toggle - add if not there or remove if there
  }
});
