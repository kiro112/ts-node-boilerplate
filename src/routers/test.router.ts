import { Router } from 'express';
import * as testController from '../controllers/test.controller';

const testRouter = Router();

testRouter.get('/', testController.testEndpoint);

export default testRouter;
