input.addEventListener('keydown',function(event){
console.log(event.key) //which key was pressed
})
if(event.key==="Enter"){
    console.log("Enter was pressed")
}

parent.addEventListener('click',fn, true) // capturing
parent.addEventListener('click', fn , false)// bubbling