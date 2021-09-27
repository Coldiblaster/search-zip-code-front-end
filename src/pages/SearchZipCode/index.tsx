import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

import { Container, Content, Teste, Table } from './styles';

interface Address {
  cep: string;
  uf: string;
  localidade: string;
  logradouro: string;
  bairro: string;
  complemento: string;
}

export default function SearchZipCode() {
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState<Address>();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data: AddressData } = await api.get<Address>(
        `/address/${zipCode}`,
      );

      if (!AddressData) {
        const response = await api.post<Address>(`/address`, { cep: zipCode });
        setAddress(response.data);
      } else {
        setAddress(AddressData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <input
            id="cep"
            type="text"
            placeholder="Insira o cep"
            onChange={event => setZipCode(event.target.value)}
            value={zipCode}
          />

          <button type="submit">Buscar</button>
        </form>
        <Teste>
          <Table>
            <thead>
              <tr>
                <th>Cep</th>
                <th>Logradouro</th>
                <th>Bairro</th>
                <th>Localidade/UF</th>
                <th>Complemento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{address?.cep}</td>
                <td>{address?.logradouro}</td>
                <td>{address?.bairro}</td>
                <td>
                  {address?.localidade}
                  {address?.uf ? `/${address.uf}` : ''}
                </td>
                <td>{address?.complemento}</td>
              </tr>
            </tbody>
          </Table>
        </Teste>
      </Content>
    </Container>
  );
}
