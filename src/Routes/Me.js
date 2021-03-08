import React, { useEffect, useRef, useState } from 'react' ;
import styled, { css } from 'styled-components' ;
import { Link } from 'react-router-dom' ;
import { withCookies } from 'react-cookie' ;
import Chart from 'chart.js' ;

import {
    WRITE
} from '../Util/routes' ;
import Image from '../Components/Me/Image' ;
import { connect } from 'react-redux';

import {
    axiosApi
} from '../Util/api' ;

const chartHeight = 300 ;

const Container = styled.div`

`;

const Button = styled.button`
    all : unset ;
    
    width : 150px ;
    height : 40px ;
    
    border-radius : 20px ;
    border : none ;

    background-color : #1de9b6 ;

    font-weight : 550 ;

    text-align : center ;

    margin-right : 10px ;
    cursor : pointer ;
`;

const ButtonContainer = styled.div`
    width : 100% ;
    height : 100px ;

    display : flex ;
    
    align-items : center ;
    justify-content : center ;
`;

const ImageContainer = styled.div`
    display : ${props => props.display} ;

    justify-content : center ;
`;

const DataContainer = styled.div`
    width : 100% ;

    overflow : hidden ;
`;

const ChartContainer = styled.div`
    width : 50% ;

    float : left ;

    padding : 40px 0 ;

    overflow : hidden ;
`;

const UserContainer = styled.div`
    width : 50% ;

    float : left ;

    padding : 40px 0 ;

    overflow : hidden ;
`;

const Title = styled.h4`
    float : left ;

    width : 100% ;
    margin-bottom : 40px ;
    text-align : center ;

    font-size : 22px ;
    user-select : none ;
`;

const ChartDataContainer = styled.div`
    width : 100% ;
    
    float : left ;
    
    display : flex ;
    align-items : center ;
    justify-content : center ;
`;

const CanvasContainer = css`
    width : 400px ;
    height : 300px ;
`;

const PieCanvasContainer = styled.div`
    ${CanvasContainer}
`;

const LineCanvasContainer = styled.div`
    ${CanvasContainer}
    margin : 0 auto ;
`;

const ChartLabelUl = styled.ul`
    width : 100px ;
    height : ${`${chartHeight}px`} ;

    display : flex ;
    
    flex-direction : column ;
    justify-content : center ;
`;

const ChartLabelLi = styled.div`
    width : 100% ;
    height : 30px ;

    display : flex ;
    align-items : center ;
`;

const Circle = styled.div`
    width : 20px ;
    height : 20px ;

    border-radius : 20px; 
    background-color : ${props => props.color} ;
`;

const Text = styled.span`
    display : block ;

    flex : 0.7 ;
    
    text-align : center ;
    font-size : 14px ;
    font-weight : 550 ;

    user-select : none ;
`;

const LineChartButtonContainer = styled.div`
    width : 100% ;
    
    float : left ;

    display : flex ;
    justify-content : center ;
    align-items : center ;
`;

const DateButton = styled.button`

    all : unset ;
    
    margin-top : 50px ;

    width : 100px ;
    height : 25px ;

    border-radius : 8px ; 
    background-color : #00695c ;
    color : #fff ;

    text-align : center ;

    &:not(:last-child) {
        margin-right : 10px ;
    }
`;

