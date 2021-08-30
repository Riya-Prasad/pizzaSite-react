
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 1;
    width: 350px;
    height: 100%;
    background-color: #131313;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 1.7rem;
    cursor: pointer;
    outline: none;
`;


export const CloseIcon = styled(FaTimes)`
    color:#fff;
`;


export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width:480px) {
        grid-template-rows: repeat(3, 60px);
        
    }
`;


export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #4F0E0E;
        transition: 0.2s ease-in-out;

    }
`;


export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;


export const SidebarRoute = styled(Link)`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    outline: none;
    text-decoration: none;
    border: none;
    border-radius:30px;
    background-color: #F1ECC3;
    color: #2C394B;
    transition: 0.2s ease-out;

    &:hover{
        background-color: #4F0E0E;
        transition: 0.2s ease-out;
        cursor:pointer;
        color: #fff;
    }
`