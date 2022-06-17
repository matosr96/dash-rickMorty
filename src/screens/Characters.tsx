import { useEffect, useState } from "react";
import List from "@/actions/List";
import CharacterList from "@/components/CharacterList";
import '@styles/screens/characters.css'

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState<{}>({});

  useEffect(() => {
    List(setCharacters, setInfo);
  }, []);

  return(
    <div className="character">
      <CharacterList character={characters} />
    </div>
  );
};

export default Characters;
