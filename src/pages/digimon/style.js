
import styled from 'styled-components'

export const DigimonStyle = styled.main`
  width:100vh;
  height:100vh;

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  img{
    height:100px;
  }

  div{
    height:400px;
    width:300px;
    
    display:flex;
    flex-direction:column;
    align-items:center;

    border:1px solid #ccc;
    border-radius:15px;
    overflow:hidden;
    margin-top:30px;

    img{
      height:300px;
      width:300px;
      border-bottom:1px solid #ccc;
    }

    label{
      font-size:20px;
    }

    span{
      font-size:25px;
      color:blue;
      font-weight:700;
    }


  }
`