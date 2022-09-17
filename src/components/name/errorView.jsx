import { FormContainer } from './name.styled';
import errorImage from './sad_cat.jpg';

export default function ErrorMessage({ message }) {
  return (
    <FormContainer>
      <img src={errorImage} width="300" alt="" />
      <h1>{message}</h1>
    </FormContainer>
  );
}
