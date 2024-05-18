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
        option = {
            tooltip: {
                trigger: "item",
                formatter: "{b} : {c} ({d}%)"
            },
            // legend: {
            //     top: "15%",
            //     data: ["Windows NT","Windows 98","Windows 95","未知操作系统","Linux","Windows 2000","Windows XP","Windows 32"],
            //     icon: "circle",
            //     textStyle: {
            //         color: "rgba(255,255,255,.6)",
            //     }
            // },
            calculable: true,
            series: [{
                name: "",

                type: "pie",


                radius: [51, 100],
                center: ["50%", "50%"],

                data: [{ name: 'Windows NT', value: 1377777 },
                    { name: 'Windows 98', value: 129518 },
                    { name: 'Windows 95', value: 89805 },
                    { name: '未知操作系统', value: 88950 },
                    { name: 'Linux', value: 55347 },
                    { name: 'Windows 2000', value: 184 },
                    { name: 'Windows XP', value: 80 },
                    { name: 'Windows 32', value: 58 },

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