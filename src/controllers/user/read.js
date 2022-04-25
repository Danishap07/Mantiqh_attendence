import prisma from "../../utils/prisma";

export default
     async function handler(req, res) {
        try {
            const results = await prisma.users.findMany();
            return res.status(200).json(results);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    const userById = async function User(req,res) {
        try {
            const result = await prisma.users.findUnique({
                where: {
                    email: req.body.email
                }
            })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json({ msg: "no user found"})
        }
    }
