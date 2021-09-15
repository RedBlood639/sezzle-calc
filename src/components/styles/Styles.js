import styled from 'styled-components'

export const CalculatorStyles = styled.div`
  box-sizing: border-box;
  background-color: black;
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-rows: minmax(200px 350px) 1fr;
  grid-template-columns: 1fr;
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 5%;
    overflow-x: hidden;
  }
  .display {
    /* grid-area: display; */
    font-family: 'Menlo', 'Monaco', monospace;
    margin: 0 !important;
    // width: 100%;
    margin-right: 10px @media (max-width: 500px) {
      width: 100%;
      max-height: 200px;
    }
    h1 {
      font-size: 4rem;
      color: white;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }
  }
  .number-pad {
    /* grid-area: numbers; */
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 450px;
    margin: 0 auto;
    border: white solid;
    border-radius: 20px;
    padding: 20px 20px 20px 20px;
    margin-bottom: 20px;
    @media (max-width: 500px) {
      width: 100%;
      margin: 0;
    }
    button {
      width: 100%;
      height: 80px;
      border-radius: 20px;
      border: 3px solid white;
      font-size: 2rem;
      color: white;
      font-family: 'Menlo', 'Monaco', monospace;
      background: black;
      &:focus {
        outline: none;
      }
      &:hover {
        border: black solid;
        filter: invert(100%);
      }
    }
    button.function-button {
      background-color: #333;
    }
    button.white-button {
      color: #333;
      background-color: white;
    }
    button.clear-button {
      grid-column: 1/3;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  border: 4px solid white;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  border-radius: 20px;
  background: black;
  @media (max-width: 500px) {
    width: 95%;
    grid-template-rows: 60px 40px;
  }
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    padding: 15px 20px;
    @media (max-width: 500px) {
      font-size: 2rem;
      padding: 10px;
      padding-top: 3rem;
    }
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  p.long-stored-display {
    font-size: 0.5rem;
  }
`

export const CalcMessageStyles = styled.div`
  .messagesWrapper {
    overflow-x: hidden;
  }
  .calcMessage {
    width: 100%;
    height: 50px;
    padding: 20px 0 0 20px;
    text-align: left;
    color: white;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Menlo', 'Monaco', monospace;
    border-top: 1px white solid;
    background-color: black;
    @media (max-width: 500px) {
      width: 100%;
      max-height: 200px;
    }
  }
`
