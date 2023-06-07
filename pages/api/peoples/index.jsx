import { db } from "../database/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM peoples");
    console.log(results)
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { dni, name, last_name } = req.body;
    
    if(!dni || !name || !last_name){
      return res.status(422).json({ message : "Los campos son requeridos"});
    }

    const result = await db.query("INSERT INTO peoples SET ?", {
      dni,
      name,
      last_name,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
