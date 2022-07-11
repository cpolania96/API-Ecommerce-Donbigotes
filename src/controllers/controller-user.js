import User from "../../db/models/user.js"
import generateToken from "../../db/generateToken.js"
import "dotenv"

const user = {} 

user.registrerUser = async (req, res) => {
    const { name, email, password, pic } = await req.body
    
    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Por favor ingrese todos los campos")
    }
    const userExist = await User.findOne({email})
    if(userExist) {
        res.status(400)
        throw new Error("El correo ya esta registrado")
    }
    const user = await User.create({
        name,
        email,
        password,
        pic
    })
    if(user) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Failed to create the user')
    }
}
user.authUser = async (req, res) => { }

export default user






























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































