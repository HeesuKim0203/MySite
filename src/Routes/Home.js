import React, { useEffect, useState, memo } from 'react' ;
import styled, { css } from 'styled-components' ;
import { withCookies } from 'react-cookie' ;
import Helmet from 'react-helmet' ;
import Project from './Project' ;
import UseLanguage from '../Components/Home/UseLanguage' ;

import Slide from '../Components/Slide' ;

import { size } from '../Util/theme' ;
import AOS from 'aos' ;
import "aos/dist/aos.css" ;

const Container = styled.div`
    width : 90% ;

    margin : 0 auto ;        

    overflow : hidden ;     

    @media ${props => props.theme.mobileS} {
        width : 100% ;
    }
`;

const ContentContainer = styled.div`
    width : 100% ;

    float : left ;
    
    overflow : hidden ;

    margin-top : 60px ;
    padding : 20px ;

    &:nth-child(2) {
        // slideContainer margin-top과 같이 변경
        margin-top : 160px ;

        @media ${props => props.theme.mobileL} {
            margin-top : 140px ;
        }

    }
    @media ${props => props.theme.laptop} {
        margin-top : 10px ;
        padding : 10px ;
    }
    @media ${props => props.theme.mobileL} {
        padding : 0 ;
    }
`;

const SlideContainer = styled.div`
    width : 100% ;

    float : left ;

    overflow : hidden ;

    // contentContainer margin-top과 같이 변경    
    margin-top : 200px ;

    @media ${props => props.theme.mobileL} {
        margin-top : 180px ;
    }
`;

const SlideDataContainer = styled.div`
    margin-top : 45px ;

    width : 100% ;

    float : left ;
`;

const SlideTextContainer = styled.div`
    width : 100% ;
    float : left  ;
`;

const flexLanguageWidth = css`
    width : 40% ;
    @media ${props => props.theme.laptop} {
        height : 220px ;
        width : 100% ;
    }
    @media ${props => props.theme.mobileS} {
        height : 170px ;
    }
`;

const LanguageDataContainer = styled.div`
    float : left ;
    ${flexLanguageWidth}
    height : 300px ;

    margin-left : 10% ;

    display : flex ;
    
    align-items : center ;

    @media ${props => props.theme.laptop} {
        margin-left : 0 ;
    }
`;

const ProjectDataContainer = styled.div`
    width : 100% ;
    float : left ;
`;

const LanguageTextContainer = styled.div`
    float : left ;

    ${flexLanguageWidth}
    height : 300px ;
    margin-left : 5% ;

    overflow : hidden ;

    display : flex ;

    flex-direction : column ;
    justify-content : center ;
    align-items : center ;

    @media ${props => props.theme.laptop} {
        margin-left : 0 ;
    }
`;

const ProjectTextContainer = styled.div`

    width : 100% ;
    float : left ;

    margin-bottom : 80px ;

    @media ${props => props.theme.laptop} {
        margin-bottom : 40px ;
    }
`;

const Title = styled.h3`
    width : 100% ;
    font-size : 28px ;

    text-align : center ;

    user-select : none ;

    @media ${props => props.theme.mobileL} {
        font-size : 24px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 20px ;
    }
`;

const Text = styled.p`
    font-size : 12px ;

    text-align : center ;
    padding : 5px 3px ;

    user-select : none ;

    @media ${props => props.theme.mobileL} {
        font-size : 11px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 9px ;
    }
`;

const FixMenu = styled.div`
    display : none ;
    position : fixed ;

    bottom : 300px ;
    left : 5px ;

    width : 20px ;

    border-radius : 20px ;

    padding : 10px ;
    z-index : 10 ;

    flex-direction : column ;
    justify-content : center ;
    align-items : center ;

    @media ${props => props.theme.mobileS} {
        display : block ;
    }
`;

const Button = styled.div`
    width : 20px ;
    height : 20px ;
    
    border-radius : 20px ;
    
    background-color : #111 ;
    opacity : 0.6 ;

    &:not(:last-child) {
        margin-bottom : 10px ;
    }
`;

const Home = () => {

    useEffect(() => {
        AOS.init() ;
      }, []) ;

      function moveScroll(y) {
        window.scroll({
            behavior : 'smooth',
            top : y
        }) ;
      }

      function onClickScroll1(e) {
        moveScroll(0) ;
      }
      function onClickScroll2(e) {
        moveScroll(670) ;
      }
      function onClickScroll3(e) {
        moveScroll(1300) ;
      }

    return (
        <>
            <Helmet>
                <title>Code beginner | Home</title>
            </Helmet>
            <FixMenu>
                <Button onClick={onClickScroll1} />
                <Button onClick={onClickScroll2} />
                <Button onClick={onClickScroll3} />
            </FixMenu>
            <Container>
                <ContentContainer>
                    <LanguageTextContainer>
                        <Title>Skills</Title>
                        <Text>제가 현재 쓸 수 있는 개발 스택입니다.</Text>
                        <Text>개발 경험이 있어서 지식을 갖추고 있습니다.</Text>
                    </LanguageTextContainer>
                    <LanguageDataContainer>
                        <UseLanguage />
                    </LanguageDataContainer>
                </ContentContainer>
                <ContentContainer>
                    <ProjectTextContainer
                        data-aos="fade-up" 
                        data-aos-offset="100" 
                        data-aos-easing="ease-in-out" 
                        data-aos-duration="600"
                        data-aos-once="true"
                    >
                        <Title>Project</Title>
                        <Text>제가 현재까지 진행한 개인 프로젝트 입니다.</Text>
                        <Text>마우스를 올리면 설명이 나옵니다.</Text>
                        <Text>클릭 시 Git으로 이동합니다.</Text>
                    </ProjectTextContainer>
                    <ProjectDataContainer
                        data-aos="fade-up" 
                        data-aos-offset="120" 
                        data-aos-easing="ease-in-out" 
                        data-aos-duration="600"
                        data-aos-once="true"
                    >
                        <Project />
                    </ProjectDataContainer>
                </ContentContainer>
                <SlideContainer>
                    <SlideTextContainer
                        data-aos="fade-up" 
                        data-aos-offset="70" 
                        data-aos-easing="ease-in-out" 
                        data-aos-duration="600"
                        data-aos-once="true"
                    >
                            <Title>Blog</Title>
                            <Text>저의 게시물 입니다.</Text>
                            <Text>정보 공유와 저의 성장을 기록하기 위해서 만들었습니다.</Text>
                    </SlideTextContainer>
                    <SlideDataContainer
                        data-aos="fade-up" 
                        data-aos-offset="110" 
                        data-aos-easing="ease-in-out" 
                        data-aos-duration="600"
                        data-aos-once="true"
                    >
                        <Slide />
                    </SlideDataContainer>
                </SlideContainer>
            </Container>
        </>
    );
};

export default withCookies(memo(Home)) ;