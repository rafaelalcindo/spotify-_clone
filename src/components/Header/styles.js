import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px 0;
`

export const Search = styled.div`
  margin: 10px 20px 0;

  input {
    border-radius: 10px;
    border: 0;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #FFF;

  img {
    width: 27;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`
