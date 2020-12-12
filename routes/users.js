import express from 'express';

const router = express.Router();

const users = [
    {
        firstName : "Muhammad",
        lastName : "Usman",
        age : 25
    }
]

router.get('/', ( req, res ) => {
    res.send(users);
});

export default router;