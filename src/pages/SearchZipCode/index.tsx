import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { api } from '../../services/api';

import ImageBackground from '../../assets/background.svg';

import { Container, Content, FormContent, TableContent, Table } from './styles';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const { data: existingZipCode } = await api.get<Address>(
        `/address/single/${zipCode}`,
      );

      if (!existingZipCode) {
        const response = await api.post<Address>(`/address`, { cep: zipCode });
        setAddress(response.data);
      } else {
        setAddress(existingZipCode);
      }

      toast.success('Cep encontrado.');
    } catch (err) {
      toast.error('Cep inválido.');
    }

    setIsLoading(false);
  };

  return (
    <Container>
      <Content>
        <FormContent>
          <img src={ImageBackground} alt="Imagem de background" />

          <form onSubmit={handleSubmit}>
            <Input
              name="Cep"
              type="text"
              placeholder="Insira o cep"
              onChange={event => setZipCode(event.target.value)}
              value={zipCode}
              label="Insira o cep"
              required
              maxLength={9}
            />

            <Button
              type="submit"
              size="40px"
              loading={isLoading}
              disabled={zipCode.replace('-', '') === address?.cep}
            >
              Buscar
            </Button>
          </form>
        </FormContent>
        {address && (
          <TableContent>
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
          </TableContent>
        )}
      </Content>
    </Container>
  );
}
