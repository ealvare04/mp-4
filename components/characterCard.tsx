import styled from "styled-components";
import {Character} from "@/types/Character";
import Image from "next/image";
import Link from "next/link";

const CharacterCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
    margin: auto;
    width: 200px;
    border-radius: 10px;
`;

const CharacterName = styled.h2`
    margin-top: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
    color: #4b0082;
`;

const StyledText = styled.p`
    text-align: center;
    color: black;
`;

type CharacterCardProps = {
    character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps){
    return(
        <CharacterCardWrapper>
            <Link href={character.image.url}>
                <Image
                    src={character.image.url}
                    alt={character.name}
                    width={250}
                    height={250}
                />
            </Link>
            <CharacterName>{character.name}</CharacterName>
            <StyledText>{character.biography["full-name"]}</StyledText>

            <StyledText>
                Aliases: {character.biography.aliases.join(", ")}
            </StyledText>
        </CharacterCardWrapper>
    )
}