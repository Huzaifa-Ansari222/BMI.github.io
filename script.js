const form=document.querySelector('form')

//stopform evetn
form.addEventListener('submit',function(e){
    e.preventDefault()

const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const results =document.querySelector('#results')
const results2 =document.querySelectorAll('#results2')


if(height==='' || height<0 || isNaN(height)){
    results.innerHTML="Invaild height!"
}
else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML="Invaild weight!"
}
else{
const bmi=(weight/((height*height)/10000)).toFixed(2)
//show result
results.innerHTML=`<span>${bmi}</span>`
}


});