import React from "react";

import { createContext } from "react";

const  AppContext=createContext();

const AppProvider=({children})=>{

    const userdata={
        name:"Mather Tahir",
        age :28
    };
 return<AppContext.Provider value={userdata}>{children}</AppContext.Provider>;
};

export  {AppContext,AppProvider};