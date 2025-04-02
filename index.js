class THashStorage {
    hash = {}; //key - plant, value - how to take care
    constructor() {
    }
    
    Reset() {
        hash = {};
        TLocalStorage.Save(this);
    }
    
    AddValue(key, value) {
        if (key in this.hash) {
            alert("Value is already here: " + key);
            return;
        }
        
        console.log(key, value);
        this.hash[key] = value;
        TLocalStorage.Save(this);
        return;
    }
    
    DeleteValue(key) {
        delete this.hash[key];
        TLocalStorage.Save(this);
    }
    
    GetValue(key) {
        if (key in this.hash) {
            return this.hash[key]; 
        } else {
            return undefined;
        }
    }
    
    GetKeys() {
        return Object.keys(this.hash);
    }
}

class TLocalStorage {
    static Save(tHashStorage) {
        window.localStorage.clear();
        for (let key of tHashStorage.GetKeys()) {
            window.localStorage[`THashStorage_${key}`] = tHashStorage.GetValue(key);
        }
    }
    
    static Load(tHashStorage) {
        for (let key in window.localStorage) {
            let identifier = "THashStorage_";
            if (key.startsWith(identifier)) {
                console.log(`${key} is: ${window.localStorage[key]}`);
                
                tHashStorage.hash[key.slice(identifier.length)] = window.localStorage[key];
            }
        }
    }
}

let Storage = new THashStorage();
TLocalStorage.Load(Storage);

function Add() {
    let plant = prompt("plant: ");
    if (plant === null) {
        return;
    }
    let care = prompt("how to take care: ");
    if (care === null) {
        return;
    }
    Storage.AddValue(plant, care);
}

function DeleteB() {
    let plant = prompt("plant: ");
    if (plant === null) {
        return;
    }
    Storage.DeleteValue(plant);
}

function GetValue() {
    let plant = prompt("plant: ");
    if (plant === null) {
        return;
    }
    let val = Storage.GetValue(plant);
    alert (val === undefined ? "No info" : val);
}

function allval() {
    let info = Storage.GetKeys();
    console.log(info.length == 0 ? "No keys" : info);
}

