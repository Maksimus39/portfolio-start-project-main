import React from 'react';
import iconsSprite from "../../assets/images/icons-sprite.svg"


type IconProps = {
    iconId?:string
    codeTelegram?:string
    codeVK?:string


    width?:string
    height?:string
    viewBox?:string
}

export const Icon = (props:IconProps) => {
    return (

        <svg width={props.width||"120"} height={props.height||"119"} viewBox={props.viewBox||"0 0 120 119"} fill="none" xmlns="http://www.w3.org/2000/svg">

            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            <use xlinkHref={`${iconsSprite}#${props.codeTelegram}`}/>
            <use xlinkHref={`${iconsSprite}#${props.codeVK}`}/>

        </svg>
    );
};

