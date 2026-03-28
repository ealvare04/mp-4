import Link from 'next/link'
import styled from "styled-components";

const StyledHeader = styled.header`
    text-align: center;
    padding: 1.5rem 0;
    background-color: #4b0082;
    color: white;
    font-family: 'Poppins', sans-serif;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  letter-spacing: 2px;
`;

const StyledNav = styled.nav`
  margin-top: 0.5rem;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    font-weight: 600;
      
    &:hover {
      color: #ffd700;
    }
  }
`;

export default function Header() {
    return (
        <StyledHeader>
            <HeaderTitle>
                HERO SEARCH
            </HeaderTitle>
            <StyledNav>
                <Link href="/">
                    Home
                </Link>
            </StyledNav>
        </StyledHeader>
    )
}