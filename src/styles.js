import styled from 'styled-components'



export const StyledApp = styled.div`
  display: flex;
  justify-content: center; 
  box-sizing: border-box;
  position: absolute;

  background: #ffff;
 
  width: 100%;
  height: 100%;
  
  `

export const StyledTitle = styled.h1`

    font-family: 'Roboto', sans-serif;
    color: #2B72FF;
    margin: 10px;
    font-weigth: bold;

`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;   
  
 
  width: 500px;
  heigth: 500px;
  background-color: #ffff;
  margin-top: 200px;
  margin-bottom: 100px;

`

export const StyledLabel = styled.label`
font-family: 'Roboto', sans-serif;
font-weight: bold;
  margin: 10px;
  font-size: 18px;
  color: #2B72FF;
  

`
export const StyledButton = styled.button`
    font-family: 'Roboto', sans-serif;
    text-align: center;
    border: none;
    font-size: 16px;
    padding: 15px 32px;
    width: 240px;
    border-radius: 5px;
    margin: 10px;
    background-color: #2B72FF;
    color: #ffff;
    cursor: point;

`

export const StyledInput = styled.input`
    width: 420px;
    margin: 10px;
    padding: 15px 32px;
    border: none;
    background-color: #dddd;
    border-radius: 5px;
    cursor: point;


`