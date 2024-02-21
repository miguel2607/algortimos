let edad = 90
edad >= 18? console.log("es mayor de edad") : console.log("es menor de edad")



let numero =-3
numero > 0? console.log ("numero positivo") : console.log("numero negativo")



let ocupacioncancha =true
let nombrecancha = "bernabeu"

let mensaje = ocupacioncancha ? `la cancha llamada ${nombrecancha} esta ocupada"` : 
`la cancha llamada ${nombrecancha} esta disponible"`
console.log(mensaje) 


const email = "marodriguez_141@cue.edu.co"
const contraseña = "23456789"
email == "marodriguez_141@cue.edu.co" && contraseña == "23456789"?
      console.log(`señor usuario con el correo ${email} Bienvenido al sistema`) : 
      console.log (`el correo ${email} y la contraseña digitada es incorrecta`)



      let colorsemaforo= "amarillo"
      colorsemaforo == "verde"? console.log(`el semaforo esta en ${colorsemaforo} puede seguir`) : 
      colorsemaforo == "rojo" ? console.log (`el semaforo esta en ${colorsemaforo}debe parar`)  : 
      colorsemaforo == "amarillo" ? console.log("aliste motores") :
      console.log(`muestra color ${colorsemaforo}, esta dañado`)



      let temperatura = 40
      if (temperatura >= 40){
        console.log(`usted tiene fiebre, su temperatura  es mayor a ${temperatura} grados`)
      }


      let tipocliente = "normal"
      if (tipocliente == "normal"){
        console.log(`va a ser atendido en el modulo 1, por ser cliente ${tipocliente}`)
      }else if(tipocliente == "preferencial") {
        console.log ("esta habilitado en los modulos 2 y 3 para su atencion")

      }else{ 
        console.log("usted no es cliente del bamco, por favor dirijase al modulo 4")

      }
      


      let emailbasedatos = "marodriguez_141@cue.edu.co"
      let clavebasededatos= "23456"
      let emailingresado = "ma.rodriguez_142@cue.edu.co"
      let claveingresada = "23456"
      let nombredeusuario ="miguel"
      if (emailbasedatos == emailingresado && clavebasededatos == claveingresada) {
        console.log(`${nombredeusuario} bienvenido!, seleccione opciones del sistema`)

      }else{
        console.log(`acceso denegado`)
      }


      let derecha = true
      let izquierda = false
      let arribe = false
      let abajo= false

      if(derecha){
        console.log("robot moviendose haciea la derecha")
      }else if (izquiera){
        console.log("robot moviendose hacia la izquiera")
      }else if(arriba){
        console.log("robot moviendose hacia arriba")
      }else if (abajo){
        console.log("robot moviendose hacia abajo")

      }else{
        console.log("movimiento extraño")
      }

      let encendido =true
      let velocidad = 32
      if (encendido){
        console.log (`su carro esta encendido`)
        if(velocidad == 0){
            console.log(`carro freno`)
        }else if (velocidad > 0 && velocidad <= 100){
            console.log(`carro en marcha`)
        }else{
            console.log(`evitese un accidente`)
        }
      }else{
        console.log(`encienda su vehiculo`)
      }

      let dia = "miercoles"
      let clase = "algoritmos"
      if(dia == "miercoles"){
        console.log(`la clase de hoy es ${clase}`)
      }