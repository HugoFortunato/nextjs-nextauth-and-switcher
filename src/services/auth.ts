import {v4 as uuid} from 'uuid'

type SignInRequestData = {
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function sigInRequest(data: SignInRequestData){
    await delay()

    return {
        token: uuid(),
        user: {
            name: 'Hugo Fortunato',
            email: 'hugofortunato123@hotmail.com',
            avatar: 'https://github.com/HugoFortunato.png'
        }
    }
}