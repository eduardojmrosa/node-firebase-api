import express, { json } from "express";
import db from "../src/database/firebase.js";
import firstCharUpperCase from "../src/utils/firstCharUpperCase.js";

const app = express();
app.use(json());
//Propriedades da requisição
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  next();
});

//Cria em uma coleção um documento, pode também adicionar uma nova coleção
app.post("/users", async (req, res) => {
  try {
    await db.collection("users").add(req.body);
    res.status(201).send("Criado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

///Atualiza, em uma coleção, um documento específico
app.patch("/update/:collection/:id", async (req, res) => {
  try {
    const collection = req.params.collection;
    const collectionRef =
      collection.charAt(0).toUpperCase() + collection.slice(1);
    const docId = req.params.id;
    db.collection(collectionRef).doc(docId).update(req.body);
    res.status(201).send("Atualizado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Busca uma lista de documentos de uma coleção colocando id em cada documento
app.get("/users", async (req, res) => {
  try {
    const users = db.collection("Users");
    const snapshot = await users.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    console.log(snapshot.docs);
    res.send(list);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Busca um documento, em uma coleção, por id
app.get("/:collection/:id", async (req, res) => {
  try {
    const collection = req.params.collection;
    const docId = req.params.id;
    const snapshop = await db
      .collection(firstCharUpperCase(collection))
      .doc(docId)
      .get();
    if (!snapshop.exists) {
      return res.status(400).send("Não existe um documento com esse ID");
    }
    res.status(201).json(snapshop.data());
  } catch (error) {
    res.status(500).send(error.message);
  }
});
const port = 8080;
app.listen(port, () => {
  console.log(`Ouvindo porta: ${port}`);
});
