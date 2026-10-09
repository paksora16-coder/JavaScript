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


let pokemon1={
  name: "Squirtle" ,
  type: "Agua" ,
  number: 4 ,
  description: "Tortuga de agua que lanza chorros de agua por la boca."
};



let pokemon2={
  name: "Warturtle" ,
  type: "Agua" ,
  number: 5 ,
  description: "Tortuga de agua más grande que lanza chorros de agua por la boca."
};

let numbers = [1,2,"3",4,5];

let pokedex = [pokemon1, pokemon2];

let coche={
   name: "BMW Serie 3" , 
    motor: "V6" ,
    description: "Reyes del drift amateur." 
};

let cochecitosTuneados = [
  {
    name: "BMW Serie 3",
    motor: "V6",
    description: "Reyes del drift amateur."
  },
  {
    name: "Nissan 350Z",
    motor: "V6",
    description: "Buen torque en bajas revoluciones."
  },
  {
    name: "Mazda MX-5 Miata",
    motor: "V4",
    description: "Económico de mantener y ligero."
  },
  {
    name: "Nissan Skyline",
    motor: "Inline-6",
    description: "Clásicos y leyendas del drift."
  },
  {
    name: "Mitsubishi Lancer Evolution",
    motor: "4G63T",
    description: "Famoso por su sistema AYC y tracción total."
  }
];


const nuevoCoche = {
  name: "Toyota Supra",
  motor: "2JZ",
  description: "Leyenda del drift y la velocidad."
};
let existe = false;

cochecitosTuneados.forEach((coche) => {
  if (coche.name.toLowerCase() === nuevoCoche.name.toLowerCase()) {
    existe = true;
    console.log("El coche ya existe en la lista.");
  }
});

if (!existe) {
  cochecitosTuneados.push(nuevoCoche);
  console.log("El coche ha sido agregado a la lista.");
}


const cochesV6 = cochecitosTuneados.filter((coche) => coche.motor === "V6");
console.log("Coches con motor V6:", cochesV6);


const nombresCoches = cochecitosTuneados.map((coche) => coche.name);
console.log("Títulos/Nombres de coches:", nombresCoches);


const cocheBuscado = cochecitosTuneados.find((coche) => coche.name === "Nissan 350Z");
console.log("Coche encontrado:", cocheBuscado);


function crearCoche(coche) {
  cochecitosTuneados.push(coche);
  console.log(`Coche "${coche.name}" agregado con éxito.`);
}


function leerCoches() {
  console.log("--- LISTA DE COCHES ---");
  cochecitosTuneados.forEach((coche, index) => {
    console.log(`${index + 1}. ${coche.name} | Motor: ${coche.motor} | Desc: ${coche.description}`);
  });
}


function actualizarCoche(nombre, cambios) {
  const cocheEncontrado = cochecitosTuneados.find(
    (coche) => coche.name.toLowerCase() === nombre.toLowerCase()
  );

  if (cocheEncontrado) {
    Object.assign(cocheEncontrado, cambios);
    console.log(`Coche "${nombre}" actualizado correctamente.`);
  } else {
    console.log(`No se encontró el coche "${nombre}".`);
  }
}

function borrarCoche(nombre) {
  cochecitosTuneados = cochecitosTuneados.filter(
    (coche) => coche.name.toLowerCase() !== nombre.toLowerCase()
  );
  console.log(`Coche "${nombre}" eliminado de la lista.`);
}


console.log("\n=== DEMOSTRACIÓN CRUD ===");
console.log("ESTADO INICIAL:", cochecitosTuneados);

console.log("\n--- 1. CREAR ---");
crearCoche({
  name: "Nissan 370Z",
  motor: "VQ37VHR",
  description: "Tracción trasera ideal para circuito."
});

console.log("\n--- 2. LEER ---");
leerCoches();

console.log("\n--- 3. ACTUALIZAR ---");
actualizarCoche("Nissan 350Z", { motor: "V6 Twin Turbo", description: "Modificado para pistas." });

console.log("\n--- 4. BORRAR ---");
borrarCoche("Mazda MX-5 Miata");

console.log("\nESTADO FINAL:", cochecitosTuneados);