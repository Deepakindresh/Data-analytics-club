import styled from 'styled-components'

export const NewsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const NewsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    padding: 0 50px;
    

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const NewsCard = styled.div`
  background: #f5f5f5;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 450px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }

  @media screen and (max-width: 786px) {
    height : 300px;
    overflow : scroll;
  }
`
export const NewsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 786px) {
    height : 100px;
    width : 100px
  }

`
export const NewsH1 = styled.h1`
  font-size: 1rem;
  font-weight : bold;
  text-align : center;
  margin-bottom: 10px;
`
export const NewsH2 = styled.h2`
  font-size: 1rem;
  text-align : center;
  margin-bottom: 10px;
  overflow-y: 'scroll';
`

export const NewsP = styled.p`
  font-size: 1rem;
  text-align: center;
`

export const NewsButton = styled.button`

  size : 100px;
`

export const NewsHeading = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`


