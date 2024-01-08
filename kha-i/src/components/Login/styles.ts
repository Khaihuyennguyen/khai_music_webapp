import styled from 'styled-components'
import Hero from '../../assets/Khai_museum.jpg'

export const Container = styled.div`
  display: flex;
  max-width 100vw;
  min-height: 86vh;
  margin: 0px;
  background: black;
  background-image: url(${Hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1000;
  overflow: hidden;
`

export const Right = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  text-align: right;
  color: black;
`

export const Left = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  color: black;
`

export const P = styled.p`
  margin-top: 1em;
  margin-bottom: 2em;
  margin-left: 2em;
  margin-right: 1em;
  color: gray;
`
export const H1 = styled.h1`
  color: black;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 0.5em;

  @media(max-width: 800px) {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 2em;
  }
`