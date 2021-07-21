import {BoxArrowRight, HouseDoor} from 'react-bootstrap-icons'
import styled from 'styled-components';

export const Header = styled.header`
  height: 10%;
  display: flex;
`;

export const Icon = styled.img`
  border-radius: 50%;
  background:  #fce0a2;
  margin: 0.7em;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  align-items: center;
`;

export const Logout = styled(BoxArrowRight)`
  fill: aliceblue;
    width: 2em;
    height: 2em;
`;

export const Home = styled(HouseDoor)`
  fill: aliceblue;
    width: 2em;
    height: 2em;
`;

export const IconHolder = styled.div`
display:flex;
right:0;
  float:right;
  position:absolute;
  width:90px;
  height:5%;
  margin-top:1em;
  column-gap:1em;
`;

