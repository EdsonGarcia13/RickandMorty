import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const SearchBox = ({ setNombre}) => {
    const [inputs, handleChange, reset] = useFormulario({
        nombre: "",
    });
    const { nombre }= inputs;
  
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            return Swal.fire({
                title: "Error!",
                text: "Invalid name",
                icon: "error",
            });
        }
        setNombre(nombre.trim().toLowerCase());
        

        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nombre} 
                onChange={handleChange}
                className="form-control mb-2"
                name="nombre"
                placeholder="Ingrese Character or Location"
            />
            <div className="d-grid gap-2">
                <button 
                    className="btn btn-primary" 
                    type="submit">
                    Buscar
                </button>
            </div>


            
        </form>
    );
};

export default SearchBox;