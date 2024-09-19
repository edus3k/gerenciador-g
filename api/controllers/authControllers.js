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
    const { email } = req.body
    
    try {

        if(await userModel.findOne({ email })){
            return res.status(400).send({msg: 'Email já registrado.'})
        }

        const user = await userModel.create(req.body);
        user.password = undefined
        
        return res.status(200).send({
            msg: "Registrado com sucesso.",
            user: user
        })
    } catch (error) {
        return res.status(400).send({
            msg: "Erro ao registar-se.",    
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