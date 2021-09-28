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

  gap: 4rem;
`;

export const FormContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  img {
    width: 100%;
    height: 100%;

    max-width: 320px;
  }

  form {
    width: 20rem;
    text-align: center;

    @media (max-width: 468px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Table = styled.table`
  width: 100%;

  color: var(--white);

  border-collapse: collapse;
  border-radius: 10px;

  overflow: hidden;
  width: 100%;

  thead {
    background: var(--blue);
    height: 32px;
    text-transform: uppercase;
  }

  tbody {
    background: var(--text);
    height: 24px;

    color: var(--darkBlue);
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: var(--white);
  }

  @media screen and (max-width: 600px) {
    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      display: block;
      padding: 2px;
      margin-bottom: 0.625em;
    }

    td {
      border-bottom: 1px solid var(--gray);

      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    td:last-child {
      border-bottom: 0;
    }
  }
`;
