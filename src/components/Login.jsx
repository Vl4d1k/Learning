import React from "react"
import { Field, reduxForm } from 'redux-form'
import {loginThunkCreator, logoutThunkCreator} from '../redux/authReducer'
import { connect } from "react-redux"

const required = value => value ? undefined : <span className="text-red-500 italic text-sm font-bold mb-2">Required</span>

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">{label}</label>
      <div>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const LoginForm = (props) => {
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" onSubmit={props.handleSubmit}>
            <div className="mb-4">
                <Field validate={[required]} name="email" component={renderField} label="Email"/>
            </div>
            <div className="mb-4">
                <Field validate={[required]} name="password" type="password" component={renderField} label="Password" />
            </div>
            {props.error ? <div className="mb-4">{props.error}</div> : ""}
            <div className="mb-4">
                <Field name="rememberMe" component="input" type="checkbox"/>
                <span className="ml-2">Remember me</span>
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
        console.log(values)
        props.loginThunkCreator(values)
    }

    const onSignOutClick = () => {
        props.logoutThunkCreator()
    }

    return (
        <div className="py-10 h-screen w-full bg-gray-300 px-2">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-full">
                <div className="md:flex">
                    <div className="w-full p-4">
                        {props.auth.isAuth ? 
                            <button onClick={onSignOutClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Out</button> :
                            <LoginReduxForm onSubmit={onSubmit}/>    
                        }    
                    </div>
                </div>
            </div>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator})(Login)