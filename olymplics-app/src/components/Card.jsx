import React from "react";
import "./styles.css"
import {useNavigate} from "react-router-dom";

const deleteGame = async (id) => {
    const gameDelete = await fetch("http://localhost:3000/api/games/" + id, {
    method: "DELETE",
  });
  return gameDelete;
};

const Card = ({ title, id, refreshGames}) => {
    const navigate = useNavigate();

    const handleDetailsClick = () =>{
        navigate (`/details/${id}`);
  };

  const handleDeleteClick = async () => {
    const response = await deleteGame(id);
    if (response.ok){
        refreshGames();
    }
  };

  return(
    <div className="card">
        <div className="card-content">
            <h2 className="card-title"></h2>
            <div className="card-wrapp-buttons">
                <button className="card-button" onClick={handleDetailsClick}>
                Detalle
                </button>
                <button className="card-button" onClick={handleDeleteClick}>
                    Borrar
                </button>
            </div>
        </div>
    </div>
  );
};

export default Card;