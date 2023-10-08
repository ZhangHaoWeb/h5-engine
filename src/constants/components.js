export const SYS_ComponentList =  [
    {
        id: 0,
        category: "基础",
        list: [
            {
                type: "TextComponent",
                label: "文字",
                defaultValue: "双击编辑",
                style: {
                    fontSize: "16px"
                }
            },
            {
                type: "ButtonComponent",
                label: "按钮",
                defaultValue: "BUTTON",
                style: {
                    width: "60px",
                    background: "#313030",
                    padding: "8px 10px",
                    borderRadius: "3px",
                    textAlign: "center"
                }
            },
            {
                type: "LinkComponent",
                label: "链接",
                defaultValue: "https://",
                style: {
                    color: "#4395ff"
                }
            },
            {
                type: "IMAGE",
                label: "图片",
                defaultValue: "IMAGE"
            }
        ]
    },
    {
        id: 1,
        category: "媒体",
        list: [
            {
                label: "音频",
                defaultValue: "AUDIO"
            },
            {
                label: "视频",
                defaultValue: "VIDEO"
            },
            {
                label: "地图",
                defaultValue: "MAP"
            }
        ]
    },
    {
        id: 2,
        category: "图表",
        list: [
            {
                label: "柱状图",
                defaultValue: "BAR CHAT"  
            },
            {
                label: "折线图",
                defaultValue: "LINE CHAT"
            },
            {
                label: "饼图",
                defaultValue: "PIE CHAT"
            }
        ]
    }
]