import styled from 'styled-components';

export const MainContain = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0 20px 0;
`

export const MainWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: ${({fd}) => fd};
`
export const LeftCard = styled.div`
    width:361px;
    height:335px;
    background-color: ${({bg}) => bg};
    border-radius: 8px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 10px 0 10px;
`

export const RightCard = styled.div`
    width: 650px;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const Avat = styled.img``

export const Head = styled.h2``

export const Para = styled.p``

export const Head2 = styled.h2`
    color: #003399;
`

export const Para2 = styled.p``
