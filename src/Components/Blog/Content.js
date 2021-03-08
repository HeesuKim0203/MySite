import React from 'react' ;
import styled from 'styled-components' ;
import { Link } from 'react-router-dom' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;

import {
    DOCUMENT
} from '../../Util/routes' ;
import { connect } from 'react-redux';

const Title = styled.h5`
    font-size : 16px ;
    font-weight : 550 ;

    width : 100% ;

    margin-top : 15px ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;

    font-family : 'Montserrat', sans-serif ;

    @media ${props => props.theme.laptop} {
        font-size : 15px ;
        margin-top : 10px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 13px ;
    }
`;

const Container = styled.div`
    width : 78% ;
    overflow : hidden ;

    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);

    cursor : pointer ;

    &:hover {
        ${Title} { 
            color : rgb(138, 37, 255) ;
            text-decoration : underline ;
        }
    }

    &:nth-child(3n-2) {
        margin-left : 10% ;
        @media ${props => props.theme.laptop} {
            margin-left : 12% ;
        }
        @media ${props => props.theme.mobileS} {
            margin-left : 20% ;
        }
    }
    &:nth-child(3n - 1) {
        margin-left : 5% ;
        @media ${props => props.theme.laptop} {
            margin-left : 7% ;
        }
        @media ${props => props.theme.mobileS} {
            margin-left : 20% ;
        }
    }

    @media ${props => props.theme.laptop} {
        width : 70% ;
    }
    @media ${props => props.theme.mobileS} {
        width : 60% ;

        &:nth-child(3n) {
            margin-left : 20% ;
        }
    }
`;

const Img = styled.div`
    width : 100% ;
    height : 220px ;
    
    background-image : url(${props=>props.url}) ;
    background-repeat : no-repeat ;
    background-size : cover ;

    float : left ; 

    @media ${props => props.theme.laptop} {
        height : 160px ;
    }
    @media ${props => props.theme.mobileS} {
        height : 140px ;
    }
`;

const Code = styled.div`
    position : absolute ;
    top : 0 ;
    right : 0 ;
`;

const TextContainer = styled.div`
    width : 100% ;

    padding : 12px ;

    float : left ;

    @media ${props => props.theme.laptop} {
        padding : 10px 7px ;
    }
    @media ${props => props.theme.mobileS} {
        padding : 6px 3px ;
    }

`;

const HeadContainer = styled.div`
    width : 100% ;

    position : relative ;
`;

const Date = styled.span`
    color : #bdbdbd ;
    font-size : 11px ;

    padding-left : 5px ;

    user-select : none ;

    font-family : 'Montserrat', sans-serif ;

    @media ${props => props.theme.laptop} {
        font-size : 7px ;
    }
    @media ${props => props.theme.mobileS} {
        padding-left : 3px ;
    }
`;

const TitleContainer = styled.div`
    width : 100% ;
    float : left ;
`;


const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size : 20px ;

    @media ${props => props.theme.laptop} {
        font-size : 18px ;
    }
    @media ${props => props.theme.laptop} {
        font-size : 13px ;
    }
`;

const Content = ({ content }) => {
    const { id, title, image_url, updated_at } = content ;

    // index 찾는 코드

    return (
        <Container>
            <Link to={`${DOCUMENT}/${id}`}>
                <Img url={image_url} />
                <TextContainer>
                    <HeadContainer>
                        <Date draggable="false">{updated_at && updated_at.substring(0, 10)}</Date>
                        <Code>
                            <StyleFontAwesomeIcon icon={fab.faJsSquare} />
                        </Code>
                    </HeadContainer>
                    <TitleContainer>
                        <Title draggable="false">{title}</Title>
                    </TitleContainer>
                </TextContainer>
            </Link>
        </Container>
    );
};

function mapStateToProps(state) {
    const { 
        content : {
            defaultData
        } 
    } = state ;

    // const { 
    //     content : { 
    //         id : findId 
    //     },
    //     content
    // } = oneToProp ;

    // const id = defaultData.findIndex(content => content.id === findId) ;

    return {
        // content : {
        //     ...content,
        //     id : findId
        // }
    } ;
} ;
  
  
export default  connect(mapStateToProps, null)(Content) ;