/* CRUD STUDENT CONTROLLER */

import { connect } from 'bun'
import connection from '../config/db'

export const create = (req, res) => {
    res.send('Estudante cadastrado')
}

export const readOne = (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM students WHERE id = " + id;
    connection.query(sql, (error, rows) => {
        if(error) res.status(500).send(error);
        else res.status(200).send(rows);
    });
}
export const readAll = (req, res) => {
    const sql = "SELECT * FROM students"
    connection.query(sql, (error, rows) => {
        if(error) res.status(500).send(error);
        else res.status(200).send(rows)
    })
}

export const update = (req, res) => {
    const id = req.params.id
    res.send('Atualizar o estudante ' + id)
}
export const remove = (req, res) => {
    const id = req.params.id
    res.send('Remover o  estudante ' + id)

}
