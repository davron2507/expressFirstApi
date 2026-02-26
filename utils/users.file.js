import fs from 'fs'

const readFileUsers = ()=>{
    let users = JSON.parse(fs.readFileSync(process.env.USERS_FILE_NAME, 'utf-8'))
    return users
}

const writeFileUsers = (users)=>{
    fs.writeFileSync(process.env.USERS_FILE_NAME, JSON.stringify(users,null,4))
}


export {readFileUsers, writeFileUsers} 