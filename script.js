function Sumar() {
   var num1 = document.getElementById("N1").value;
   var num2 = document.getElementById("N2").value;
   var resultado = parseInt(num1) + parseInt(num2);
   alert("La suma de los numeros es " + resultado);

}

function Restar() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1) - parseInt(num2);
    alert("La resta de los numeros es " + resultado);
}

function Multiplicar() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1) * parseInt(num2);
    alert("La multiplicacion de los numeros es " + resultado);
 
}

function Dividir() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1) / parseInt(num2);
    alert("La division de los numeros es " + resultado);
 
}

function ver() {

  var dato = document.getElementById("Materia").value;
  switch (dato) {
      case "Programacion":
          alert("Usted ha seleccionado Programacion");
          break;
      case "Soporte TI":
          alert("Usted ha seleccionado Soporte TI");
          break;
      case "Diseño de Software":
          alert("Usted ha seleccionado Diseño de Software");
          break;
      case "TICS":
          alert("Usted ha seleccionado TICS");
          break;        
      default:
          break;
    }


}


function ValidarEdad () {

    var Edad = document.getElementById("Edad").value;
    if (Edad>=18) {
        alert("Eres mayor de edad");

    } else {
        alert("Eres menor de edad");
        
    }




}