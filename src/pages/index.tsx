import { useContext } from 'react'
import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import Switch from '../components/SwitchTop'

type IProps = {
    setTheme: any
    darkMode: boolean
}

const Home = ({ darkMode, setTheme }: IProps) => {
    const { colors } = useContext(ThemeContext)
    const { register, handleSubmit } = useForm()

    function handleSignIn(data) {
        console.log(data)
    }

    return (
        <div className='dark:bg-black-800 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <Head>
                <title>Home</title>
            </Head>
            <div
                style={{
                    marginLeft: '143.75rem',
                    marginBottom: '62.5rem',
                }}
            >
                <Switch
                    onChange={setTheme}
                    checked={darkMode}
                    checkedIcon={false}
                    uncheckedIcon={true}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={shade(0.15, colors.secundary)}
                    onColor={colors.primary}
                />
            </div>
            <div style={{ position: 'absolute' }} className='max-w-md w-full space-y-8'>
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                    }}
                >
                    <div>
                        <img
                            className='mx-auto h-12 w-auto'
                            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                            alt='Workflow'
                        />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                                    />
                                </svg>
                            </h2>
                        </div>
                    </div>
                    <form className='mt-8 space-y-6' action='#' method='POST' onSubmit={handleSubmit(handleSignIn)}>
                        <input type='hidden' name='remember' defaultValue='true' />
                        <div className='rounded-md shadow-sm -space-y-px'>
                            <div>
                                <label htmlFor='email-address' className='sr-only'>
                                    E-mail
                                </label>
                                <input
                                    {...register('email')}
                                    id='email-address'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                    placeholder='Email address'
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className='sr-only'>
                                    Senha
                                </label>
                                <input
                                    {...register('password')}
                                    id='password'
                                    name='password'
                                    type='password'
                                    autoComplete='current-password'
                                    required
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                    placeholder='Password'
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input
                                    id='remember_me'
                                    name='remember_me'
                                    type='checkbox'
                                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                                />
                                <label htmlFor='remember_me' className='ml-2 block text-sm text-gray-900'>
                                    Lembrar-me
                                </label>
                            </div>

                            <div className='text-sm'>
                                <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                                    Esqueceu sua senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                                    <LockClosedIcon
                                        className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                                        aria-hidden='true'
                                    />
                                </span>
                                Entrar
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Home
