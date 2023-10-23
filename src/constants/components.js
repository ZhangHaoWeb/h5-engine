import defaultImg from 'src/assets/image.jpg'

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
                    fontSize: "16px",
                    width: "100px",
                    height: "30px",
                    lineHeight: "30px"
                }
            },
            {
                type: "ButtonComponent",
                label: "按钮",
                defaultValue: "BUTTON",
                style: {
                    background: "#313030",
                    borderRadius: "3px",
                    width: "80px",
                    height: "35px",
                    lineHeight: "35px"
                }
            },
            {
                type: "LinkComponent",
                label: "链接",
                defaultValue: "https://",
                style: {
                    color: "#4395ff",
                    width: "100px",
                    height: "30px",
                    lineHeight: "30px"
                }
            },
            {
                type: "ImageComponent",
                label: "图片",
                defaultValue: "IMAGE",
                style: {
                    width: "150px",
                    height: "100px"
                },
                src: defaultImg

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