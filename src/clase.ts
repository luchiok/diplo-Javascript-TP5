/* 
BLOQUES TEMATICOS: 
Tipado de funciones: define entrada y salida
Void y never: controlan funciones sin retorno útil
Parámetros opcionales: aumentan flexibilidad de uso
Clases: moldean estructuras con propiedades y métodos
Constructores: inicializan instancias correctamente
Modificadores: controlan visibilidad y acceso interno
Herencia: permite reutilizar y extender comportamientos
*/

/* 
Tipado de funciones
*/
/* 
function calcularIva (precio: number): number{
  return precio * 0.21
}

function mensajeCalcularIva (precio: number): string{
  return 'Tu iva es ' + precio * 0.21 
}

function mensajeCalcularIva2 (precio: number, esMensaje: boolean): string | number{
  let iva : number = precio * 0.21
  if(esMensaje){
    return 'Tu iva es ' + iva 
  }
  else{
    return iva
  }
} */

/* Void y never */
//Si funcion no tiene retorno, decimos que devuelve void
/* function mensajeCalcularIva (precio: number): void{
  console.log('Tu iva es ' + precio * 0.21)
} */

/* 
El never = Esta funcion no deberia terminar normalmente
*/

/*
function initServer (port: number): never {
  //Comienza mi servidor
  throw new Error("Error inesperado")
}

try{
  initServer(6000)
}
catch(error){
  console.log(error)
}
 */


/* 
Parámetros opcionales: aumentan flexibilidad de uso
*/

/* function mensajeCalcularIva2 (precio: number, esMensaje?: boolean): string | number{
  let iva : number = precio * 0.21
  if(esMensaje){
    return 'Tu iva es ' + iva 
  }
  else{
    return iva
  }
} 

mensajeCalcularIva2(100) */

/* function saludar (nombre: string, apellido?: string) : string {
  if(apellido){
    return `Hola ${nombre} ${apellido}`
  }
  else{
    return `Hola ${nombre}`
  }
} */

/* 
POO
Class y constructores, metodos
*/

/* class Persona {
  //Definimos las propiedades de la persona y tipamos
  nombre: string
  apellido: string
  edad: number

  constructor(nombre: string, apellido: string, edad: number){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  saludar ():void{
    console.log("Hola mi nombre es " + this.nombre + ' ' + this.apellido)
  }
} */

/* 
Las clases una vez definidas se pueden usar como un propio tipo de dato (Como las interfaces), es decir que dentro de nuestro programa ahora definimos que es una Persona y podemos utilizarlo 
*/

/* const persona_1 : Persona = new Persona('pepe', 'suarez', 43)

const personas : Persona[] = []

personas.push(persona_1) */

//Modificadores

/* class CuentaBancaria {
  public titular: string;
  private saldo: number
  constructor (titular: string, saldo: number){
    this.titular = titular
    this.saldo = saldo
  }

  private verSaldo (){
    console.log(this.saldo)
  }
}

const cuenta_bancaria_pepe = new CuentaBancaria('PEPE SUAREZ', 100)

console.log(cuenta_bancaria_pepe.titular)
cuenta_bancaria_pepe.titular = 'JUAN'
cuenta_bancaria_pepe.verSaldo() */

/* 
Herencia: permite reutilizar y extender comportamientos
*/

class Persona {
  nombre: string
  edad: number
  apellido: string
  constructor(nombre: string, edad: number, apellido: string){
    this.nombre = nombre
    this.edad = edad
    this.apellido = apellido
  }
}

class Empleado extends Persona {
  salario: number
  puesto: string
  constructor(
    nombre: string, 
    edad: number, 
    apellido: string, 
    salario: number, 
    puesto: string
  ){
    //Super es la invocacion del constructor de la clase padre
    //El orden de parametros que pasaremos a super debe ser el mismo que el orden de parametros de el constructor padre
    //La asignacion de nuevas propiedades se hace luego de super SIEMPRE
    super(nombre, edad, apellido)
    this.salario = salario
    this.puesto = puesto
  }
}

const pepe_empleado = new Empleado('Pepe', 40, 'Suarez', 5000, 'Progamador')
function saludar (persona: Persona){
  console.log('hola, me llamo ' + persona.nombre)
}

saludar(pepe_empleado)