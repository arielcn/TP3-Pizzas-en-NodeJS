import config from './dbconfig.js';
import sql from 'mssql';

export class PizzaService {
    static getAll = async () => {
        let pool = await sql.connect(config);
        let result = await pool.request().query("SELECT * FROM PIZZAS");
        return result.recordsets[0];
    }

    static getById = async (id) => {
        let devol = null;
        console.log('Estoy en: PizzaService.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM PIZZAS WHERE ID = @pId');
            devol = result.recordsets[0][0];
        }
        catch (error) {
            console.log(error);
        }
        return devol;
    }

    static insert = async (pizza) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.NVarChar(50), pizza.Nombre)
                .input('pLibreGluten', sql.Bit, pizza.LibreGluten)
                .input('pImporte', sql.Float, pizza.Importe)
                .input('pDescripcion', sql.NVarChar(200), pizza.Descripcion)
                .query('INSERT INTO PIZZA (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)');
        } catch (error) {
            console.log(error);
        }
    }

    static update = async (pizza) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
        } catch (error) {
            console.log(error);
        }
    }

    static deleteById = async (id) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
        } catch (error) {
            console.log(error)
        }
    }
}