import {__sS , __SYD , __c, __p , __u , __g , __sC} from "./sydneyDom_v2.js"


__sS([
    {
        nameTag:"container",
        style:{
            height:"100vh",
            width:"100vw",
            position:"relative",
            // paddingTop:"30px",
            // paddingBottom:"300px",
            overflowX:"hidden",
            overflowY:"scroll",
            background:"url(./assets/logoIcon.png) , linear-gradient(135deg, #0D1117, #1A1A2E, #2C2F40)",
            // backgroundImage:"url(./assets/AgentBLogo.png)",
            color:"#fff",
            fontFamily:"jose"
        }
    },

    {
        nameTag:"rad_1",
        style:{
            borderRadius:"10px"
        }
    },

    {
        nameTag:"bookingTabDesign",
        style:{
            display:"flex",
            flexDirection:"column",
            rowGap:"20px",
        }
    },

    {
        nameTag:"three_d_style",
        style:{
            boxShadow:` -1px -1px 3px #180505 inset,
            1px 1px 1px #f8a8e466 inset,
            2px 2px 5px #090303 `,
            backgroundColor:"#670015", //"rgba(36, 41, 54, 1)",
            color:"#fff"
        }
    },

    {
        nameTag:"three_d_child",
        style:{
            background:" rgb(24, 26, 36)",
            boxShadow:" 1px 1px 3px #000 inset",
        }
    },

    {
        nameTag:"top_highlight",
        style:{

        }
    },

    {
        nameTag:"txt_shad",
        style:{
            textShadow:"1px 2px 1px #000"
        }
    }
])

__sS([
    {
        nameTag:'hsec3_video_container',
        style:{
            height:'fit-content',
            width:'100%',
            display:'flex',
            flexDirection:'column',
            rowGap:'50px',
            padding:'15px 5px',
            paddingTop:'20px',
            background:'rgba(0,0,0,.1)',
            alignItems:'center',
            position:'relative'
        }
    }
])

__sS([
    {
        nameTag:'page3FloatText',
        style:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            padding:'10px 5px',
            overflow:'visible',
        }
    }
])


__SYD.ul_lists_el = ({child , function_ = {}}) =>{
    return __c(
        "li",
        {
            style:"list-style-type:none;cursor:pointer;",
            // class:"click"
        },
        [
            child
        ],
        {
            events:{
                ...function_
            }
        }
    )
}

__SYD.pTag = ({style = "" , class_ = "" , function_ = {} , id = "" , text , child = []} = {}) =>{
    return __c(
        "p",
        {
            style:`font-weight:300;${style};`,
            class:`${class_}`,
            id:`${id}`
        },
        [
            `${text}`,
            ...child
        ],
        {
            events:{
                ...function_
            }
        }
    )
}

__SYD.launch_app_btn = () =>{
    return __c(
        "div",
        {
            style:"padding:15px 25px;text-transform:none;border-radius:15px;",
            class:"launch_btn"
        },
        [
            __c(
                "p",
                {
                    style:"font-weight:700;font-size:14px;text-align:center;"
                },
                [
                   "Buy AGENTB" ,
                   __c("i",{style:"margin-left:5px;",class:"fas fa-arrow-right"})
                ]
            )
            
        ]
    )
}

__SYD.community_btn = () =>{
    return __c(
        "div",
        {
            style:"padding:15px 25px;text-transform:capitalize;border-radius:15px;",
            class:"launch_btn text2"
        },
        [
            __c(
                "p",
                {
                    style:"font-weight:700"
                },
                [
                   "community" 
                ]
            )
            
        ]
    )
}

__SYD.hr = () =>{
    return __c(
        "div",
        {
            style:"height:1px;width:100%;background:linear-gradient(to right, transparent , rgba(255,255,255,.3) , transparent);"
        }
    )
}