import { BtnContainer } from './styles';

const Button = ({ children, primarySchema, ...rest}) => {
  return(
    <BtnContainer primarySchema={primarySchema} type="button" {...rest}>
      {children}
    </BtnContainer>
  )
}

export default Button;