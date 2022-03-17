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

            <div className="d-grid gap-2">
                <button 
                className="btn btn-success mt-2 " 
                type="button"
                onClick={ () => setNombre("") } 
                >
                Reiniciar
                </button>
                
            </div>
            <PintarPersonajes nombre={nombre}/>
        </div>
    );
};
export default App;