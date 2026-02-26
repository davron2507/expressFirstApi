import fs from 'fs'
import { readFileUsers, writeFileUsers } from "../utils/users.file.js"


let registerController = (req,res,next)=>{
    try {
        let {username, password, confirmPassword, email} = req.body
        let users = readFileUsers()
        let id = users.length + 1
        if (password !==confirmPassword) throw new Error("passwords not matched")

        let user = {
            id,
            username: username,
            password: password,
            email: email
        }
        users.push(user)
        writeFileUsers(users)

        delete user.password
        res.status(200).json({
            status: "succes",
            message: "register is working",
            data: user
        })
    } catch (error) {
        throw error
        
    }
}

export{registerController}