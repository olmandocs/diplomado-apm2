var info = document.getElementById('acceleration-info');//llama el div de info

console.log('Escuchando un evento del tipo click');

function getAcceleration(){//función para obtener la aceleración
    console.log('getAcceleration -> Ok');
    info.innerHTML = '';
    // Obteniendo la orientacion del dispositivo
    alert('GetAcceleration Ok!');
    navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onAccelerationError);//llama al metodo del plugin(metodo exito, metodo fallo)
}

function onAccelerationSuccess(acceleration){//exito escribe la aceleración
    var date = new Date(acceleration.timestamp);
    info.innerHTML = '<b>Aceleración en X: ' + acceleration.x + '<br />' +
                     '<b>Aceleración en Y: ' + acceleration.y + '<br />' +
                    '<b>Aceleración en Z: ' + acceleration.z + '<br />' +
                     '<b>timestamp: ' + date.toLocaleString() + '<br />';
}

function onAccelerationError(){//error muestra error en el acelerometro
    console.log('Error en el acelerometro');
    alert('Error en el acelerometro');
}