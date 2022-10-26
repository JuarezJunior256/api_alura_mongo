import mongoose from "mongoose";

mongoose.connect("mongodb+srv://juarezdev:jua123@cluster0.u3qykxu.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;