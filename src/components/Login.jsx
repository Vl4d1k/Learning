import React from "react"
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" onSubmit={props.handleSubmit}>
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">Login</label>
                <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" component="input" name="login" placeholder="Login"/>
            </div>
            <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                <Field className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" component="input" name="password" type="password" placeholder="Password" />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </button>
                <div className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </div>
            </div>
        </form>
    )
}

const Login = (props) => {

    const onSubmit = (values) => {
        // print the form values to the console
        console.log(values)
    }

    return (
        <div className="py-10 h-screen w-full bg-gray-300 px-2">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-full">
                <div className="md:flex">
                    <div className="w-full p-4">
                        <LoginReduxForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login