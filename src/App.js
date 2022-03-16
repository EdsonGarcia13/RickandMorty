import {  useState } from "react";
import PintarPersonajes from "./components/PintarPersonajes";
import SearchBox from "./components/SearchBox";
import React from "react";
import "./App.css";
const App = () => {
    const [nombre, setNombre] = useState("");

    return (
        <div className="container">
          
            <h1>Rick and Morty</h1>
            
            <SearchBox setNombre={setNombre} />
        
            <button  
                className="btn btn-success mt-2"
                onClick={ () => setNombre("") }  
            >
                Reiniciar
            </button>
          
            <PintarPersonajes nombre={nombre}/>
        </div>
    );
};
export default App;