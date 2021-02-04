import styled from 'styled-components';
import styleSettings from './styleSettings';

export const Button = styled.button`
  background-color: transparent;
  color: black;
  border-color: black;
  border-width: 3px;
  padding: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  font-family: ${styleSettings.fonts.body};
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

export const Input = styled.input`
  border: none;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-family: inherit;
  appearance: none;
`;

export const ErrorMessage = styled.div`
  margin: ${styleSettings.units.spacer} 0;
  font-weight: 700;
  text-align: center;
`;

export const ControlRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${styleSettings.units.spacer};
`;

export const TimerLabel = styled.h2`
  text-align: center;
`;

export const ButtonRow = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr;
`;

export const TimerCountdown = styled.div`
  margin: ${styleSettings.units.spacer} 0;
  font-size: 48px;
  text-align: center;
`;

export const TimerWrapper = styled.div`
  margin: ${styleSettings.units.spacer_large} 0;
`;
