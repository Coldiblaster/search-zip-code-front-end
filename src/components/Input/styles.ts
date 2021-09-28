import styled, { css } from 'styled-components';

interface IContainerProps {
  inputSize?: string;
}

export const Container = styled.div`
  text-align: left;

  label {
    margin-left: 0.2rem;

    color: var(--text);
    font-weight: 600;
    font-size: 0.875rem;

    strong {
      margin-right: 0.1rem;
      color: red;
    }
  }
`;

export const InputContent = styled.div<IContainerProps>`
  ${({ inputSize }) => css`
    background: var(--white);
    border-radius: 10px;
    padding: ${inputSize || '10px'};

    border: 3px solid var(--white);

    input {
      flex: 1;
      width: 100%;
      background: transparent;
      border: 0;
      color: var(--darkBlue);
      font-weight: 500;
      font-size: 1rem;

      &::placeholder {
        color: var(--darkBlue);
        opacity: 0.3;
      }
    }

    :focus-within {
      border: 3px solid var(--blue);
    }
  `}
`;
