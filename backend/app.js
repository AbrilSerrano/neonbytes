//Importar Express
import express from "express"

//Crear la app
const app = express()
app.listen (3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
app.get('/', (req, res) => {
    res.send('¡Hola, dedesde el back')
})  

// Prueba creando usuarios y mostrandolos
const usuarios =[
        {
            id: 1,
            nombre: "Abril",
            apellido: "Serrano",
            edad: 24
        },
        {
            id: 2,
            nombre: "Juan",
            apellido: "Perez",
            edad: 30
        }
    ]
app.get("/usuarios", (req, res) => {    
res.json(usuarios)
})

app.get("/usuarios/:id", (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const usuario = usuarios.find(user => user.id === userId);
    console.log(usuario);
})

