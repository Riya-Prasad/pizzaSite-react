
import styled from "styled-components";
import FeaturePic from '../images/p3.jpg';

export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
    height: 100vh;
    width: 100vw;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p {
        margin-top: 1rem;
        margin-bottom: 2rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`;
export const FeatureButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    border-radius:30px;
    background-color: #F1ECC3;
    color: #2C394B;
    transition: 0.2s ease-out;

    &:hover{
        background-color: #131313;
        transition: 0.2s ease-out;
        cursor:pointer;
        color: #fff;
    }
`;

