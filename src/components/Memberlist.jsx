import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMembers } from "../redux/modules/member";

const MemberList = () => {
    const dispatch = useDispatch();
    //const { error, post } = useSelector((state) => state);

    useEffect(()=>{
        dispatch(__getMembers());
    },[dispatch])

    return(
        <div>
            abc
        </div>

    )
}

export default MemberList;