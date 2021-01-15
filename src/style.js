import styled from 'styled-components';
import styleSettings from './styleSettings';

export const Button = styled.button`
  background-color: transparent;
  color: black;
  border-color: black;
  border-width: 3px;
  padding: 5px;
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

export const Label = styled.label`
  font-size: 20px;
  text-align: center;
  display: block;
  margin-bottom: ${styleSettings.units.spacer_small};
`;

export const ControlRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${styleSettings.units.spacer};
`;
