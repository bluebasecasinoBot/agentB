import { __c, __SYD , __p , __u , __g , __sC, __v} from "./sydneyDom_v2.js"

__SYD.page4 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;row-gap:2.5rem;padding:10px 10px;margin:4rem 0;",
            class:`${__p(['page4','animate'],false) ? "toke_animate" : ""}` , id:"toke"
        },
        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:capitalize;font-weight:700;padding:5px;width:100%;color:#fff;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`,
                    class:"text1"
                },
                [
                    'tokenomics',
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;flex-direction:column;width:100%;row-gap:35px;height:fit-content;align-items:center;"
                },
                [
                    __c(
                        'div',
                        {
                            style:`font-size:${__p(['subContainer','scaled'],false) ? '40px' : '25px'};text-transform:none;font-weight:700;padding:5px;width:100%;color:#fff;text-align:center;text-shadow:1px 1px 2px #000;`,
                            class:"text2"
                        },
                        [
                            'Total Supply: 1,000,000 Tokens',
                        ]
                    ),

                    __c(
                        'p',
                        {
                            style:`font-size:18px;line-height:25px;color:#fff;font-weight:900;max-width:900px;width:100%;text-align:center;text-shadow:1px 1px 2px #000;color:#B0B0B0;`,
                            class:"text3"
                        },
                        [
                            __p(['page4' , 'write'] , "") , __c("small",{style:"height:30px;margin-left:15px;display:inline;",class:"autoType__fast"},[]),
                        ]
                    )
                ]
            ),
        ],
        {
            // genericStyle:["bg_cover"],
            createState:{
                stateName:"page4",
                state:{
                    index:0,
                    write:"",
                    textIterator:0,
                    text:[
                        "🚀 A token built for the future—secure, scalable, and unstoppable.",
                        "🌐 Fueling a decentralized ecosystem where value flows freely.",
                        "⚡ Designed for efficiency, driven by innovation, and powered by the community."
                    ],
                    autoType:() =>{
                        const state = __g("page4")
                        if(__p(['page4' , 'write'] , "").length < __p(['page4' , 'text'] , "")[__p(['page4' , 'textIterator'] , 0)].length)
                        {
                            state.write = state.text[__p(['page4' , 'textIterator'] , 0)].slice(0 , state.write.length+1);
                        }
                        __u("page4" , {type:"a" , value:state})
                    },
                    restartType:() =>{
                        const state = __g("page4");
                        state.write = "";
                        __u("page4" , {type:"a" , value:state})
                    },
                    animate:false,
                    init_count:() =>{
                        const state = __g('page4');
                        state.animate = true;
                        __u('page4' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('page4');
                        state.animate = false;
                        __u('page4' , {type:'a' , value:state})
                    }
                }
            }
        }
    )
}
