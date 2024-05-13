$(window).load(function() {
    $(".loading").fadeOut()
});
$(function() {
    i();
    j();
    k();
    l();
    // m();
    n();
    o();
    p(); 
   
    function i() {
        
        var a = echarts.init(document.getElementById("echart1"));
       
        // var maskImage = new Image()
        // maskImage.src = "data:image/png;base64,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"
        var option = {
            series: [{
                type: 'wordCloud',
                shape: 'circle',
                keepAspect: false,
                //此处添加图片的base64格式
                // maskImage: maskImage,
                left: 'center',
                
                width: '110%',
                height: '100%',
                right: null,
                bottom: null,
                sizeRange: [18, 60],
                rotationRange: [-90, 90],
                rotationStep: 45,
                gridSize: 8,
                drawOutOfBound: false,
                shrinkToFit: true,
                layoutAnimation: false,
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    // focus: 'self',
                    textStyle: {
                        textShadowBlur: 5,
                        textShadowColor: '#333'
                    }
                },
                data:[
                    {name: "Windows NT", value: 1377777},  
                    {name: "Windows 98", value: 129518},  
                    {name: "Windows 95", value: 89805},  
                    {name: "未知操作系统", value: 88950},  
                    {name: "Linux", value: 55347},  
                    {name: "Windows 2000", value: 184},  
                    {name: "Windows XP", value: 80},  
                    {name: "Windows 32", value: 58},
                    {name: "Windows NT", value: 1377777},  
                    {name: "Windows 98", value: 129518},  
                    {name: "Windows 95", value: 89805},  
                    {name: "未知操作系统", value: 88950},  
                    {name: "Linux", value: 55347},  
                    {name: "Windows 2000", value: 184},  
                    {name: "Windows XP", value: 80},  
                    {name: "Windows 32", value: 58},
                        
                    {name: "Windows NT", value: 1377777},  
                    {name: "Windows 98", value: 129518},  
                    {name: "Windows 95", value: 89805},  
                    {name: "未知操作系统", value: 88950},  
                    {name: "Linux", value: 55347},  
                    {name: "Windows 2000", value: 184},  
                    {name: "Windows XP", value: 80},  
                    {name: "Windows 32", value: 58},
                        
                    {name: "Windows NT", value: 1377777},  
                    {name: "Windows 98", value: 129518},  
                    {name: "Windows 95", value: 89805},  
                    {name: "未知操作系统", value: 88950},  
                    {name: "Linux", value: 55347},  
                    {name: "Windows 2000", value: 184},  
                    {name: "Windows XP", value: 80},  
                    {name: "Windows 32", value: 58},
                    {name: "Windows NT", value: 1377777},  
                    {name: "Windows 98", value: 129518},  
                    {name: "Windows 95", value: 89805},  
                    {name: "未知操作系统", value: 88950},  
                    {name: "Linux", value: 55347},  
                    {name: "Windows 2000", value: 184},  
                    {name: "Windows XP", value: 80},  
                    {name: "Windows 32", value: 58},
                    {name: "Windows NT", value: 1377777},  
                    {name: "Windows 98", value: 129518},  
                    {name: "Windows 95", value: 89805},  
                    {name: "未知操作系统", value: 88950},  
                    {name: "Linux", value: 55347},  
                    {name: "Windows 2000", value: 184},  
                    {name: "Windows XP", value: 80}
                        
                        
                      
                   ]
            }]
        };
        a.setOption(option);
        window.addEventListener("resize", function() {
            a.resize()
        })
    }

    function j() {
        var a = echarts.init(document.getElementById("echart2"));
        option = {
           
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%'
            },
           
            legend: {
                data: ['加入学习界面','观看视频', '观看结束'],
                textStyle:{
                    color:"#fff"
                }

            },
            series: [{
                name: '学习流程转化',
                type: 'funnel',
                left: '10%',
                top: 60,
                bottom: 60,
                width: '80%',
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                color: ["#62c98d", "#2f89cf", "#49b9cf"],
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [{
                        value: 100,
                       name: '加入学习界面',
                    },
                    {
                        value: Math.round((1931242 / 9561272) * 100),
                        name: '观看视频'
                    },
                    {
                        value: Math.round((397415 / 9561272) * 100),
                        name: '观看结束'
                    }
                ]
            }]
        };
        a.setOption(option);
        window.addEventListener("resize", function() {
            a.resize()
        })
      
    }

    function k() {
        var a = echarts.init(document.getElementById("echart3"));
        option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: "#57617B"
                    }
                }
            },
            
            grid: {
                left: "0",
                right: "20",
                top: "10",
                bottom: "20",
                containLabel: true
            },
            xAxis: [{
                type: "category",
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                data: ["一月份", "二月份", "三月份", "四月份", "五月份", "六月份", "七月份"]
            }, {}],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }],
            series: [{
                name: "活跃度",
                type: "bar",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(24, 163, 64, 0.3)"
                        }, {
                            offset: 0.8,
                            color: "rgba(24, 163, 64, 0)"
                        }], false),
                        shadowColor: "rgba(0, 0, 0, 0.1)",
                        shadowBlur: 10
                    }
                },
                // itemStyle: {
                //     normal: {
                //         color: "#cdba00",
                //         borderColor: "rgba(137,189,2,0.27)",
                //         borderWidth: 12
                //     }
                // },
                data: [171336, 122473, 241810, 476966, 283995, 278526, 166613]
            }]
        };
        a.setOption(option);
        window.addEventListener("resize", function() {
            a.resize()
        })
        // a.on('click', function() {
        //     window.open("https://gitee.com/iGaoWei/big-data-view");
        // });
    }

    function l() {
        var a = echarts.init(document.getElementById("echart4"));
        option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: "#57617B"
                    }
                }
            },
            legend: {
                data: [{
                    name: "工作日活跃度"
                }, {
                    name: "非工作日活跃度"
                }],
                top: "0%",
                textStyle: {
                    color: "rgba(255,255,255,0.9)"
                }
            },
            xAxis: [{
                type: "category",
                data: ["0点", "1点", "2点", "3点", "4点", "5点", "6点","7点", "8点", "9点", "10点", "11点", "12点","13点", "14点", "15点", "16点", "17点", "18点","19点", "20点", "21点", "22点", "23点","24点"],
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "14",
                    },
                },
            } ],
            yAxis: [{
                type: "value",
                name: "活跃度",
                min: 0,
                max: 120000,
                // interval: 5,
                axisLabel: {
                    show: true,
                },
                axisLine: {
                    
                    lineStyle: {
                        color: "rgba(255,255,255,.4)"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }],
            grid: {
                top: "10%",
                right: "30",
                bottom: "30",
                left: "60",
            },
            series: [{
                name: "工作日活跃度",
                type: "line",
                smooth: true,     
                data: [100997, 93259, 84027, 50032, 36532, 47881, 85581, 90286, 92607, 71275, 67022, 64107, 92973, 69891, 67489, 44243, 11645, 5582, 3666, 2689, 2962, 15397, 46955, 40077,100997],
                barWidth: "auto",
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: "#cdba00"
                            }, {
                                offset: 1,
                                color: "#cdba00"
                            }],
                            globalCoord: false
                        }
                    }
                }
            }, {
                name: "非工作日活跃度",
                type: "line",
                smooth: true, 
                data: [29176, 26073, 32482, 15528, 15335, 17648, 30743, 40153, 34185, 34529, 23808, 21968, 33364, 20508, 25773, 13505, 4361, 2031, 1303, 1959, 1379, 1392, 15656, 11685,29176],
                barWidth: "auto",
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: "#66b8a7"
                            }, {
                                offset: 1,
                                color: "#66b8a7"
                            }],
                            globalCoord: false
                        }
                    }
                },
                barGap: "0"
            }]
        };
        a.setOption(option);
        window.addEventListener("resize", function() {
            a.resize()
        })
     
    }

    // function m() {
    //     var b = echarts.init(document.getElementById("echart5"));
      
    //     var c = {
    //         tooltip: {
    //             show: false
    //         },
    //         grid: {
    //             top: "0%",
    //             left: "65",
    //             right: "14%",
    //             bottom: "0%",
    //         },
    //         xAxis: {
    //             min: 0,
    //             max: 500,
    //             splitLine: {
    //                 show: false
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 show: false
    //             }
    //         },
    //         yAxis: {
    //             data: [9781, 779, 6845, 2625, 11164, 11975, 2676, 5076, 6148, 2915],
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 show: false
    //             },
    //             axisLabel: {
    //                 color: "rgba(255,255,255,.6)",
    //                 fontSize: 14
    //             }
    //         },
    //         series: [{
    //             type: "bar",
    //             label: {
    //                 show: true,
    //                 zlevel: 10000,
    //                 position: "right",
    //                 padding: 10,
    //                 color: "#49bcf7",
    //                 fontSize: 14,
    //                 formatter: "{c}"
    //             },
    //             itemStyle: {
    //                 color: "#49bcf7"
    //             },
    //             barWidth: "15",
    //             data: [239, 245, 249, 290, 311, 347, 348, 419, 467, 543],
    //             z: 10
    //         }],
    //     };
    //     b.setOption(c);
    //     window.addEventListener("resize", function() {
    //         b.resize()
    //     })
    // }

    function n() {
        var a = echarts.init(document.getElementById("zb1"));
        var b = 133814;
        var c = 6445;
        var e = 1991;
        var d = b + c + e;
        option = {
            series: [{
                type: "pie",
                radius: ["60%", "70%"],
                color: "#49bcf7",
                label: {
                    normal: {
                        position: "center"
                    }
                },
                data: [{
                    value: b,
                    label: {
                        normal: {
                            formatter: b + "",
                            textStyle: {
                                fontSize: 20,
                                color: "#fff",
                            }
                        }
                    }
                }, {
                    value: d-b,
                    label: {
                        normal: {
                            formatter: function(e) {
                                return "占比" + Math.round(b / d * 100) + "%"
                            },
                            textStyle: {
                                color: "#aaa",
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(255,255,255,.2)"
                        },
                        emphasis: {
                            color: "#fff"
                        }
                    },
                }]
            }]
        };
        a.setOption(option);
        window.addEventListener("resize", function() {
            a.resize()
        })
      
    }

    function o() {
        var a = echarts.init(document.getElementById("zb2"));
        var b = 133814;
        var c = 6445;
        var e = 1991;
        var d = b + c + e;
        option = {
            series: [{
                type: "pie",
                radius: ["60%", "70%"],
                color: "#cdba00",
                label: {
                    normal: {
                        position: "center"
                    }
                },
                data: [{
                    value: c,
                    label: {
                        normal: {
                            formatter: c + "",
                            textStyle: {
                                fontSize: 20,
                                color: "#fff",
                            }
                        }
                    }
                }, {
                    value: d-c,
                    name: "女消费",
                    label: {
                        normal: {
                            formatter: function(e) {
                                return "占比" + Math.round(c / d * 100) + "%"
                            },
                            textStyle: {
                                color: "#aaa",
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(255,255,255,.2)"
                        },
                        emphasis: {
                            color: "#fff"
                        }
                    },
                }]
            }]
        };
        a.setOption(option);
        window.addEventListener("resize", function() {
            a.resize()
        })
    }

    function p() {
        var a = echarts.init(document.getElementById("zb3"));
        var b = 133814;
        var c = 6445;
        var e = 1991;
        var d = b + c + e;
        option = {
            series: [{
                type: "pie",
                radius: ["60%", "70%"],
                color: "#62c98d",
                label: {
                    normal: {
                        position: "center"
                    }
                },
                data: [{
                    value: e,
                
                    label: {
                        normal: {
                            formatter: e + "",
                            textStyle: {
                                fontSize: 20,
                                color: "#fff",
                            }
                        }
                    }
                }, {
                    value: b-e,
    
                    label: {
                        normal: {
                            formatter: function(err) {
                                return "占比" + Math.round(e / d * 100) + "%"
                            },
                            textStyle: {
                                color: "#aaa",
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(255,255,255,.2)"
                        },
                        emphasis: {
                            color: "#fff"
                        }
                    },
                }]
            }]
        };
        a.setOption(option);
        window.addEventListener("resize", function() {
            a.resize()
        })
      
    }
});