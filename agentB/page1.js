import { __c, __g, __p, __SYD, __u, __v } from "./sydneyDom_v2.js"

__SYD.page1 = () =>{
    return __c(
        "div",
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:30px;padding:0 10px;padding-top:90px;z-index:500;"
        },
        [
            __c(
                "div",
                {
                    style:"display:flex;align-items:center;width:100%;max-width:800px;min-height:300px;flex-direction:column;row-gap:20px;justify-content:center;color:#B0B0B0;"
                },
                [
                    __c(
                        "h1",
                        {style:"color:#fff;text-align:center;font-family:shine;text-shadow:2px 2px 1px #141414;position:relative;"},
                        [
                            __c("span" , {style:"color:#3399FF;text-shadow:2px 2px 1px #141414 , 0 0 1px #000 , 0 0 6px #3399FF;"},["AGENTB "]) , "on Base"
                        ]
                    ),
                    __c(
                        "p",
                        {
                            style:"font-size:17px;text-align:center;font-weight:900;line-height:25px;white-space: pre-line;text-shadow:1px 1px 2px #000;"
                        },
                        [
                            __p(['page1' , 'write'] , "") , __c("small",{style:"margin-left:15px;display:inline;",class:"autoType"},[]),
                        ]
                    )
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;column-gap:15px;row-gap:15px;width:100%;justify-content:center;align-items:center;flex-wrap:wrap;"
                },
                [
                    __SYD.ul_lists_el({child:__SYD.pTag({text:"Telegram" , class_:"navClick" , style:"font-size:16px;font-weight:700;background:linear-gradient(to top right , #8A2BE2 , #00FFFF);"})}),
                    __SYD.ul_lists_el({child:__SYD.pTag({text:"Twitter" , class_:"navClick" , style:"font-size:16px;font-weight:700;margin-right:25px;background:linear-gradient(to top right , #8A2BE2 , #00FFFF);"})}),
                    __SYD.launch_app_btn()
                ]
            ),
            
        ],
        {
            createState:{
                stateName:"page1",
                state:{
                    text:"Introducing Agent Blue ( - AGENTB - ) ~ The Future of AI Creation on Base Chain \n In a world where artificial intelligence is rapidly evolving, Agent Blue ( - AGENTB - ) is paving the way for a new frontier in AI creation.",
                    write:"",
                    autoType:() =>{
                        const state = __g("page1")
                        if(__p(['page1' , 'write'] , "").length < __p(['page1' , 'text'] , "").length)
                        {
                            state.write = state.text.slice(0 , state.write.length+1);
                        }
                        __u("page1" , {type:"a" , value:state})
                    },
                    restartType:() =>{
                        const state = __g("page1");
                        state.write = "";
                        __u("page1" , {type:"a" , value:state})
                    },
                    init_count:() =>{
                            __v["page1"].querySelector("h1").classList.add("h1_animate")
                    },
                    del_count:() =>{
                        __v["page1"].querySelector("h1").classList.remove("h1_animate")
                    }
                }
            }
        }
    )
}