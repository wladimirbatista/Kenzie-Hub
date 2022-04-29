import { SelectContainer, OptionContainer, Container } from "./styles";

const Select = ({label, options, register, name, error}) => {

  return(
    <Container isErrored={!!error}>
      <label>{label} {!!error && <span> - {error}</span>}</label>
      <SelectContainer {...register(name)}>
        <OptionContainer value="">Selecione uma opção</OptionContainer>
        {options.map((option, index) => <OptionContainer key={index} value={option}>{option}</OptionContainer> )}
      </SelectContainer>
    </Container>
  )
}

export default Select;