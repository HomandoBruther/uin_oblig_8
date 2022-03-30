import styled from 'styled-components'

const StyleMain = styled.main`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  article {
    background-color: #64d18a;
    padding: 1rem;
    text-align: center;
  }
  a {
    background-color: #fff;
    color: #000;
    padding: 0 1rem;
    border-radius: 5%;
  }
`

export default StyleMain
