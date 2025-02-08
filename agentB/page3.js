import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page3 = () =>{
    return __c(
        "div",
        {
            style:"min-height:unset;height:fit-content;min-height:300px;width:90%;max-width:1200px;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:2.5rem;padding:10px 10px;border-radius:15px;box-shadow:2px 0 2px #0D1117;",
            class:`${__p(['page3','animate'],false) ? "join_animate" : ""} bg_animate_grad leftAngle__target rightAngle__target main_page_tab_class`,
            id:"community"
        },

        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '40px' : '25px'};text-transform:capitalize;font-weight:700;padding:5px;width:100%;color:#fff;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`,
                    class:"text1"
                },
                [
                    'Ready to build and customise your AgentB?',
                ]
            ),
            __c(
                "p",
                {
                    style:"font-size:20px;color:#fff;width:100%;text-align:center;"
                },
                [
                    'Become part of our community and advance your expertise in agent building!'
                ]
            ),
            __SYD.community_btn()
        ],
        {
            createState:{
                stateName:"page3",
                state:{
                    animate:false,
                    init_count:() =>{
                        const state = __g('page3');
                        state.animate = true;
                        __u('page3' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('page3');
                        state.animate = false;
                        __u('page3' , {type:'a' , value:state})
                    }
                }
            }
        }
    )
}