import { Router } from "express"
import fs from 'fs'
import {getHello, getAllMovies,getMovieByID , getMovieByYear, postMovie, putMovieByID,deleteMovieByID} from "../controllers/movie.controller.js"

let router = new Router()

router.get('/heloo',getHello)
router.get('/',getAllMovies)
router.get('/:id',getMovieByID)
router.get('/:id/:year',getMovieByYear)
router.post('/',postMovie )
router.put('/:id', putMovieByID )
router.delete('/:id',deleteMovieByID)

export default router