import styled from 'styled-components';

export const Container = styled.div`
  background: var(--darkBlue);
  color: var(--text);

  height: 96px;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  img {
    width: 6rem;
    height: 6rem;
  }
`;
