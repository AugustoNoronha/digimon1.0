import styled from 'styled-components'

export const MainStyle = styled.main`
 
  width:98vw;

  display:flex;
  flex-direction:column;
  align-items:center;
  
  img{
    height:100px;
    margin:10px
  }

  section{
    width:75%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
  }

  div{
    display:flex;
    flex-direction:column;
    align-items:center;

    height:400px;
    width:300px;

    border-radius:15px;
    border:1px solid #ccc;

    overflow:hidden;
    margin:15px;

    img{
      height:300px;
      width:300px;
      border-bottom:1px solid #ccc;
    }

    label{
      height:100%;
      width:100%;
      text-align:center;
      vertical-align:center;
      font-size:35px;
      font-weight:600;
      cursor: pointer;
    }
  }
`
