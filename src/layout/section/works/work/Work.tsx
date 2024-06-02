import React from 'react';
import styled from "styled-components";


type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>Live Preview</Link>
            <Link href={"#"}>View Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #363636;
    max-width: 373px;
    width: 100%;
    border-radius: 20px;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3``

const Text = styled.p``

const Link = styled.a``