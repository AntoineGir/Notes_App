import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

export const db = SQLite.openDatabase('db');

export class DB{

    static CreateTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY NOT NULL, login TEXT NOT NULL, password TEXT NOT NULL)',
                [],
                (sqlTx, res) =>{
                    alert("table créé");

                },
                error => {
                    alert("error " + error.message);
                }


            )
        })
    }

    static init(){
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY NOT NULL, login TEXT NOT NULL, password TEXT NOT NULL)',
                []
            );
        });
        Alert.alert("Table Create");
    }

    static CreateTableNotes(){
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS Notes (id INTEGER PRIMARY KEY NOT NULL,idUser INTEGER NOT NULL, name TEXT NOT NULL, IconId INTEGER NOT NULL, FOREIGN KEY(idUser) REFERENCES Users(id))',
                    [],
                    resolve,
                    () => Alert.alert(error.message),
                );
            });
        });
    }

    static DeleteAllInfoUsers(tableDelete){
        return new Promise((resolve, reject) => {
            db.transaction((tx) =>{
                tx.executeSql(
                    'delete from ?',
                )[tableDelete],
                resolve,
                () => alert(error.message)
            })
        })
    }

    static getUser(login="", password="") {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT id FROM Users where login like ? AND password like ?',
                    [login, password],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error),
                );
            });
        });
    }

    static getLoginUser(login){
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT id FROM Users where login like ?',
                    [login],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error),
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
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error),
                );
            });
        });
    }
}