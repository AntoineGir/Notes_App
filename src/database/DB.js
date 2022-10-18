import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

const db = SQLite.openDatabase("db_NotesApp");


export class DB_Sql{

    static CreateTableUser = async () => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY NOT NULL, login TEXT NOT NULL, password TEXT NOT NULL)',
                [],
                (sqlTx, res) =>{
                    Alert.alert("Table créé");
                },
                error => {
                    Alert.alert("error :" + error.message);
                }
            )
        })
    }

    static CreateTableNotes = async () => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Notes (id INTEGER PRIMARY KEY NOT NULL,idUser INTEGER NOT NULL, name TEXT NOT NULL, IconId INTEGER NOT NULL, FOREIGN KEY(idUser) REFERENCES Users(id))',
                [],
                (sqlTx, res) =>{
                    console.log("Table créé Users");
                },
                error => {
                    Alert.alert("error :" + error.message);
                }
            )
        })
    }

    static DeleteAllInfoTable = async (tableDelete) => {
        db.transaction((tx) => {
            tx.executeSql(
                'delete from ?',
                [tableDelete],
                (sqlTx, res) =>{
                    console.log("Table info sup " + tableDelete)
                },
                error => {
                    Alert.alert("error :" + error.message);
                }
            )
        })
    }

    static GetUser(login, password){
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT id FROM Users where login like ? AND password like ?',
                    [login, password],
                    (sqlTx, res) => {
                        let result 
                        if (res.rows._array.length === 1){
                            result = true
                        }else{
                            result = false
                        }
                        resolve(result);
                    },
                    error => {
                        Alert.alert("error :" + error.message);
                    }
                )
            })
        })
    }

    static Loginavailable(login){
        return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT id FROM Users where login like ?',
                [login],
                (sqlTx, res) =>{
                    let result
                    if (res.rows._array.length === 1){
                        result = true
                    }else{
                        result = false
                    }
                    resolve(result)
                    //console.log(res.rows._array.length)
                },
                error => {
                   Alert.alert("error :" + error.message); 
                }
            )
        })
    })
    }

    static CreateUser(login, password){
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'INSERT INTO Users (login, password) VALUES (?,?)',
                    [login, password],
                    (sqlTx, res) =>{
                        resolve(res.insertId)
                    },
                    error => {
                        Alert.alert("error :" + error.message);
                    }
                )
            })
        })
    }

}

