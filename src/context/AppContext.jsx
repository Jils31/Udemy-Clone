import { createContext } from "react"

export const AppContext = createContext()
export function AppContextprovider({children}){
    const hello = true
    return(
        <AppContext.Provider value = {{hello}}>
            {children}
        </AppContext.Provider>
    )
}
