import styled from "styled-components";
import {Character} from "@/types/Character";
import Image from "next/image";

const CharacterCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    width: 200px;
    border-radius: 10px;
`;

const CharacterName = styled.h2`
    margin-top: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
    color: #4b0082;
`;

type CharacterCardProps = {
    character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps){
    return(
        <CharacterCardWrapper>
            <Image
                src={character.image?.url || "/placeholder.png"}
                alt={character.name}
                width={150}
                height={150}
            />
            <CharacterName>{character.name}</CharacterName>
        </CharacterCardWrapper>
    )
}