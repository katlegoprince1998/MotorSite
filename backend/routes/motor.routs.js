import express from "express";
import { getMotorById, getAllMotors, deleteMotor, createMotor, updateMotor } from '../controllers/motor.controller.js';

const router = express.Router();


router.get('/:id', getMotorById);
router.get('/', getAllMotors);
router.delete('/:id', deleteMotor);
router.post('/', createMotor);
router.put('/:id', updateMotor);


export default router;