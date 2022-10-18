import { Alert } from "react-native";
import { DB } from "./database";
import { DB_Sql } from "./DB";


//all request

export const CreateTables =async () =>{
    DB_Sql.CreateTableUser;
    DB_Sql.CreateTableNotes;
}

export const LoginIsVailable = async (login) =>{
    const isValid = await DB_Sql.Loginavailable(login);
    return await isValid
}

export const AddUser = async (login, password) => {
    const UserIsValid = await DB_Sql.CreateUser(login, password);
    return await UserIsValid
}

export const CreatingTable = async () =>{
    await DB.init();
    //await DB.CreateTableNotes();
}

export const CheckUser = async (login, password) => {
    const post = await DB_Sql.GetUser(login, password);
    return await post
}

export const DeleteInfoTable = async(tableDelete) =>{
    await DB.DeleteInfoTableUsers(tableDelete);
}

export const CheckuserBeforeCreateAccount = async (login) =>{
    const post = await DB.getLoginUser(login)
    Alert.alert(post.length)
    //return await post.length
}

export const CreateUser = async (login, password) => {
    const post = await DB.CreateUser(login, password)
    return await post
}

export const CreatTableUser = async() =>{
    DB.CreateTable();
}


