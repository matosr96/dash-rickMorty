import React from "react";
import { Character } from "../interface/character.model";
import "@styles/components/characterlist.css";

const CharacterList = ({ character }: any) => {
  return (
    <div className="character-list">
      {character.map((item: any, index: any) => (
        <div key={index} className="container-card">
          <div className="card">
            <img className="card-img" src={item.image} alt="character" />
            <div className="card-body">
              <h5 className="card-title"><i className='bx bxs-user-pin'></i> {item.name}</h5>
              <p className="card-text">Species: {item.species}</p>
              <p className="card-text">Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
