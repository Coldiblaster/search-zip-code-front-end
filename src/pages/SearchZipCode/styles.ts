import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 48px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    margin: 80px 0;
    width: 100%;
    padding: 8px;
    text-align: center;
  }
`;

export const Teste = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;

  background: var(--turquoise);
  color: var(--background);

  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;

  thead {
    background: var(--turquoise);
    height: 32px;
  }

  tbody {
    background: var(--text);
    height: 24px;
    overflow-y: scroll;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
