import { Container, InputContent } from './styles';

interface props {
  name: string;
  inputSize?: string;
  label?: string;
  requiredField?: boolean;
}

type InputProps = JSX.IntrinsicElements['input'] & props;

const Input = ({
  name,
  label,
  inputSize,
  requiredField,
  ...rest
}: InputProps) => (
  <Container>
    {label && (
      <label htmlFor={name}>
        {requiredField && <strong>*</strong>}
        {label}
      </label>
    )}

    <InputContent inputSize={inputSize}>
      <input name={name} {...rest} />
    </InputContent>
  </Container>
);

export default Input;
