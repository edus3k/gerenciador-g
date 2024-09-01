import express from 'express';
import userModel from '../models/userSchema.js';

const userRoute = express.Router();

userRoute.get('/user', async(req, res)=>{
    try {
        const users = await userModel.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

userRoute.post('/login', async(req, res)=>{

});

userRoute.post('/register', async(req, res)=>{
    const {name, email, password, cod} = req.body
    try {
        const user = await userModel.create(req.body);
        return res.status(200).send({user})
    } catch (error) {
        return res.status(400).send({
            msg: "Registation failed",    
            error: error
        })
    }
});

userRoute.post('/recover', async(req, res)=>{

});

userRoute.delete('/delete/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id);
    
        if (!deletedUser) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
        }
    
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

//module.exports =  app => app.user('/auth', userRoute);

export default userRoute;