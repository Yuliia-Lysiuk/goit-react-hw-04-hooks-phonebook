import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`
export const Label = styled.label`
    font-size: 18px;
`

export const Input = styled.input`
    padding: 5px;
    margin-left: 28px;
    margin-bottom: 15px;
    width: 45%;
    :hover{
        
        border: 2px solid black;
        box-shadow: 1px 1px 4px 1px #470c3aaf;

    }
`

export const NameInput = styled.input`
    padding: 5px;
    margin-left: 12px;
    margin-bottom: 15px;
    width: 45%;
    :hover{
        
        border: 2px solid black;
        box-shadow: 1px 1px 4px 1px #470c3aaf;
    }
`

export const Button = styled.button`
font-size: 16px;
margin-left: auto;
border: 2px solid #470c3a;
    margin-right: auto;
    padding: 5px;
    width: 33%;
    :hover{
        color: #470c3aaf;
        cursor: pointer;
        border: 2px solid black;
        box-shadow: 1px 1px 4px 1px #470c3aaf;
    }
`
