const usuario = {
  nombre: "Ana",
  rol: "Product Owner",
  sprintActivo: 2,
  presentarse: function () {
    console.log(`Hola, soy ${this.nombre} y mi rol es ${this.rol}`);
  },
};
usuario.presentarse();

// [camioneta, sedan]

//camioneta:{

//"clave";"valor"
//"clave";"llanta"
//"clave";"volante"
//"clave";"puerta"
//"clave";"balero"
//"clave";
//}

//sedan:{
//"clave":"llanta"
//"clave":"volante"
//"clave":"puerta"
//"clave":"balero"
//}


const proyectos = [
  { id: 1, titulo: "E-commerce Zapatos", equipo: "Amazon", calificacion: 9 },
  { id: 2, titulo: "Sistema de Inventario", equipo: "Oxxo", calificacion: 7 },
  { id: 3, titulo: "App de Películas", equipo: "Cinépolis", calificacion: 10 },
  { id: 4, titulo: "Portal de Helados", equipo: "Michoacana", calificacion: 8 },
];

console.log("Catálogo inicial de proyectos:");
console.table(proyectos);

const nombresDeEquipos = proyectos.map(function (proyecto) {
  return proyecto.equipo;
});

//. [1=>1]

console.log("Nombres de los equipos:", nombresDeEquipos);

const proyectosDestacados = proyectos.filter(function (proyecto) {
  return proyecto.calificacion >= 9;
});

console.log("Proyectos con calificación >= 9:");
console.table(proyectosDestacados);


//.map  mapear los arreys

const persona = {
ropa: "Blusa y jeans",
mascota: "3 Perros",
colorPelo: "Castaño obscuro",
colorZapato: "Beig con verde",
generoMusicalFavorito: "Pop",

caracteristicas: function (){
  console.log("Caracteristicas de Dafne")
  console.log("Ropa: ${this.ropa}")
  console.log("Mascotas ${this.mascotas}")
  console.log("Color de pelo ${this.colorPelo}")
  console.log("Color de zapato ${this.colorZapato}")
  console.log("Genero musical favorito ${this.generoMusicalFavorito}")
  
}
};
persona.caracteristicas();