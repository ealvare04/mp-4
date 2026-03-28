"use client"

import styled from "styled-components";
import { useState } from 'react'
import Link from "next/link";

const StyledDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    text-align: center;
`;

export default function Home() {
    const [name, setName] = useState("");

    return (
        <StyledDiv>
            <h1>Find any Hero or Villain!</h1>
            <p>Enter the name of any hero or villain below</p>
            <StyledInput type="text" value={name} placeholder="..." onChange={(e) => setName(e.target.value)} />
            <Link href={`/${name}`}>Get Character</Link>
        </StyledDiv>
    )
}
