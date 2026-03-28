"use client";

import {useParams} from "next/navigation";
import useSWR from "swr";
import styled from "styled-components";
import {Character} from "@/types/Character";
import CharacterCard from "@/components/characterCard";

const CharacterContentWrapper = styled.main`
    width: 80vw;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-family: 'Poppins', sans-serif;
`;

const SearchedName = styled.h1`
    color: #4b0082;
    text-align: center;
    font-size: 2rem;
`;

export default function CharacterPage() {
    const params = useParams();

    // fetch data with SWR
    const {data, error} = useSWR(`/api/getCharacterData?name=${params.name}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    // handle error and loading states
    if (error) return <div>Failed to load :(</div>;
    if (!data) return <div>Loading...</div>;

    console.log(data);

    const characters: Character[] = data.results;

    if (!characters) return <div>No character found with the name: {params.name}</div>

    return (
        <CharacterContentWrapper>
            <SearchedName>Searched for {params.name}</SearchedName>
            {characters.map((character) => (
                <div key={character.id}>
                    <CharacterCard key={character.id} character={character} />
                </div>
            ))}
        </CharacterContentWrapper>
    )
}