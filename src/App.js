import React, {useState} from 'react';
import {StyledTitle, StyledApp, StyledForm, StyledLabel, StyledInput, StyledButton} from './styles'


function App() {

  const [textoBinario, setTextoBinario] = useState('');
  const [textoDecimal, setTextoDecimal] = useState('');



  function handleOnChange(value){

    if(textoBinario.length > 7 ){
      console.log('Número binario excedido'); 
      return;      
    }
    setTextoBinario(value); 
    
  }

  function handleOnSubmit(event){
    
    event.preventDefault();

    if(textoBinario.match(/^[0-1]+$/g) === null){
      console.log('Número binario diferente de 0 ou 1');
      return ;  
    }

    //Remove os espaços entre os números
    //Converter string em número
    //Inverte o número
    let textoBinarioReverso = textoBinario.split('').map(Number).reverse();
    console.log(textoBinarioReverso);
    
    //Função para calcular binario para decimal
    const resultado = textoBinarioReverso.reduce(
      (acumulador, valorCorrente ,index) =>
       acumulador + valorCorrente * Math.pow(2, index)
        )

      
    setTextoDecimal(resultado);

  }


  return (
    <StyledApp>
      
      <StyledForm onSubmit={event => handleOnSubmit(event )}>
          <StyledTitle>Binário para decimal</StyledTitle>
          <StyledLabel>Número binario: </StyledLabel>
          <StyledInput type="text" name="textoBinario" value={textoBinario} onChange={event => handleOnChange(event.target.value)}/>
          <StyledButton type="submit">Converter</StyledButton>

          <StyledLabel>Número decimal:</StyledLabel>
          <StyledInput type="text" name="textoDecimal" value={textoDecimal} disabled />

     </StyledForm>

      
    </StyledApp>
  );
}

export default App;
