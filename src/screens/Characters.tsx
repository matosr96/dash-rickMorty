import React, { useState } from "react";
import "@styles/screens/characters.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Characters = () => {

  const [character, setCharacter] = useState([])
  const [info, setInfo] = useState<{}>({})


  







  return <div className="character">Characters</div>;
};

export default Characters;
