import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/social networc.webp";
import todolist from "../../../assets/images/todolist.webp";
import cards from "../../../assets/images/cards.webp";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle><h2>Projects</h2></SectionTitle>
            <SectionTitle><h3>Things I’ve built so far</h3></SectionTitle>
            <FlexWrapper justify={"space-around"}>
                <Work src={socialImg}
                      title={"Social network"}
                      text={"Современная социальная сеть, разработанная с использованием мощного фреймворка React, обеспечивает быстрый и плавный пользовательский опыт. Приложение позволяет пользователям создавать профили, делиться контентом, взаимодействовать с сообществом через лайки и комментарии, а также поддерживает удобный чат в реальном времени. Интуитивно понятный интерфейс, адаптивный дизайн и передовые функции безопасности ставят нашу социальную сеть в один ряд с лучшими платформами для обмена идеями и налаживания связей онлайн."}
                />
                <Work src={todolist}
                      title={"Todolist"}
                      text={"Элегантное и простое в использовании приложение 'ToDoList' на React создано, чтобы помочь вам организовать вашу повседневную жизнь. С его помощью вы легко управляете списками задач, отмечаете выполненные пункты и фильтруете задания для более эффективного планирования. Интерактивный интерфейс позволяет добавлять, редактировать и удалять задачи мгновенно, а также синхронизируется между устройствами. 'ToDoList' на React - это идеальный инструмент, чтобы сохранять фокус на важных заданиях и достигать целей каждый день."}
                />
                <Work src={cards}
                      title={"Card project"}
                      text={"Приложение 'Product Cards' на React представляет из себя инновационное решение для витрины товаров. Оно оснащено адаптивными карточками товара, которые эффективно демонстрируют продукцию с подробными описаниями, ценой и возможностью моментального добавления в корзину. Интуитивный UX/UI дизайн обеспечивает лёгкий выбор и сортировку товаров в соответствии с предпочтениями пользователя. Приложение разработано для повышения вовлеченности клиентов и ускорения процесса покупки, оптимизируя торговый опыт как для бизнеса, так и для потребителей."}
                />
            </FlexWrapper>
        </StyledWorks>
    );
};


const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #1B1B1B;
`