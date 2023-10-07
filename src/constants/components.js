export const SYS_ComponentList =  [
    {
        id: 0,
        category: "基础",
        list: [
            {
                label: "文字",
                defaultValue: "TEXT",
            },
            {
                label: "按钮",
                defaultValue: "BUTTON",
                style: {
                    width: '60px',
                    background: '#313030',
                    width: '60px',
                    padding: '8px 10px',
                    borderRadius: '3px'
                }
            },
            {
                label: "链接",
                defaultValue: ""
            },
            {
                label: "图片",
                defaultValue: ""
            }
        ]
    },
    {
        id: 1,
        category: "媒体",
        list: [
            {
                label: "音频",
                defaultValue: ""
            },
            {
                label: "视频",
                defaultValue: ""
            },
            {
                label: "地图",
                defaultValue: ""
            }
        ]
    },
    {
        id: 2,
        category: "图表",
        list: [
            {
                label: "柱状图",
                defaultValue: ""  
            },
            {
                label: "折线图",
                defaultValue: ""
            },
            {
                label: "饼图",
                defaultValue: ""
            }
        ]
    }
]