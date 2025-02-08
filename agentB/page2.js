import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page2 = () =>{
    return __c(
        "div",
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:5rem;background-attachment:fixed;padding:10px 10px;",
            id:"feature"
        },
        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:uppercase;font-weight:700;padding:5px;width:100%;color:#fff;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`
                },
                [
                    'Key Features of AGENTB'
                ]
            ),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:5rem;"
                },
                [
                    __SYD.page3_child1({content:[
                        {header:"Build Intelligent AI Agents with Ease" , text:"AGENTB lets users build AI assistants, consultants, and problem-solvers—no coding required." , i_class:"fa-solid fa-robot"},
                        {header:"AI Made Simple " , text:"Anyone can create powerful AI with ease!" , i_class:"fa-solid fa-rocket"},
                    ] , title:'Empower Your AI Vision with AGENTB' , align:'right' , img:'ai_create.png' , delay:'.3' , id:0}),

                    __SYD.page3_child1({content:[
                        {header:"Your AI, Your Rules" , text:"Customize your AI agent to fit your unique needs and challenges." , i_class:"fa-solid fa-screwdriver-wrench"},
                        {header:"One Transaction, One Agent " , text:"Create one AI per transaction, with scaling options coming soon." , i_class:"fa-solid fa-bolt"},
                    ] , title:'Create Your Own AI for Just $1 ' , align:'left' , img:'ai_custom.png' , delay:'.8' , summary:"For only $1 in AGENTB, users can build a fully customizable AI agent. Each transaction allows one agent, with future options for scaling." , id:1}),

                    __SYD.page3_child1({content:[
                        {header:"Ethereum Security, Layer 2 Speed" , text:"Enjoy Ethereum’s security with the fast, low-cost benefits of Layer 2." , i_class:"fa-solid fa-shield-halved"},
                        {header:"Seamless AI on Base Chain" , text:"Agent Blue ensures smooth, scalable AI interactions with cutting-edge blockchain tech." , i_class:"fa-solid fa-link"},
                    ] , title:'Powerful, Secure, and Scalable AI' , align:'right' , img:'eth.jpg' , delay:'1.2' , summary:"Agent Blue leverages Base Chain’s Layer 2 tech for secure, fast, and low-cost AI interactions." , id:2}),

                    __SYD.page3_child1({content:[
                        {header:"More Features, More Control" , text:"Unlock advanced tools to customize and enhance your AI." , i_class:"fa-solid fa-gear"},
                        {header:"The Future of AI is Yours" , text:"Bulk pricing and new functions are coming to empower your AI journey." , i_class:"fa-solid fa-chart-line"},
                    ] , title:'Endless Possibilities for Your AI' , align:'left' , img:'agent__.jpg' , delay:'1.6' , summary:"Agent Blue will introduce premium features, bulk pricing, and new tools for greater AI control and flexibility." , id:3}),

                    // __SYD.page3_child1({content:'Access, manage, and swap assets across multiple blockchains with ease. ZeroChain supports Ethereum, Binance Smart Chain, Solana, and many more, offering you a true cross-chain experience. Swap tokens securely across chains without leaving the wallet.' , title:'Multi-Chain, Cross-Chain Freedom' , align:'left' , img:'free.png' , delay:'.8'}),
        
                    // __SYD.page3_child1({content:'ZeroChain integrates with the best multi-chain DEXs, ensuring deep liquidity and fast, cost-effective swaps across chains. Maximize your assets, minimize your fees, all in one place.' , title:'Decentralized Exchange (DEX)' , align:'right' , img:'dex.png' , delay:'1.2'}),
        
                    // __SYD.page3_child1({content:'Whether you’re swapping tokens or transferring assets, your privacy is our top priority. With built-in privacy protocols like **CoinJoin, **zk-SNARKs, and **Tornado Cash*, your transactions are anonymous and shielded from prying eyes.' , title:'Privacy by Default' , align:'left' , img:'privacy.png' , delay:'1.6'}),
                ]
            )
        ],
        {
            createState:{
                stateName:'page2',
                state:{
                        show:false,
                        animate:false,
                        init_count:() =>{
                            const state = __g('page2');
                            state.animate = true;
                            __u('page2' , {type:'a' , value:state})
                        },
                        del_count:() =>{
                            const state = __g('page2');
                            state.animate = false;
                            __u('page2' , {type:'a' , value:state})
                        }
                    }
            },
            mediaQuery:{
                query:[{size:'<750px' , prop:{show:true}}],
                defState:{show:false}
            },
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.page3_child1 = ({content,title,align,img = '',delay = '0' , id} = {}) =>{
    return __c(
        'div',
        {
            style:`background:#2C2F40;animation-delay:${delay}s;display:flex;flex-wrap:wrap;flex-direction:${align === "left" ? "row-reverse" : "row"};height:fit-content;width:100%;max-width:1200px;align-items:center;position:relative;overflow-x:hidden;overflow-y:hidden;row-gap:15px;padding:50px 10px;border-radius:15px;`,
            class:`${__p(['page2','animate'],false) ? `${align === 'left' ? 'left_incoming_css_animation' : 'right_incoming_css_animation_custom_slider'}` : ''} ${__p(['page2','animate'],false) ? "feature_animate" : ""}`,
            id:`feature__${id}`
            // class:__p(['hsec6_text_img_array','show'],false) === false ? (align == 'left' ? 'child_s_image_comp__left_compiment' : 'child_s_image_comp__right_compiment') : 'child_s_image_comp'
        },
        [
            __SYD.floatingText({content,title,align,delay}),
            __SYD.broadImg({align:align , img:img , delay})
        ]
    )
}

__SYD.floatingText = ({content = [] , title = '' , align = 'left' , delay , summary = ""} = {}) =>{
    // console.log(__p(['page2','show'],false))
    return __c(
        'div',
        {
            style:`z-index:10;min-height:${__p(['subContainer','scaled'],false) ? '100%' : '50%'};height:fit-content;width:${__p(['subContainer','scaled'],false) ? '50%' : '100%'};overflow-x:hidden;position:${__p(['subContainer','scaled'],false) ? 'static' : 'static'};top:0;${align == 'left' ? 'left:0;' : 'right:0;'}max-width:${__p(['subContainer','scaled'],false) ? '50%' : 'unset'};background:unset;${align === 'left' ? 'border-top-right-radius:25px;' :'border-top-left-radius:25px;'}transform:translateX(${align === 'left' ? '-5px' : '5px'});box-shadow:1px 0 5px transparent;text-align:left;animation-delay:${delay}s;`+__sC.page3FloatText({method:"add" , style:{padding:__p(['subContainer','scaled'],false) ? "0px 20px" : "0px 5px"}}),//${__p(['subContainer','scaled'],false) ? "left" : "center"}//border-${align === 'left' ? 'right' : 'left'}:1px solid rgba(255,255,255,.2);
            class:`text`
        },
        [
            __c(
                'div',
                {
                    style:'font-size:25px;font-weight:unset;padding:10px;color:#fff;width:100%;font-family:shine;margin-bottom:15px;',
                    class:"mainTitle_text"
                },
                [
                    title
                ]
            ),
            __c(
                "p",
                {
                    style:`display:${summary.length === 0 ? "none" : "block"};font-size:18px;padding:10px;width:100%;font-weight:900;color:#b0b0b0;`,
                },
                [
                    summary
                ]
            ),
            __c(
                'div',
                {
                    style:`font-size:18px;padding${__p(['subContainer','scaled'],false) ? "-left" : ""}:10px;line-height:25px;color:#b0b0b0;font-weight:900;width:100%;display:flex;flex-direction:column;row-gap:20px;`,
                    // class:'floatingTxt'
                },
                [
                    // __c("p",{style:"display:inline;color:#b0b0b0"},[content]),
                    __SYD.icon_floatText(content[0]),
                    __SYD.icon_floatText(content[1]),
                ]
            )
        ],
        {
            createState:{
                stateName:'floatingText',
                state:{h:'100%'}
            },
            mediaQuery:{
                query:[{size:'<750',prop:{h:'50%'}}],
                defState:{h:'100%'}
            }
        }
    )
}

__SYD.icon_floatText = ({header , text , i_class}) =>{
    return __c(
        "div",
        {
            style:"display:flex;column-gap:30px;width:100%;height:fit-content;align-items:center"
        },
        [
            __c("i" , {style:"font-size:30px;color:#0066FF;font-weight:900;height:30px;min-width:30px;" , class:`${i_class}`}),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;flex-direction:column;row-gap:7px;"
                },
                [
                    __c("strong" , {style:"color:#fff;"} , [`${header}`]),
                    __c("p" , {style:"font-weight:500;border-radius:10px;background:#0D1117;padding:10px;"} , [`${text}`])
                ]
            )
        ]
    )
}

__SYD.broadImg = ({align = '' , img , delay} = {}) =>{
    return __c(
        'div',
        {
            style:`height:100%;min-height:400px;max-height:400px;min-width:300px;background-color:#0D1117;border-radius:25px;border-width:1px;animation-delay:${delay}s;display:flex;justify-content:center;align-items:center;`,//background-position:${__p(['subContainer','scaled'],false) ? (align == 'left' ? 'center' : 'center') : 'center'} center; //align-self:${align == 'left' ? "flex-end" : "none"};
            class:`thin_border about_page_child1 transparent_comp img`
        },
        [
            __c(
                "img",
                {
                    src:`./assets/${img}`,
                    style:"width:90%;height:auto;border-radius:15px;box-shadow:2px 0 5px #020202;",
                    // class:"smooth_hover"
                }
            )
        ],
        {
            events:{
                // onmouseover:(e) =>{
                //     e.target.classList.add('h_page_1_cont_large_image_custom')
                // },
                // onmouseout:(e) =>{
                //     e.target.classList.remove('h_page_1_cont_large_image_custom')
                // },
            },
            genericStyle:['bg_fit']
        }
    )
}