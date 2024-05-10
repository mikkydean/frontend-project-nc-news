import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userAvatar, setUserAvatar] = useState('')

    useEffect(() => {
        setIsLoggedIn(false)
        if (currentUser.length > 0) {
            setIsLoggedIn(true)
        }
    }, [currentUser])


    return <UserContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn, userAvatar, setUserAvatar  }}>{ children }</UserContext.Provider>
}