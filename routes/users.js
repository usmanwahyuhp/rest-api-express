import express from 'express';

const router = express.Router();

const users = [
    {
        firstName : "Muhammad",
        lastName : "Usman",
        age : 25
    },
    {
        firstName : "Wahyu",
        lastName : "Hidayat",
        age : 24
    }
]

router.get('/', ( req, res ) => {
    res.send(users);
});

// Add functionality to adding use to database using router post
router.post('/', ( req, res ) => {
    const user = req.body;

    users.push(user);
    
    res.send("POST routes reached");
});

export default router;