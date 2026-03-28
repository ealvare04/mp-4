"use client"

import styled from "styled-components";
import { useState } from 'react'
import Link from "next/link";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    font-family: 'Poppins', sans-serif;
`;

const PageTitle = styled.h1`
    font-size: 2rem;
    color: #eae134;
`;

const Subtitle = styled.p`
    color: #dfd4d4;
    text-align: center;
`;

const StyledInput = styled.input`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    text-align: center;
    border-radius: 5px;
    border: 1px solid white;
    width: 250px;
`;


export default function Home() {
    const [name, setName] = useState("");

    return (
        <PageWrapper>
            <PageTitle>Find any Hero or Villain!</PageTitle>
            <Subtitle>Enter the name of any hero or villain below</Subtitle>
            <StyledInput type="text" value={name} placeholder="..." onChange={(e) => setName(e.target.value)} />
            <Link href={`/${name}`}>Get Character</Link>
        </PageWrapper>
    )
}
