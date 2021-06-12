import { createContext } from 'react'
import { sigInRequest } from '../services/auth'

type AuthContextType = {
    isAuthenticated: boolean
}

type SignInData = {
    email: string
    password: string
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    const isAuthenticated = false

    async function signIn({ email, password }: SignInData) {
        const { token, user } = await sigInRequest({
            email,
            password,
        })
    }

    return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
}
