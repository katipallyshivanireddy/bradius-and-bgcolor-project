let input=document.getElementById("color")
function colorchange(z){
    console.log(z);
    if(z.key==="enter"){
        document.body.style.background=linear-gradient`(${input.value})`
    }
}
let input2=document.getElementById("bRadius")
let image=document.querySelector("img")
function Radiuschange(z){
    console.log(z)
    if(z.key==="enter"){
        image.style.borderRadius=`${input2.vaalue}px`
    }
}