import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>

            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <MainTitle>Frontend developer.</MainTitle>
                    <Name>Hi, I'm Maxim Minakov and I'm a frontend developer.</Name>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>

        </StyledMain>
    )
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #191919;
`


const Photo = styled.img`
    width: 349px;
    height: 349px;
    //object-fit: cover;
    background-color: #805DCF;
    border-radius: 200px;
    border: 7px solid #357999;
`

const MainTitle = styled.h1`
color: #B5B5B5;
`

const Name = styled.h2`
color: #B5B5B5;
`