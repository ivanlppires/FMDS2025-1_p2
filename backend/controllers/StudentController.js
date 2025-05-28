/* CRUD STUDENT CONTROLLER */

import { connect } from 'bun'
import connection from '../config/db'

export const create = (req, res) => {
    const { name, email } = req.body;
    const sql = "INSERT INTO students (name, email) VALUES (?, ?)";
    connection.query(sql, [name, email], (error, result) => {
        if(error) res.status(500).send(error);
        else res.status(201).send({ message: 'Estudante criado com sucesso', id: result.insertId });
    });
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
