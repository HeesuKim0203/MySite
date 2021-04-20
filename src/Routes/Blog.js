import { useState, useEffect } from 'react' ;
import styled from 'styled-components' ;

import BlogContainer from '../Components/Blog/BlogContainer' ; 
import { connect } from 'react-redux';
import ButtonContainer from '../Components/Blog/ButtonContainer' ;
import Message from '../Components/Message' ;
import Seo from '../Components/Seo';
import { DOCUMENT } from '../Util/routes';

const Container = styled.main`
    width : 100% ;

    overflow : hidden ;
`;

const ContentContainer = styled.section`
    float : left ;

    width : 100% ;
    padding : 40px 10px ;

    margin-top : 68px ;

    @media ${props => props.theme.mobileL} {
        padding : 20px 5px ;
    }
    @media ${props => props.theme.mobileS} {
        margin-top : 0 ;
        padding : 0 ;
    }
`;

const Blog = ({ contentsData, select }) => {

    const [ error, setError ] = useState(false)  ;

    useEffect(() => {

        if(contentsData.length === 0) {
            setError("게시물이 존재하지 않습니다.") ;
        }else {
            setError(false) ;
        }

    }, [ contentsData ]) ;

    return (
        <>
            <Seo 
                title={"초심자도 따라 할 수 있는 프로그래밍 지식"}
                url={DOCUMENT}
                description={"제가 알고 있는 프로그래밍 지식에 대해 씁니다."}
            />
            <Container>
                { error && error ? (<Message mode="error" text={error} />) : null }
                <ContentContainer>
                    { contentsData && contentsData.map((content, index) => {
                        return select === index ? (
                            <BlogContainer 
                                key={index}
                                content={content}
                                select={true}
                                error={error}
                            />
                        ) : (
                            <BlogContainer 
                                key={index}
                                content={content}
                            />
                        )
                    })}
                </ContentContainer>
                <ButtonContainer />
            </Container>
        </>
    );
};

export default  connect(
    ({ 
        content : {
             contentsData, select
        } 
    }) => ({
        contentsData,
        select
    }), 
    null
)(Blog);