var saleChart1 = echarts.init(document.getElementById('sale-chart-1'));
var saleChart2 = echarts.init(document.getElementById('sale-chart-2'));
var saleChart3 = echarts.init(document.getElementById('sale-chart-3'));
var saleChart4 = echarts.init(document.getElementById('earn-chart-1'));
var saleChart5 = echarts.init(document.getElementById('earn-chart-2'));
var saleChart6 = echarts.init(document.getElementById('earn-chart-3'));
var saleChart7 = echarts.init(document.getElementById('earn-chart-4'));
var saleChart8 = echarts.init(document.getElementById('earn-chart-5'));
var saleChart9 = echarts.init(document.getElementById('earn-chart-6'));
saleChart1.setOption({
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top:0,
        containLabel: false
    },
    textStyle:{
        fontFamily:'Poppins',
        fontWeight:'500'
    },
    xAxis: [
        {
            show: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            type: 'category',
            boundaryGap: false,
            data: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '16',
                '17',
                '18',
                '19',
                '20'
            ]
        }
    ],
    yAxis: [
        {
            show: false,
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Sales',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            symbolSize: 0,
            areaStyle: {
                normal: {}
            },
            itemStyle: {
                normal: {
                    color: '#5867c3'
                }
            },
            data: [
                50,
                40,
                45,
                43,
                30,
                10,
                30,
                10,
                40,
                50,
                30,
                60,
                55,
                50,
                60,
                50,
                70,
                50,
                40,
                45,
                60
            ]
        }

    ]
})
saleChart2.setOption({
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: false
    },
    textStyle:{
        fontFamily:'Poppins',
        fontWeight:'500'
    },
    xAxis: [
        {
            show: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            type: 'category',
            boundaryGap: false,
            data: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '16',
                '17',
                '18',
                '19',
                '20'
            ]
        }
    ],
    yAxis: [
        {
            show: false,
            type: 'value',
            max:100
        }
    ],
    series: [
        {
            name: 'Sales',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            symbolSize: 0,
            areaStyle: {
                normal: {}
            },
            itemStyle: {
                normal: {
                    color: '#00c5dc'
                }
            },
            data: [
                100,
                50,
                35,
                72,
                60,
                65,
                100,
                90,
                100,
                69,
                60,
                100,
                25,
                28,
                75,
                90,
                65,
                45,
                40,
                75,
                100
            ]
        }

    ]
})
saleChart3.setOption({
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: false
    },
    textStyle:{
        fontFamily:'Poppins',
        fontWeight:'500'
    },
    xAxis: [
        {
            show: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            type: 'category',
            boundaryGap: false,
            data: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '16',
                '17',
                '18',
                '19',
                '20'
            ]
        }
    ],
    yAxis: [
        {
            show: false,
            type: 'value',
            max:100
        }
    ],
    series: [
        {
            name: 'Sales',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            symbolSize: 0,
            areaStyle: {
                normal: {}
            },
            itemStyle: {
                normal: {
                    color: '#ff525e'
                }
            },
            data: [
                90,
                50,
                35,
                49,
                62,
                82,
                80,
                70,
                100,
                68,
                40,
                80,
                100,
                88,
                36,
                90,
                72,
                50,
                100,
                65,
                90
            ]
        }

    ]
})
saleChart4.setOption({
    baseOption:{
    color: [
        "#00bcd5", "#eef4f7"
    ],
    textStyle: {
        fontFamily: 'Poppins',
        fontWeight: '500'
    },
    title: [{
        left: '5%',
        top: '20%',
        text: 'Total Earned',
        subtext: '$571,324',
        textStyle: {
            color: '#fff',
            fontSize: '20',
        },
        subtextStyle: {
            color: '#fff',
            fontSize: '40'
        }
    }, {
        top: '20%',
        left: '55%',
        text: 'Total Spent',
        subtext: '$784,166',
        textStyle: {
            color: '#849da9',
            fontSize: '20'
        },
        subtextStyle: {
            color: '#849da9',
            fontSize: '40'
        }
    }],
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        containLabel: false
    },
    xAxis: [{
        show: false,
        type: 'value'
    }, {
        show: false,
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        type: 'category',
        boundaryGap: false,
        data: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '16',
            '17',
            '18'
        ]
    }],
    yAxis: [{
        show: false,
        type: 'category',
        data: ['Money']
    }, {
        show: false,
        type: 'value'
    }],
    series: [{
        name: 'Earned',
        type: 'bar',
        stack: '1',
        data: ["1000"],
        barWidth: '100%',
        barMinHeight: '100%'
    }, {
        name: 'Spent',
        type: 'bar',
        stack: '1',
        data: ["1500"],
        barWidth: '100%',
        barMinHeight: '100%'
    }, {
        name: 'Sales',
        type: 'line',
        smooth: false,
        xAxisIndex: 1,
        yAxisIndex: 1,
        lineStyle: {
            normal: {
                width: 0
            }
        },
        symbolSize: 0,
        areaStyle: {
            normal: {}
        },
        itemStyle: {
            normal: {
                color: '#dae6ec'
            }
        },
        data: [
            1,
            4,
            3,
            2,
            4,
            2,
            3,
            1,
            4,
            5,
            3,
            2,
            4,
            5,
            2,
            3,
            4,
            2,
            10
        ]
    }]
},media: [
    {
        query: {
            minAspectRatio: 1
        },
        option: {
            title: [{
                left: '5%',
                top: '20%',
                
                textStyle: {
                   
                    fontSize: '20'
                },
                subtextStyle: {
                   
                    fontSize: '40'
                }
            }, {
                top: '20%',
                left: '55%',
                
                textStyle: {
                   
                    fontSize: '20'
                },
                subtextStyle: {
                  
                    fontSize: '40'
                }
            }],
        }
    }, {
        query: {
            maxWidth: 500
        },
        option: {
            title: [{
                left: '4%',
                textStyle: {
                   
                    fontSize: '10'
                },
                subtextStyle: {
                   
                    fontSize: '20'
                }
            }, {
              
                left: '53%',
                
                textStyle: {
                   
                    fontSize: '10'
                },
                subtextStyle: {
                  
                    fontSize: '20'
                }
            }],
        }
    }
]})
saleChart5.setOption({
    color: [
        "#5867c3", "#00bcd5"
    ],
    textStyle:{
        fontFamily:'Poppins',
        fontWeight:'500'
    },
    title: {
        text: '168,215',
        left: '0',
        textAlign: 'left',
        textStyle: {
            fontSize: 36
        }

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [
            5, 10
        ],
        textStyle: {
            color: '#7588E4'
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        left: 0,
        top: '10%',
        orient: 'horizontal',
        data: [
            {
                name: 'Day Time',
                icon: 'circle'
            }, {
                name: 'Night Time',
                icon: 'circle'
            }
        ]
    },
    xAxis: {
        show: false,
        type: 'category',
        data: [
            '00:00',
            '2:00',
            '4:00',
            '6:00',
            '8:00',
            '10:00',
            '12:00'
        ],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    yAxis: {

        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#d9e5ea']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [
        {
            name: 'Day Time',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: [
                '0',
                '10',
                '0',
                '10',
                '0',
                '60',
                '70'
            ],
            itemStyle: {
                normal: {
                    color: '#5867c3'
                }
            },
            lineStyle: {
                normal: {
                    width: 5
                }
            }
        }, {
            name: 'Night Time',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: [
                '10',
                '0',
                '10',
                '0',
                '10',
                '40',
                '60'
            ],

            itemStyle: {
                normal: {
                    color: '#00bcd5'
                }
            },
            lineStyle: {
                normal: {
                    width: 5
                }
            }
        }
    ]
});
saleChart6.setOption({
    textStyle:{
        fontFamily:'Poppins',
        fontWeight:'500'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [
            5, 10
        ],
        textStyle: {
            color: '#7588E4'
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    xAxis: {
        show: false,
        type: 'category',
        data: [
            '04:00am',
            '06:00am',
            '08:00am',
            '10:00am',
            '12:00am',
            '14:00pm',
            '16:00pm'
        ],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    yAxis: {
        boundaryGap: false,
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            show: false,
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [
        {
            name: 'a',
            type: 'line',
            smooth: false,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: [
                '0',
                '550',
                '200',
                '550',
                '350',
                '350',
                '0'
            ],
            areaStyle: {
                normal: {
                    color: '#5867c3'
                }
            },
            itemStyle: {
                normal: {
                    color: '#5867c3',
                    opacity: 1
                }
            },
            lineStyle: {
                normal: {
                    width: 0
                }
            }
        }, {
            name: 'b',
            type: 'line',
            smooth: false,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: [
                '0',
                '450',
                '200',
                '500',
                '200',
                '450',
                '0'
            ],
            areaStyle: {
                normal: {
                    color: '#ff525e',
                    opacity: 1
                }
            },
            itemStyle: {
                normal: {
                    color: '#ff525e'
                }
            },
            lineStyle: {
                normal: {
                    width: 0
                }
            }
        }, {
            name: 'c',
            type: 'line',
            smooth: false,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: [
                '0',
                '300',
                '150',
                '400',
                '250',
                '350',
                '0'
            ],
            areaStyle: {
                normal: {
                    color: '#00c5dc',
                    opacity: 1
                }
            },
            itemStyle: {
                normal: {
                    color: '#00c5dc'
                }
            },
            lineStyle: {
                normal: {
                    width: 0
                }
            }
        }
    ]
})
saleChart7.setOption({
    textStyle:{
        fontFamily:'Poppins',
        fontWeight:'500'
    },
    graphic: {

        type: 'image',
        id: 'logo',
        right: 20,
        top: 100,
        z: 10,
        style: {
            image: '../assets/img/pulse.png',
            width: 100,
            height: 100,
            opacity: 1,
            fill:'#fff'
        }

    },
    series: [
        {
            type: 'liquidFill',
            data: [1],
            radius: '95%',
            center: [
                '50%', '40%'
            ],
            outline: {
                show: false
            },

            color: ["#7a86d0"],
            backgroundStyle: {
                borderColor: '#7a86d0',
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 10
            },
            shape: 'path://m769 186c-0.55-7.15 5.25-10.51 6.7-17 4.11-18.46-12.67-23.11-26.7-26l10-4' +
                'c-0.01-2.65 0.19-5.48-0.86-7.98-8.06-19.35-31.3-2.32-44.14-3.14-7.84-0.5-11.2-7.' +
                '48-20-4.88l4-8-30 19.62-20-3.62c0.91-17.54 23.22-16.09 28-31-9.14 0-19.09 0.41-2' +
                '8-1.924-6.63-1.738-12.36-6.023-19-7.547-5.38-1.233-12.24 2.182-16.98 0.188-8.15-' +
                '3.423-3.79-20.1-12-20.341-5.5-0.16-8.27 8.004-13.02 10.11-7.76 3.434-20.57 4.41-' +
                '29 4.51-85.2 1.013-173.66 4.75-258-8.271-29.92-4.618-58.4-16.615-88-22.725-0.03 ' +
                '10.891-2.28 26.012-14 30l6-12h-3c2.86-11.549-2.76-13.458-13-18.742-3.26-1.681-10' +
                '.01-6.297-12.97-1.936-4.27 6.276 0.17 18.83 0.59 25.678 0.48 7.823-2.28 17.488-4' +
                '.36 25-3.86 13.89-8.62 28.88-14.57 42-2.98 6.56-8.27 12.12-10.47 19-3.45 10.78-0' +
                '.55 23.03-3.84 34-4.93 16.44-13.17 28.01-10.8 46 1.46 11.13-1.22 39.44 10.63 45.' +
                '95 2.8 1.54 6.75-0.05 9.79 0.05v2c-16.66 5.73 1.64 20.52 1.23 30-0.62 14.47 8.25' +
                ' 22.67 11.24 36 1.87 8.36-3.63 13.39 2.83 21 10.73 12.64 27.46 18.13 38.49 30.09' +
                ' 5.19 5.64 4.77 16.39 9.94 20.97 8.41 7.46 26.23 2.01 36.13 6.67 3.68 1.73 5.6 6' +
                '.49 9.14 8.83 12.76 8.43 26.74 15.26 40 22.86 6.96 3.99 14.76 10.06 23 10.54 14.' +
                '12 0.81 34.3 3.17 48-0.28 3.85-0.97 5.65-4.65 9.17-6.08 4.84-1.96 18.83-2.02 23.' +
                '65 0 6.06 2.55 11 14.02 14.37 19.4 7.31 11.67 18.03 25.4 28.81 34 3.33 2.65 7.67' +
                ' 7.22 11.96 8.12 3.77 0.8 6.13-3.51 9.06-5.11 8.25-4.53 17.18-13.18 26.98-8.9 9.' +
                '5 4.15 13.9 19.37 18.78 27.89 3.84 6.69 9.98 12.13 14.94 18 12.26 14.5 27.46 39.' +
                '61 50.22 35.85 7.64-1.26 1.86-13.48 0.39-17.85-4.33-12.89-4.24-28.77 7.77-38.21 ' +
                '7.63-5.99 18.6-4.81 25.56-12.09 3.78-3.96 4.73-9.65 6.34-14.7l28-4.58 37 12.58v-' +
                '11h2l2 21 13-6.83 14 8.83-5-13c3.51 2.39 21.87 16.56 25.34 7.7 2.44-6.23-13.53-9' +
                '.14-17.34-10.7 1.43-2.09 3.02-3.98 4.54-6 0.71-0.95 1.51-1.93 2.03-3 5.66-11.77-' +
                '8.31-4.74-12.57-5.28-3.09-0.4-5.71-2.84-8-4.72 5.58-1.33 11.55-0.1 17-1.8 4.17-1' +
                '.3 7.02-4.75 11-6.34 5.78-2.31 10.48 0.3 13-6.86 12.08 8.25 16.21-2.22 28-2.22 9' +
                '.2 0 15.5 10.54 24 11.83 8.59 1.29 13.37-8.27 21-9.9 3.72-0.8 18.35 7.46 21.85 1' +
                '0.11 6.95 5.26 1.45 18.8 3.66 26.18 1.75 5.82 7.54 10.88 10.79 16 5.04 7.91 7.72' +
                ' 17.89 14.03 24.91 3.06 3.41 7.27 5.25 10.63 8.3 7.07 6.41 16.73 20.16 24.24 3.7' +
                '9 9.05-19.75-1.3-37.95-9.05-56-2.29-5.32-3.39-12.89-6.33-17.62-3.08-4.97-9.1-8.5' +
                '-12.66-13.38-9.54-13.08-15.02-32.22-10.13-48 2.45-7.95 5.33-16.78 11.07-22.98 5.' +
                '27-5.69 12.75-8.82 17.48-15.02 4.03-5.29 4.19-12.36 7.51-18 3.21-5.46 9.48-5.36 ' +
                '12.9-9.7 2.68-3.42 1.53-8.63 4.33-12.3 6.48-8.48 21.04-7.98 23.68-19h-7c2.1-7.45' +
                ' 23.75-23.8 2-24-0.04-14.3-5.56-20.75-10.89-33-2.68-6.16-3.47-12.93-6.37-19-4.68' +
                '-9.77-13.42-18.22-4.74-28-1.66 8.99 2.38 11.43 5.99 19 1.5 3.16 0.67 6.58 3.33 9' +
                '.24 4.31 4.31 10.84 6.78 13.41 12.76 1.98 4.59-1.26 10.32-1.73 15 10.09-2.92 12.' +
                '56-29.92 7.26-37.91-4.05-6.1-12.33-8.65-11.26-17.09l2 5c8.71-2.82 9.57-27.05 4-3' +
                '3v-1c8.19-4.7 23.36-8.42 25-19l-18 7c3.93-13.99 25.82-20.14 35.3-29.73 3.14-3.17' +
                ' 15.36-10.73 4.7-14.27l-2 7h-1l-10-8c0-11.42-1.76-24.34 3.19-35 4.22-9.1 14.25-1' +
                '3.16 14.81-24 4.83-0.375 24.3-14.656 23.7-20.004-0.9-6.957-8.4-10.337-11.3-16.08' +
                '6-3.93-7.956-1-20.149-11.4-24.168-3.2-1.237-6.71-0.358-10-1.041-2.96-0.614-5.82-' +
                '2.992-8.96-2.04-5.41 1.642-7.85 9.647-9.62 14.339-5.12 13.625-2.02 32.81-12.63 4' +
                '3.816-15.71 16.294-43.51 12.684-58.7 28.224-4.67 4.78-14.36 17.1-15.25 23.79-0.8' +
                '5 6.41 6.8 9.86 2.15 17.11-7.79 12.16-27.09 3.97-35.39 12.76-4.47 4.75 4.02 9.74' +
                ' 1.85 15.3-4.11 10.52-15.65 19.99-24.45 26.52-3.48 2.59-7.21 4.93-11 7.04-4.86 2' +
                '.7-18.77 8.35-19.81-1.6-0.61-5.83 4.57-9.8 6.16-14.96 1.81-5.88 0.27-12.31-1.35-' +
                '18-1.35-4.74-3.88-12.7-10-12.7-6.16 0-10.66 8.21-16 10.7z',
            label: {
                normal: {
                    position: [
                        '60%', '40%'
                    ],
                    formatter: function () {
                        return '';
                    },
                    textStyle: {
                        fontSize: 10,
                        color: '#50514F'
                    }
                }
            }
        }
    ]

})

saleChart8.setOption(
    {
        textStyle:{
            fontFamily:'Poppins',
            fontWeight:'500'
        },
        color: ['#00c5dc', '#5867c3'],
        xAxis: {
            show: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
        },
        yAxis: {
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
        series: [
    
            {
                type: 'bar',
                stack: '1',
                barWidth: '20',
                data: [55, 48, 34, 65, 78, 65, 55, 35, 28, 28, 30, 35, 40, 45]
            }, {
                type: 'bar',
                stack: '1',
                data: [70, 77, 35, 80, 90, 90, 65,35,30,35,50,65,65,80]
            }
        ]
    }
)
saleChart9.setOption(
    {
        textStyle:{
            fontFamily:'Poppins',
            fontWeight:'500'
        },
        color: ['#00c5dc', '#5867c3', '#ff525e', '#ffaa00', '#ffdb03'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: '0',
            data: [{
                name: '6% Clothing',
                icon: 'circle'
            }, {
                name: '32% Food Produce',
                icon: 'circle'
            }, {
                name: '24% Electronics',
                icon: 'circle'
            }, {
                name: '26% Kitchen Utility',
                icon: 'circle'
            }, {
                name: '12% Gardening',
                icon: 'circle'
            }]
    
        },
        series: [{
            name: 'Department Sales',
            type: 'pie',
            radius: ['40%', '55%'],
    
            data: [{
                value: 6,
                name: '6% Clothing'
            }, {
                value: 32,
                name: '32% Food Produce'
            }, {
                value: 24,
                name: '24% Electronics'
            }, {
                value: 26,
                name: '26% Kitchen Utility'
            }, {
                value: 12,
                name: '12% Gardening'
            }]
        }]
    }
)
