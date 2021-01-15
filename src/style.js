import styled from 'styled-components';
import styleSettings from './styleSettings';

export const Button = styled.button`
  margin: 10px;
  background-color: transparent;
  color: black;
  border-color: black;
  border-width: 3px;
  padding: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const TimeControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
