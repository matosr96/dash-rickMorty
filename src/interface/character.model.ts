export type Origin = {
    name: string;
    url:  string;
}

export type Location = {
    name: string;
    url:  string;
}

export enum GENDER {
    MALE = "male",
    FEMALE = "female",
}


export interface Character {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   GENDER;
    origin:   Origin;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}