import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';
import { LogBox } from 'react-native';
import { useEffect } from 'react';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase("db_NotesApp")

export default function App() {
  useEffect(() => {
    const CreateTable = async () => {
      db.transaction((tx) => {
          tx.executeSql(
              'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY NOT NULL, login TEXT NOT NULL, password TEXT NOT NULL)',
              [],
              (sqlTx, res) =>{
                  alert("table créé" + res);
              },
              error => {
                  alert("error " + error.message);
              }
          )
      })
    }

    CreateTable();
  },[]);

  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer>
      <RootNavigator/>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

