
function bmi(){
    let height = document.getElementById("height")
    let weight = document.getElementById("weight")
    let bmi = weight.value / (height.value * height.value)
    let result = document.getElementById("result")
    if( bmi < 18.5){
        result.innerText = "You are lean"
    }else if ( bmi > 18.5  && bmi < 24.9 ){
        result.innerText = "You are healthy"
    }else if(bmi>25  && bmi < 29.9){
        result.innerText = "You are Fat"
    }else{
        result.innerText = "You are Huge"
    }
    height.value = ""
    weight.value = ""


}