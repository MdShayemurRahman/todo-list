import Todo from "../Database/model.js";

export const getAll = async (req, res) => {
  try {
    let todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const todos = await Todo.findById(id);
    res.json(todos);
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (req, res) => {
  const addData = req.body;
  const newData = new Todo(addData);

  try {
    await newData.save();
    res.send("successfully stored data");
  } catch (error) {
    console.error(error);
  }
};

export const updateData = async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  const updatedData = new Todo(data);

  try {
    const update = await Todo.updateOne({ _id }, updatedData);
    res.json(update);
  } catch (error) {
    console.error(error);
  }
};

export const deleteData = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.json("data deleted successfully!");
  } catch (error) {
    console.error(error);
  }
};
