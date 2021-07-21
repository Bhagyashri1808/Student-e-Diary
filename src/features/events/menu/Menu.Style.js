import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CardDeck = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-row-gap: 0;
    position: relative;
    grid-column-gap: 1rem;
    align-items: center;
    height: 80%;
    width: 50%;
    margin: 0 auto;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 50%;
`;

export const Img = styled.img`
max-height: 100%;
max-width: 100%;
border-radius: 16%;
`;

export const ModuleLink = styled(Link)`
text-align:center;
text-decoration:none;
color:white;
`;