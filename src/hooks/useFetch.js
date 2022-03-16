import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export const useFetch = (nombre) => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [Locations, setLocations] = useState([]);

    useEffect(() => {
        obtenerCharacter(nombre);
    }, [nombre]);
    
    useEffect(() => {
        obtenerLocations(nombre);
    }, [nombre]);
    

    const obtenerCharacter = async (nombre) => {
        setLoading(true);

        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}`
                
            ) 

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `not exist ${nombre}`,
                    icon: "error",
                });
            }

            const data = await res.json();
            console.log([...data.results]);
            setPersonajes([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    

    const obtenerLocations = async (nombre) => {
        setLoading(true);

        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/location/?name=${nombre}`

            )

           

            const data = await res.json();
            console.log([...data.results]);
            setLocations([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };


    return [personajes, loading, Locations];

    
};