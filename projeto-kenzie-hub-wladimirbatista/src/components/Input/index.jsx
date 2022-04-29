import { Container } from "./styles"

const Input = ({label, error, register, name, ...rest}) => {
  return(
    <Container isErrored={!!error}>
      <label>{label} {!!error && <span> - {error}</span>}</label>
      <input {...register(name)} {...rest}/>
    </Container>
  )
}

export default Input;