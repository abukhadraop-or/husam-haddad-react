import { ButtonDiv } from "./styles";

const Button=({children,color})=>{
return(
    <ButtonDiv  color={color}  >
        <h2>{children}</h2>
    </ButtonDiv>
)

}

export default Button;