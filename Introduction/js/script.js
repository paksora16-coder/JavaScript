const name = "Sora Pak";

let age = 21; //Comentario chido 

age = 22; //Variable modificada

const proyectoFavorito = "Tunning"

console.log(`Tu nombre es  ${name}`);
console.log(`Tu edad es ${age}`);
console.log(`Mi proyecto favorito es  ${proyectoFavorito}`);

console.error("Algo salió mal al conectar con el servidor.");

function misionInstagram(params) {
    console.log(params)
}
misionInstagram(name)

console.log("\n--- EJERCICIO CONDICIONALES ---");

if (age === 18) {
  console.log("Tienes exactamente 18 años, ¡acabas de alcanzar la mayoría de edad!");
} else if (age > 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

if (age >= 18 && proyectoFavorito !== "") {
  console.log(`Validación cumplida: Es mayor o igual a 18 años y su proyecto actual es: ${proyectoFavorito}`);
}



console.log("\n--- EJERCICIO CICLOS ---");

console.log("1. Cuenta del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("\n2. Números pares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("\n3. Recorrido de herramientas favoritas:");
const herramientas = ["Vinil (wrap)", "Pestañadora de salpicaderas", "Remachadora de tuercas roscadas", "Taladro inalámbrico y brocas escalonadas"];
for (let i = 0; i < herramientas.length; i++) {
  console.log(`Herramienta ${i + 1}: ${herramientas[i]}`);
}

console.log("\n4. Cuenta regresiva de 5 a 1:");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}