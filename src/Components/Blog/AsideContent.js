import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;

const Title = styled.h6`
    font-size : 22px ;
    font-weight : 700 ;

    color : #424242 ;

    user-select : none ;

    @media ${props => props.theme.laptop} {
        font-size : 20px ;
    }
    @media ${props => props.theme.mobileL} {
        text-align : center ;
        font-size : 0px ;
    }
    @media ${props => props.theme.mobileS} {
       
    }
`;

const BigAisdeMenu = styled.li`
    width : 100% ;
    margin-top : 40px ;

    color : #9e9e9e ;

    user-select : none ;

    cursor : pointer ; 

    @media ${props => props.theme.mobileL} {
        margin-top : 0px ;
    }
    @media ${props => props.theme.mobileS} {
       
    }
`;

const AsideMenu = styled.ul`
    @media ${props => props.theme.mobileL} {
        display : flex ;
        flex-wrap : wrap ;
    }
`;

const Menu = styled.li`
    width : 100% ;

    padding : 15px ;

    display : flex ;

    align-items : center ;

    &:first-child {
        margin-top : 20px ;
    }

    &:hover {
        background-color : #e8eaf6 ;
        color : #3949ab ;
    }

    @media ${props => props.theme.mobileL} {
        width : 50% ;
        font-size : 10px ;
        &:first-child {
            margin-top : 0px ;
        }
        padding : 8px ;
        text-align : center ;
    }
    @media ${props => props.theme.mobileS} {
       
    }
`;

const FontContainer = styled.div`
    width : 30px ;
    height : 30px ;

    display : flex ;

    align-items : center ;
    justify-content : center ;

    @media ${props => props.theme.laptop} {
        height : 25px ;
    }
    @media ${props => props.theme.mobileL} {
        height : 10px ;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`

    font-size : 28px ;

    font-weight : 700 ;

    @media ${props => props.theme.mobileL} {
        font-size : 11px
    }
`;

const Text = styled.span`
    display : inline-block ;

    padding-left : 20px ;

    font-size : 16px ;

    font-weight : 650 ;

    @media ${props => props.theme.mobileL} {
        font-size : 11px ;
        padding-left : 10px ;
    }
`;

const AsideContent = ({ title, menu }) => {
    
    return (
        <BigAisdeMenu>
            <Title>{title}</Title>
            <AsideMenu>
                { menu && menu.map((menu, index) => 
                    <Menu key={index}>
                        <FontContainer>
                            <StyledFontAwesomeIcon icon={menu.icon}/>
                        </FontContainer>
                        <Text>{menu.text}</Text>
                    </Menu>
                )}
            </AsideMenu>
            
        </BigAisdeMenu>
    );
};

export default AsideContent;