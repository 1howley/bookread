import { db } from './../db'
import { Request, Response } from "express";

export const getUsers = (_:Request, res:Response) => {

    const q = "SELECT * FROM book";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })

}

export const addBook = (req:Request, res:Response) => {

    const q = "INSERT  INTO book(title, resume, evaluation, opinion, image_url) values (?)";

    const values = [
        req.body.title,
        req.body.resume,
        req.body.evaluation,
        req.body.opinion,
        req.body.image_url,
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("> Book Registered")
    })

}