import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type PropsSkillType = {
    iconId: string
    skillTitle: string
    description: string
}
export const Skill = (props: PropsSkillType) => {
    return (
        <StyledSkill>

            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.skillTitle}</SkillTitle>
            <SkillText>
                {props.description}
            </SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 25%;
    text-align: center;
`

const SkillTitle = styled.h3`
    color: #CCCCCC;
    text-align: center;
`

const SkillText = styled.p`
    color: #A7A7A7;
    text-align: center;
`