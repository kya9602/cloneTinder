import React from "react";
import styled from "styled-components";


const Layout=(props)=>{

    return(
        <LayoutCom>
            {props.children}
        </LayoutCom>
        
    );

}
export default Layout;

const LayoutCom = styled.div`
    max-width: 600px;
    max-height: 400px;
    min-width: 400px;
    width: 100%;
    height: 100%;
    margin-top: 10px;
`