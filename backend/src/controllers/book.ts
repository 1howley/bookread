import { db } from './../db'
import { Request, Response } from "express";

export const getUsers = (_:Request, res:Response) => {

    const q = "SELECT * FROM book";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })

}