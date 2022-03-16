import { useFetch } from "../hooks/useFetch";
import Personaje from "./Personaje";
import Loading from "./Loading";

const PintarPersonajes = ({ nombre}) => {
    const [personajes, loading] = useFetch(nombre);
    

    const personajesRandom = () => {
        const personajesRandom = personajes.sort(() => Math.random() - 0.5);
        return personajesRandom.slice(0, 126);
    };

    return (
        <div className="row mt-2">
             {loading ? (
                <Loading />
            ) : (
                personajesRandom().map((personaje) => (
                    <Personaje key={personaje.id} character={personaje} />
                ))

            ) 
            }

        </div>
    );

    // if (loading) {
    //     return <Loading />;
    // }
     
    
    // return (
    //     <div className="row mt-2">
    

    //         {personajes.map((item) => (
    //             <Personaje key={item.id} character={item} />
    //         ))}
            
    //     </div>
    // );
    
};

export default PintarPersonajes;