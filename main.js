function switchOnOff($event){
    var element = event.target
    if(element.innerHTML == "ON")
    {
        element.innerHTML = "OFF"
        element.classList.remove("btn-success")
        element.classList.add("btn-danger")
    }
    else{
        element.innerHTML = "ON"
        element.classList.add("btn-success")
        element.classList.remove("btn-danger")
    }
}

var temperature = document.getElementById("tempeature");
var light = document.getElementById("light");
var humidity = document.getElementById("humidity");

var changeFunc = ($event, type) => {
    var element = event.target;
    var temper = Number(element.value);
    console.log(type) 
    if(type == 1){
        if(temper > 37 ){
            temperature.style.backgroundColor = "red";
        }else if(temper <= 11 && temper >= 37){
            temperature.style.backgroundColor = "blue";
        }else{
            temperature.style.backgroundColor = "grey";
        }
    }else if(type == 2){
        if(temper > 50){
            humidity.style.backgroundColor = "red";
        }else if(temper <= 50 && temper >= 30){
            humidity.style.backgroundColor = "blue";
        }else{
            humidity.style.backgroundColor = "grey";
        }
    }else{
        if(temper > 50){
            light.style.backgroundColor = "red";
        }else if(temper <= 50 && temper >= 30){
            light.style.backgroundColor = "blue";
        }else{
            light.style.backgroundColor = "grey";
        } 
    }

}