const Me = ({ contentType }) => {

    const chart_pie = useRef() ;
    const chart_line = useRef() ;

    const [ imgDisplay, setImgDisplay ] = useState(false) ;
    const [ lineData, setLineData ] = useState([]) ;
    const [ dateData, setDateData ] = useState([]) ;
    const [ selectLineChartMode, setSelectLineChartMode ] = useState(7) ;
    
    const buttonData = [
        {
            text : '7일',
            data : 6
        },
        {
            text : '30일',
            data : 29,
        },
    ]

    function getToday(day, now) {
        const nowData = new Date(now.getFullYear(), now.getMonth(), day) ;

        const dataYear = nowData.getFullYear();
        const dataMonth = ("0" + (1 + nowData.getMonth())).slice(-2) ;
        const dataDay = ("0" + nowData.getDate()).slice(-2) ;

        const date_array = [ dataYear, dataMonth, dataDay ] ;
    
        return date_array.join('-')
    }
    
    function onClickImageView(e) {
        
        setImgDisplay(imgDisplay ? false : true) ;
    }

    useEffect(() => {

        const ctx = chart_pie.current.getContext('2d') ;

        const chartData = {
            datasets: [{
                data : contentType.map(typeData => typeData.num),
                backgroundColor : contentType.map(typeData => typeData.color)
            }],
            labels : contentType.map(typeData => typeData.type)
        };

        new Chart(ctx, {
            type: 'doughnut',
            data: chartData,
            options : {
                legend : {
                    display : false
                },
            }
        }) ;

    }, [ contentType ]) ;


    useEffect(()=> {

        async function geVisitorNumData() {
            const { 
                data : {
                     result 
                    } 
            } = await axiosApi.visitorNum() ;
            
            setDateData(result.map((date) => ({ date : date.created_at.substring(0, 10) }))) ;
        }

        geVisitorNumData()

        return () => {
            setDateData([]) ;
        }

    }, []) ;

    useEffect(() => {

        const now = new Date() ;

        const day = Number(("0" + now.getDate()).slice(-2)) ;

        const arr = [] ;

        for(let i = selectLineChartMode ; i >= 0 ; i--) {
            const dateDay = day - i ;
            arr.push({date : getToday(dateDay, now), data : 0}) ;
        }

        dateData.reduce((prev, element) => {

            prev.forEach(date => {
                if(date.date === element.date)
                    date.data ++ ;
            }) ;
            return prev ;

        }, arr) ;

        setLineData(arr) ;
        
        const ctx = chart_line.current.getContext('2d') ;

        const chartData = {
            datasets: [{
                data : arr.map(date => date.data),
                borderColor: '#4db6ac',
                fill: true,
                lineTension: 0
            }],
            labels : arr.map(date => date.date.substring(5, date.date.length)),
        };

        new Chart(ctx, {
            type: 'line',
            data: chartData,
            options : {
                legend : {
                    display : false
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            max : 10,
                            min : 0
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }]
                }
            }
        }) ;

        return () => {
            setLineData([]) ;
        }
    }, [ dateData, selectLineChartMode ]) ;

    function dateButtonClick(e) {
        setSelectLineChartMode(e.target.value) ;
    }

    return (
        <Container>
            <ButtonContainer>
                <Link to={WRITE}>
                    <Button>글쓰기</Button>
                </Link>
                <Button onClick={onClickImageView}>이미지 관리</Button>
                <Button onClick={() => {}}>언어 관리</Button>
            </ButtonContainer>
            <ImageContainer display={imgDisplay ? 'flex' : 'none' }>
                <Image />
            </ImageContainer>
            <DataContainer>
                <ChartContainer>
                    <Title>게시물 언어 현황</Title>
                    <ChartDataContainer>
                        <PieCanvasContainer>
                            <canvas ref={chart_pie} width="400px" height={`${chartHeight}px`}/>
                        </PieCanvasContainer>
                        <ChartLabelUl>
                            {contentType.map((typeData, index) => 
                                <ChartLabelLi key={index}>
                                    <Circle 
                                        color={typeData.color}
                                    />
                                    <Text>{typeData.type}</Text>
                                </ChartLabelLi>
                            )}
                        </ChartLabelUl>
                </ChartDataContainer>
                </ChartContainer>
                <UserContainer>
                    <Title>일일 접속자</Title>
                    <LineCanvasContainer>
                        <canvas ref={chart_line} width="400px" height="300px"/> 
                    </LineCanvasContainer>
                    <LineChartButtonContainer>
                        { buttonData.map((data, index)=> 
                            <DateButton 
                                key={index} 
                                value={data.data}
                                onClick={dateButtonClick}
                            >{data.text}
                            </DateButton>
                        ) }
                    </LineChartButtonContainer>
                </UserContainer>
            </DataContainer>
        </Container>
    );
};

function mapStateToProps(state) {
    const { 
        content : { 
            contentType 
        } 
    } = state ;
  
    return {
        contentType : contentType.filter(typeData => typeData.num !== 0)
    } ;
} ;


export default connect(mapStateToProps, null)(withCookies(Me)) ;