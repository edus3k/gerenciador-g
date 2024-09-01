import mongoose from "mongoose";

const URL = "mongodb+srv://root:1234@tcc.vbsdu.mongodb.net/?retryWrites=true&w=majority&appName=tcc";
const connectionParams = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

function mongooseAt (){
    mongoose
    .connect(URL, connectionParams)
    .then(()=>{
        console.log('Conectado ao MongoDB');
    })
    .catch((err)=>{
        console.error('Erro ao conectar ao MongoDB:', err)
    })
}

export default mongooseAt;