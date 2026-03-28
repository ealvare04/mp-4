export type Image = {
    url: string;
};

export type Biography = {
    "full-name": string;
    aliases: string[];
    publisher: string;
}

export type Character = {
    id: number;
    name: string;
    biography: Biography;
    image: Image;
}

export type CharacterResponse = {
    response: "success" | "error";
    "results-for": string;
    characters: Character[];
}

//
// export type JsonBinResponse = {
//     record: CharacterResponse;
// }