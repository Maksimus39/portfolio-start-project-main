import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {MailAddress} from "../../../components/mailAddress/MailAddress";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle><h2>For any questions please mail me:</h2></SectionTitle>
            <MailAddress/>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 100vh;
    background-color: #1B1B1B;
`