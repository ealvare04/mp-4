import Link from 'next/link'
import styled from "styled-components";

const StyledHeader = styled.header`
    text-align: center;
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>
                HERO SEARCH
            </h1>
            <nav>
                <Link href="/">
                    Home
                </Link>
            </nav>
        </StyledHeader>
    )
}