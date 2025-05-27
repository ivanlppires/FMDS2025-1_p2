/* LOG MIDDLEWARE */
import connection from '../config/db'

const log = (req, res, next) => {
    // o objetivo é registrar no banco todas requisicoes
    
    const path  = req.path
    const method = req.method
    const sql = `INSERT INTO log (path, method) VALUES ('${path}', '${method}')`
    connection.query(sql)
    next();
}

export default log;