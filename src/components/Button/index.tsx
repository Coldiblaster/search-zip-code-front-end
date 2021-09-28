import Loader from 'react-loader-spinner';

import { ButtonHTMLAttributes } from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  color?: string;
  size?: string;
};

const Button = ({ children, loading, color, size, ...rest }: ButtonProps) => (
  <Container color={color} size={size} disabled={loading} {...rest}>
    {loading ? <Loader type="Oval" height={24} width={24} /> : children}
  </Container>
);

export default Button;
