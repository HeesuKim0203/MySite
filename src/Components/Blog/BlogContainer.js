import React from 'react' ;
import styled from 'styled-components' ;

import Content from './Content' ;

const Container = styled.div`
    width : 100% ;
    
    display : ${props => props.display} ;
    
    grid-template-columns : repeat(3, 33.33%) ;
    grid-row-gap : 50px ;

    @media ${props => props.theme.mobileS} {
        grid-template-columns : repeat(1, 100%) ;
        grid-row-gap : 20px ;
    }
`;

const BlogContainer = ({ content, select }) => {
    return (
        <Container
            display={select ? 'grid' : 'none' }
        >
            { content && content.map((content, index) => (
                <Content 
                    key={index}
                    content={content}
                />
            )) }
        </Container>
    );
};

export default BlogContainer;