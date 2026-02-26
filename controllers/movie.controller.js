import fs from 'fs'
import { readFile, writeFile} from '../utils/movies.file.js'

let getHello = (req, res)=>{

    res.send('hello world davron')
}



let getAllMovies = (req,res)=>{
    console.log(req.query)
    let movies = readFile()
    // if(req.query){
    //     movies = movies.filter(v=> v.isIntr == (req.query.isIntr == 'true')? true: false)
    // }
    res.status(200).json({
        status: "succes",
        message: "Get is working ;;/",
        data: movies
    })
} 


let getMovieByID = (req,res)=>{
    let id = +req.params.id
    let movies = readFile()
    let movie = movies[id-1]
    res.status(200).json({
        status: "succes",
        message: "Get byID is working",
        data: movie
    })
} 

let getMovieByYear =  (req,res)=>{
    let movies = readFile()
    movies = movies.filter(d => d.year == req.params.year)
    res.status(200).json({
        status: "succes",
        message: "Get byID is working",
        data: movies
    })
}

let postMovie = (req,res)=>{
    console.log(req.body)
    let movies = readFile()
    movies.push(req.body)
    writeFile(movies)
    res.status(201).json({
        status: "success",
        message: "Movies created",
        data: movies
    })
}
let putMovieByID = (req,res)=>{
    let id = +req.params.id
    let movies = readFile()
    movies[id-1] = req.body
    writeFile(movies)
    res.status(201).json({
        status: "success",
        message: "Movies updated",
        data: movies
    })
}
let deleteMovieByID = (req,res)=>{
    let id = (+req.params.id)
    let movies = JSON.parse(fs.readFileSync(process.env.FILE_NAME, 'utf8'))
    movies = movies.filter(m => m.id != id)
    writeFile(movies)
    res.status(200).json({
        status: "success",
        message: "Movie deleted",
        data: movies
    })
}
 


export { getHello,getAllMovies, getMovieByID, getMovieByYear, postMovie, putMovieByID,deleteMovieByID}