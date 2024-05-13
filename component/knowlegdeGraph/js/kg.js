<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Relationship Graph</title>
    <!-- Import ECharts -->
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.1.0/dist/echarts.min.js"></script>
    <style>
        /* Style for the chart container */
        #chart {
            width: 100%;
            height: 600px;
        }
        /* Style for the dropdown menu */
        #dropdown {
            margin: 20px;
        }
    </style>
</head>
<body>
    <!-- Dropdown menu for selecting relationships -->
    <select id="dropdown" onchange="updateChart()">
        <option value="all">All Relationships</option>
        <option value="Python认识">Python认识</option>
        <option value="Python基础语法">Python基础语法</option>
        <option value="数据结构与容器">数据结构与容器</option>
        <option value="流程控制">流程控制</option>
        <option value="函数与模块">函数与模块</option>
        <option value="面向对象编程">面向对象编程</option>
        <option value="文件操作">文件操作</option>
    </select>
    <!-- Chart container -->
    <div id="chart"></div>

    <script>
        // Initialize ECharts instance
        var chart = echarts.init(document.getElementById('chart'));

        // Define data
        var pythonRelationship = {
            "Python认识": {
                nodes: [
                    {name: '在Windows系统平台安装Python与配置环境变量'},
                    {name: '了解常用Python IDE并创建一个应声虫程序'}
                ],
                links: [
                    {source: 'Python认识', target: '在Windows系统平台安装Python与配置环境变量'},
                    {source: 'Python认识', target: '了解常用Python IDE并创建一个应声虫程序'}
                ]
            },
            // Add other relationship data here...
        };

        // Function to update chart based on dropdown selection
        function updateChart() {
            var selectedValue = document.getElementById('dropdown').value;
            var option = {
                series: []
            };

            // Display all relationships if "All Relationships" is selected
            if (selectedValue === 'all') {
                for (var key in pythonRelationship) {
                    option.series.push({
                        type: 'graph',
                        layout: 'force',
                        roam: true,
                        draggable: true,
                        label: {
                            show: true
                        },
                        force: {
                            repulsion: 100
                        },
                        data: pythonRelationship[key].nodes,
                        links: pythonRelationship[key].links
                    });
                }
            } else {
                // Display selected relationship
                option.series.push({
                    type: 'graph',
                    layout: 'force',
                    roam: true,
                    draggable: true,
                    label: {
                        show: true
                    },
                    force: {
                        repulsion: 100
                    },
                    data: pythonRelationship[selectedValue].nodes,
                    links: pythonRelationship[selectedValue].links
                });
            }

            // Set option and render chart
            chart.setOption(option);
        }

        // Initial render of the chart
        updateChart();
    </script>
</body>
</html>
