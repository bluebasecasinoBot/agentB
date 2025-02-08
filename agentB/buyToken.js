import { __c, __SYD , __p , __u , __g , __sC, __v} from "./sydneyDom_v2.js"

__SYD.buyToken = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:1200px;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;row-gap:2.5rem;padding:10px 10px;margin:4rem 0;padding:10px;",
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
                    'Buy AgentB Token On Uniswap',
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
                            style:`font-size:${__p(['subContainer','scaled'],false) ? '25px' : '25px'};text-transform:none;font-weight:700;padding:5px;width:100%;color:#fff;text-align:center;text-shadow:1px 1px 2px #000;`,
                            class:"text2"
                        },
                        [
                            'Join us as we redefine the way people interact with and build AI. Welcome to the world of Agent Blue. Welcome to the future.',
                        ]
                    ),
                    __SYD.launch_app_btn()
                ]
            ),
        ]
    )
}
