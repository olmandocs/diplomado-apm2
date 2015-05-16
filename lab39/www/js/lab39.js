console.log('after onDeviceReady');

var data_node = document.getElementById('acceleration-info');//trae div para mostrar info

function onAccelerationSuccess(acceleration){//método para succes

    console.log('onAccelerationSuccess ok');

    data_node.innerHTML = '<b>X:</b> ' + acceleration.x + '<br />' +
                          '<b>Y:</b> ' + acceleration.y + '<br />' +
                          '<b>Z:</b> ' + acceleration.z + '<br />';
}

function onAccelerationError(){// método para error
    console.log('onAccelerationError ok');
}

var activateAccelerometer = function(){//método principal

    console.log('activateAccelerometer ok');

    var options = {frequency: 500};// JSON setea las opciones, frequency=cada cuanto tiempo valida la aceleración milisegundos (50-200)

    var watchID = navigator.accelerometer.watchAcceleration(onAccelerationSuccess, onAccelerationError, options);
}