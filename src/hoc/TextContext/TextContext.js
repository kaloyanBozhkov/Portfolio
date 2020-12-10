import React, { createContext } from 'react'

export const TextContext = createContext()

const TextProvider = ({ value, children }) => {
    return (
        <TextContext.Provider value={value}>
            {children}
        </TextContext.Provider>
    ) 
}

export default TextProvider