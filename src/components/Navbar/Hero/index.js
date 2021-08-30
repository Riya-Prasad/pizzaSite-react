import React, {useState} from 'react'
import Navbar from '..';
import Sidebar from '../../Sidebar';
import {HeroContainer, HeroContent, HeroItems, Heroh1, HeroP, HeroBtn} from './HeroElements';


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <Heroh1>Tastiest Pizza Ever</Heroh1>
                    <HeroP>Ready in 2 minutes</HeroP>
                    <HeroBtn>Order Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero
