const Personaje = ({ character = "" }) => {
    const { name, image, species, status, origin, episode } = character;
    

    return (
        <div className="col-md-4 mb-2">
            <div className="card">
                <img
                    src={image}
                    alt={`imagen-${name}`}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5>Name: {name}</h5>
                    <h5>Tipe: {species}</h5>
                    <h5>Status: {status}</h5>
                    <h5>Origin: {origin.name}</h5>
                    <h5>Episodes: {episode.length}</h5>
                </div>
            </div>
        </div>
    );
};

export default Personaje;