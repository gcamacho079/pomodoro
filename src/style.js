import styled from 'styled-components';
import styleSettings from './styleSettings';

export const Nav = styled.nav`
  font-family: ${styleSettings.fonts.body};
  background-color: ${styleSettings.colors.secondary};
  border-bottom: 3px solid black;
`;

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: ${styleSettings.units.spacer_small};
  list-style-type: none;

  & > * + * {
    margin-left: ${styleSettings.units.spacer_small};
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Main = styled.main`
  font-family: ${styleSettings.fonts.body};
  width: 100%;
  min-height: 100vh;
  background-color: ${styleSettings.colors.primary};
  color: #000000;
  padding: 30px;
`;

export const Button = styled.button`
  background-color: transparent;
  color: black;
  border-color: black;
  border-width: 3px;
  padding: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${styleSettings.fonts.body};
  cursor: pointer;
`;

export const TimeControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Label = styled.label`
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
  font-size: 1.2rem;
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

export const Form = styled.form`
  display: grid;
  max-width: 600px;
  margin: 0 auto;
  grid-row-gap: 10px;
  input {
    font-family: ${styleSettings.fonts.body};
    padding: 10px;
  }

  button {
    background-color: transparent;
    font-family: ${styleSettings.fonts.body};
    font-size: 1.5rem;
    border: 2px solid black;
  }
`;
