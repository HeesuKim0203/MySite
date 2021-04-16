import styled from 'styled-components' ;

const ContainerMessage = styled.div`
    width : 100% ;
    
    height : 400px ;
    
    display : flex ;
    justify-content : center ;
    align-items : center ;

    font-size : 18px ;
    color : red ;
`;

const Message = ({ mode, text }) => {

    return (
        <>
            {mode ? (
            <ContainerMessage>
                {text}
            </ContainerMessage>) : (
                <>
                </>
            )}
        </>
    );
};

export default Message;