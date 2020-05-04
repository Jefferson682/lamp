function onLamp(){
    var lamp = document.getElementById('lamp');  
    lamp.innerHTML = `<img src="img/lamp-on.jpg" onclick="onOff()">`   
}

function offLamp(){
    var lamp = document.getElementById('lamp');
    
    lamp.innerHTML = `<img src="img/lamp-off.jpg" onclick="onOff()">`   
}