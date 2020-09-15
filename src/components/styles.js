import styled, { keyframes } from 'styled-components'
import { uclaBlue, uclaGold } from '../constants'

export const Button = styled.a`
  border: 4px solid ${uclaGold};
  padding: 12px;
  margin: 24px;
  color: #fafafa;

  transition: all 0.5s;
  &:hover {
    background-color: ${uclaGold};
  }
`;

const drop = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }

  20% {
    height: 40px;
    opacity: 1;
  }

  90% {
    height: 40px;
    opacity: 1;
  }

  100% {
    height: 0px;
    opacity: 0;
    display: none;
  }
`;

const Banner = styled.div`
  position: absolute;
  top:0%;
  width: 100%;
  background-color: ${uclaGold};
  color: #00274C;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: ${drop} 6s ease-out;
  opacity: 0;
`
