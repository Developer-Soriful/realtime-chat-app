import React, { useMemo } from 'react'
import { io } from 'socket.io-client';
const SocketContext = React.createContext(null);

export const SocketContextProvider = ({ children }) => {
    const socket = useMemo(
        () => io({
            host: "localhost",
            port: 8001
        }),
        []
    )
    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}