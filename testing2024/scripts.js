

function validacion()
{
    var  nombre = document.getElementById("nombre").value;
    var  apellido = document.getElementById("apellido").value;
    const vehiculo = document.querySelectorAll('input[name="vehiculo"]');
    var email = document.getElementById( "email" ).value;
    var resultado;
    console.log("entro");
    //Validación de que el email este completo
    alert(nombre + " " + apellido);
    
    if (nombre == "" || apellido == "" || email =="") {
        alert ("Todos los campos son obligatorios");
        //return false;
    } else {
      //alert('Los datos ingresados son correctos');    
      //return true;
    }
      //console.log(validateEmail("javier@g,ail.com"));
    if(validateEmail())
        {
            alert('El mail esta correcto');                
        }
        else
        {
            alert('el mail no esta correcto');    
        }
      if(vehiculo.checked)
      {
          alert('Los datos ingresados son correctos');    
          }
          else
          {
              alert ('Debe seleccionar una opción en el campo Vehículo') ;  
          }
      
    
      return true;     
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function funcion1() {
    //Toma el valor del input con el id="num" y lo guarda en la variable x
    let x = document.getElementById("num").value.parseInt;
    // chequea el valor ingesado
    let text;
    if ( x < 1 || x > 10) // tengo tres condiciones con que una sea verdadera entra al if
    {     
      text = "Ingreso no valido";
    } 
    else 
    {
      text = "Ingreso valido";
    }
  
    x = x+1
    document.getElementById("demo").innerHTML = text;
    document.getElementById("res").innerHTML = x;// convierte a string para mostrarlo
  }