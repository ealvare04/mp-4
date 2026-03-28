export type Image = {
    url: string;
};

export type Character = {
    id: number;
    name: string;
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