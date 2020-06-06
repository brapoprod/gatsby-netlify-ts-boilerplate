import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

/* --- Styles ------------------------------------------------------------------------------ */

const Container = styled.header`
    background: #351266;
    margin-bottom: 1.4rem;
    border-bottom: 0.3rem dashed #a999c8;
`;
const Title = styled.h1`
    margin: 0;
`;
const LinkText = styled.span`
    text-decoration: none;
    color: #f6767c;
    &:hover {
    color: #a999c8; // <Thing> when hovered
  }
`;

/* --- Render ------------------------------------------------------------------------------ */

const Header = (props: { siteTitle: string }) => (
    <Container>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <Title>
                <Link to="/" style={{textDecoration: "none"}}>
                    <LinkText>{props.siteTitle}</LinkText>
                </Link>
            </Title>
        </div>
    </Container>
);

export default Header;
