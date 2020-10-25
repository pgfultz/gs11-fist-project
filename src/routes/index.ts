import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World!!!' }));

routes.get('/users', (req, res) => res.json({ message: 'Users' }));

export default routes;
