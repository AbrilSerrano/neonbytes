//Importar Express
import express from "express"

//Crear la app
const app = express()
app.listen (3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
app.get('/', (req, res) => {
    res.send('Esta va a ser mi pinche pagina web, la mejor del mundo mundial');
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