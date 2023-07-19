import React, { createContext, useState } from 'react'
import Display from './Display'
export const creatContext=createContext()
function useData() {
    const [std, setStd] = useState([])
    var data=[
        {
            name:'krian',
            course:'mern',
            qualification:'degree'
            
        },
        {
            name:'paul',
            course:'mern',
            qualification:'degree'
            
        },
        {
            name:'preveen',
            course:'mern',
            qualification:'degree'
            
        }
    ]
    setStd(data)
  return (
        <creatContext.Provider value={std}>
            <Display/>
            
        </creatContext.Provider>
  )
}

export default useData

