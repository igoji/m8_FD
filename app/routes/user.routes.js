

    app.get('/api/user', (req, res) =>{
        const usuarios = userController.findAll()
        return res.json({todosUsuarios: usuarios})
    })
