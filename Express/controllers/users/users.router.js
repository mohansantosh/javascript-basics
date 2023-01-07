const express = require("express");
const router = express.Router();
const User = require("../../models/index")["User"]; 
const jwt = require('jsonwebtoken');
const passport = require("passport");

var bcrypt = require('bcrypt');
/** 
 * @openapi 
 * /user/login: 
 *   post: 
 *     tags: 
 *      - User
 *     summary: Login user
 *     description: Login User
 *     requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/LoginUser'
 *     responses:  
 *       200: 
 *         description: Login successful  
 *   
 */  
router.post('/login', async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if(!user) {
            res.send(401).send({
                error: "Login Failed"
            });
        } else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({id: user.id, role: user.role}, 'your_jwt_secret');
                res.status(200).send({
                    message: "Login Successful",
                    token
                });
            } else {
                res.send(401).send({
                    error: "Login Failed"
                });
            }
        }
    } catch(error) {
        console.log(error)
        res.status(500).send({
            error: error.errors
        })

    }
});

/** 
 * @openapi 
 * /user/signup: 
 *   post: 
 *     tags: 
 *      - User
 *     summary: User signup
 *     description: User signup
 *     requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/LoginUser'
 *     responses:  
 *       200: 
 *         description: User created
 *   
 */  
router.post('/signup', async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if(user) {
            res.status(400).send({
                error: "User already exits"
            });
        } else {
            let user = await User.create({
                username: req.body.username,
                password: req.body.password
            })
            res.status(200).send({
                username: user.username,
                message: "User created successfully"
            });
        }
    } catch(error) {
        res.status(500).send({
            error: error.errors
        });
    }
});


router.get("/", async (request, response) => {
    response.status(200).send(request.user);
})

module.exports = router;