import styled from 'styled-components';

interface IButtonProps {
  color?: string;
  size?: string;
}

export const Container = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--green);
  color: var(--darkBlue);

  height: ${props => props.size || '3.5rem'};

  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover:enabled {
    color: var(--darkBlue);
    opacity: 0.8;
  }

  svg {
    stroke: var(--darkBlue);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
