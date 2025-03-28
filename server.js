const express = require("express")
const app = express()
app.use(express.json())

const pedidos = []

app.get('/pedidos', (req, res) => {
    res.send(pedidos)
})

app.post('/pedidos', (req, res) => {
    pedidos.push(req.body)
    return res.json(pedidos)
})

app.listen(3333, () => {
    console.log("Servidor on")
  })

app.delete('/pedidos/:id', async(req, res) => {
    const {id} = req.params
    console.log(id)

    return res.json({mensage: "Removido com sucesso"})
})

app.put('pedidos/:id', (req, res) => {
    const {id} = req.params
    console.log(id)

    return res.json({mensage: "Atualizado com sucesso"})
})
