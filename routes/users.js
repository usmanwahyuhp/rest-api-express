import express from 'express';
import { v4 as uuidv4, v4 } from 'uuid';

const router = express.Router();

const users = [];

router.get('/', ( req, res ) => {
    res.send(users);
});

// Add functionality to adding use to database using router post
router.post('/', ( req, res ) => {
    const user = req.body;
    // const userId = uuidv4();

    // // using spread operator to add id into user data
    // const userWithId = { ...user, id: userId };

    // users.push(userWithId);

    // refactor
    users.push({ ...user, id: uuidv4() });
    
    res.send(`User with name ${user.firstName} added to the database`);
});

export default router;