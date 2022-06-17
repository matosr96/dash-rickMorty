import axios from "axios";
import { Character } from "../interface/character.model"

export const character: Character[] = [];
export const addExpense = (data: Character) => {
    character.push(data)
}


