import fs from 'fs'

const readFile = ()=>{
    let movies = JSON.parse(fs.readFileSync(process.env.FILE_NAME, 'utf-8'))
    return movies
}

const writeFile = (movies)=>{
    fs.writeFileSync(process.env.FILE_NAME, JSON.stringify(movies,null,4))
}


export {readFile, writeFile} 