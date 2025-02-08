import { __c, __g, __p, __SYD, __u } from "./sydneyDom_v2.js";

__SYD.createMiniAuxTabs = ({imageSrc , text , id}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(['auxSection__featureMain' , 'resize'], false) ? "100%" : "fit-content"};padding:16px;border-radius:15px;background:#0D1117;display:flex;gap:16px;justify-content:flex-start;align-items:center;cursor:pointer;box-shadow:2px 0 2px #020202;animation-delay:${id*(0.3)}s`,
            class:`smooth_hover ${__p(['auxSection__featureMain' , 'animateTb'], false) ? "tabs_progress_animate" : ""}`
        },
        [
            __c(
                "span",
                {
                    style:`height:30px;width:30px;min-height:30px;min-width:30px;background-image:url('./assets/${imageSrc}')`
                },[],
                {
                    genericStyle:["bg_fit"]
                }
            ),

            __c(
                "p",
                {
                    style:"font-size:17px;text-transform:capitalize;color:rgb(176, 176, 176);"
                },
                [
                    `${text}`
                ]
            )
        ],
        {
            events:{
                onclick: () =>{
                    location.href = `#feature__${id}`
                }
            }
        }
    )
}

__SYD.auxSection__featureMain = () =>{
    return __c(
        "div",
        {
            style:`padding:50px;height:fit-content;width:80%;max-width:1200px;display:flex;gap:${__p(['auxSection__featureMain' , 'animateTb'], false) ? "25px" : "16px"};flex-wrap:wrap;justify-content:center;align-items:center;perspective:800px;`
        },
        [
            __SYD.createMiniAuxTabs({imageSrc:"agentBIcon.png" , text:"ai made simple" , id:0}),
            __SYD.createMiniAuxTabs({imageSrc:"agentBIcon.png" , text:"Your AI, Your Rules" , id:1}),
            __SYD.createMiniAuxTabs({imageSrc:"agentBIcon.png" , text:"Scalable AI" , id:2}),
            __SYD.createMiniAuxTabs({imageSrc:"agentBIcon.png" , text:"Unlock advanced tools" , id:3}),
        ],
        {
            createState:{
                stateName:"auxSection__featureMain",
                state:{resize:false , animateTb:false}
            },
            mediaQuery:{
                query:[{size:"<500px" , prop:{resize:true}}],
                defState:{resize:false}
            },
            events:{
                onmouseover: () =>{
                    const state = __g("auxSection__featureMain");
                    state.animateTb = true;
                    __u("auxSection__featureMain" , {type:"a" , value:state})
                },
                onmouseout: () =>{
                    const state = __g("auxSection__featureMain");
                    state.animateTb = false;
                    __u("auxSection__featureMain" , {type:"a" , value:state})
                },
                ontouchmove: () =>{
                    const state = __g("auxSection__featureMain");
                    state.animateTb = true;
                    __u("auxSection__featureMain" , {type:"a" , value:state})
                },
                ontouchend: () =>{
                    const state = __g("auxSection__featureMain");
                    state.animateTb = false;
                    __u("auxSection__featureMain" , {type:"a" , value:state})
                },
            }
        }
    )
}