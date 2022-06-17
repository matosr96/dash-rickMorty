import React from "react";
import axios from "axios";

const url: string = "https://rickandmortyapi.com/api/character";

const List = (stateOne: unknown, stateTwo: unknown) => {
  return axios
    .get(url)
    .then((data) => {
      stateOne(data.data.results);
      stateTwo(data.data.info);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default List;
