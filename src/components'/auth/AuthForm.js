import { registerUser } from '../../firebase/login/registerUser'
import { loginGoogle } from '../../firebase/login/loginGoogle'
import { loginUserPass } from '../../firebase/login/loginUserPass'

const AuthForm = () => {

    const sendDataRegister = () => {
        const email =  document.getElementsByClassName('mail')[0].value
        const password =  document.getElementsByClassName('password')[0].value
        registerUser( email, password )
    }
    const sendDataLogin = () => {
        const email =  document.getElementsByClassName('mail')[1].value
        const password =  document.getElementsByClassName('password')[1].value
        loginUserPass( email, password )
    }

    return(
        <div className='basic-form' >
            <div className='registrate'>
                <h2>Register:</h2>
                <label form="realName">Nombre: </label>
                    <input className="realName" name="realName" />

                <label form="userName">Nombre de Usuario: </label>
                    <input className="userName" name="userName" />

                <label form="mail">Email: </label>
                    <input type='email' className="mail" name="mail"/>

                <label form="password">Contraseña</label>
                    <input type='password' className="password" name="password" />

                <label form="confirmPassword">Confirma tu Contraseña: </label>
                    <input className="confirmPassword" name="confirmPassword" />

                <button onClick={ sendDataRegister } >Enviar</button> 
            </div>
            <div className='inicia-seccion'>
                <h2>inicia Seccion:</h2>
                <label form="userName">Email: </label>
                    <input type='email' className="mail" name="userName" />

                <label form="password">Contraseña</label>
                    <input className="password" name="password" />

                <button onClick={ sendDataLogin } >Enviar</button> 
            </div>
                <button onClick={ loginGoogle } >Entrar con Google</button> 
        </div>
    )
}
export default AuthForm