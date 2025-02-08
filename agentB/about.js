import { __SYD, __c, __g, __p, __sC, __u } from "./sydneyDom_v2.js"


__SYD.about_page = () =>{
    return __c(
        'div',
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:4rem;background:unset;padding:10px 10px;",//({method:'add',style:{rowGap:'30px',background:'transparent',flexDirection:'row-reverse',justifyContent:'center', flexWrap:'wrap',columnGap:'10px'}})
            class:`${__p(['about_page','animate'],false) ? "about_animate" : ""}`,
            id:"about"
        },
        [
            // __SYD.text_lib_type_h1_glob({cnt:"Choose Your Apartment Type",size:__p(['about_page','font'],'40px'),clr:'#b99d75',w:'700',inject:"text-align:left;width:100%;padding:5px 15px;padding-left:10px;"}),
            __c(
                "div",
                {
                    style:`height:fit-content;width:100%;max-width:1200px;border-radius:15px;background:rgba(13, 17, 23, 0.8);backdrop-filter: blur(10px);padding:20px 0;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;flex-direction:${__p(['subContainer' , 'scaled'] , false) ? "row-reverse" : "column-reverse"};column-gap:10px;row-gap:3rem`
                },
                [
                    __c(
                        'div',
                        {
                            style:'height:80vw;max-height:500px;min-height:400px;min-width:300px;position:relative;border-radius:20px;display:flex;align-items:center;justify-content:center;',
                            class:`about_page_child1 Neon_tab img`
                        },
                        [
                            __c(
                                "img",
                                {
                                    src:"./assets/ab.png",
                                    style:"width:90%;height:auto;border-radius:15px;box-shadow:2px 0 5px #020202;",
                                    class:"smooth_hover"
                                }
                            )
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:'height:unset;max-height:400px;min-height:fit-content;min-width:300px;text-align:center;animation-duration:1s;row-gap:30px;text-align:center;max-width:400px;width:100%;' + __sC['page3FloatText']({method:'add',style:{justifyContent:'center',padding:'unset',opacity:__p(['about_page','animate'],false) ? '1' : '1'}}),
                            class:`about_page_child2 ${__p(['about_page','animate'],false) ? 'right_incoming_css_animation_custom_slider' : ''}`
                        },
                        [

                            __c(
                                'div',
                                {
                                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:uppercase;font-weight:700;padding:5px;width:100%;color:#fff;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`
                                },
                                [
                                    __c("p",{},['about']),
                                ]
                            ),
                            
                            __c(
                                'p',
                                {
                                    style:`font-size:18px;padding:5px;width:100%;font-weight:900;line-height:25px;text-align:center;color:#b0b0b0;`,//${__p(['subContainer','scaled'],false) ? "left" : "center"}
                                    class:`text`
                                },
                                [
                                    `Built on Base Chain, a fast, secure, and cost-efficient Layer 2 solution, Agent Blue empowers users to easily create, customize, and deploy their very own AI agents—all with the simplicity of a single transaction`,
                                ]
                            ),

                            __SYD.ul_lists_el({child:__SYD.pTag({text:"Learn More" , class_:"navClick" , style:"font-size:16px;font-weight:700;background:linear-gradient(to top right , #8A2BE2 , #00FFFF);"})}),
                        ]
                    )
                ]
            )
        ],
        {
            mediaQuery:{
                query:[{size:'<650px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            },
            createState:{
                stateName:'about_page',
                state:{
                    font:'40px',
                    animate:false,
                    init_count:() =>{
                        const state = __g('about_page');
                        state.animate = true;
                        __u('about_page' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('about_page');
                        state.animate = false;
                        __u('about_page' , {type:'a' , value:state})
                    }
                }
            }
        }
    )
}
