import express from 'express'
import { createRefferal } from '../controller/ReferForm.controller.js'

const router = express.Router()

router.post('/', createRefferal)

export default router