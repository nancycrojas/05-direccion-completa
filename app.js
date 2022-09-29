//Dirección completa

//Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".


const calle = prompt("Por favor ingresa tu calle");
const numero = prompt("Por favor ingresa tu número");
const departamento = prompt("Por favor ingresa tu departamento");
const codigoPostal = prompt("Por favor ingresa tu código postal");
const ciudad = prompt("Por favor ingresa tu ciudad");
const pais = prompt("Por favor ingresa tu país");
//alert("La dirección que ha ingresado es: " + calle + " " + numero + ", " + departamento + ", " + codigoPostal + ", " + ciudad + ", " + pais + ".");

//Template strings
alert(`La dirección que ha ingresado es: ${calle} ${numero}, ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}.`)