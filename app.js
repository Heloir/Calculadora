const inputnum = document.querySelector('.input')
const numbers = document.querySelectorAll('.numbers div')
const cleanoperation = document.querySelector('.clean')
const operators = document.querySelectorAll('.operators div')
const equal = document.querySelector('.equal')
const point = document.querySelector('.point')


numbers.forEach((number) =>{
    number.addEventListener('click', (event) =>{
      const numbervalue = event.target.innerText
      numbercontent = inputnum.value += numbervalue
    })
})

operators.forEach((operator) =>{
     operator.addEventListener('click', (event) =>{
         const operatorvalue = event.target.innerText
         operatorscontent = inputnum.value += operatorvalue
     })
})


equal.addEventListener('click', () =>{
     result = eval(inputnum.value)
     inputnum.value = result
})


function clean(e){
    return e.value = ' '
}


cleanoperation.addEventListener('click', () =>{
    clean(inputnum)
})