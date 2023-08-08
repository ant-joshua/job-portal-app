import React, {useState} from "react";

const Login = () => {
    const [errors, setErrors] = useState<{field: string,message: string,isValid: boolean}[]>([{
        field: "email",
        message: "Email is not valid",
        isValid: true
    },{
        field: "password",
        message: "Password is not valid",
        isValid: true
    }]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const disableIfErrors = () => {
        let isDisabled = false;
        errors.forEach((error) => {
            if (!error.isValid) {
                isDisabled = true;
            }
        });
        return isDisabled;
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        // validate email
        let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
        if (!regex.test(e.target.value)) {

            const mapErrors = errors.map((error) => {
                if (error.field === "email") {
                    return {
                        ...error,
                        message: "Email is not valid",
                        isValid: false
                    }
                }
                return error;
            });

            setErrors(mapErrors);
        }else{
            const mapErrors = errors.map((error) => {
                if (error.field === "email") {
                    return {
                        ...error,
                        message: "Email is not valid",
                        isValid: true
                    }
                }
                return error;
            });
            setErrors(mapErrors);
        }
        setEmail(e.target.value);
    }

    return (
        <>
            <h1>Login</h1>
            <div className={"mt-2 flex grid-cols-2 gap-2 align-middle"}>
                <label htmlFor={"email"} className={"self-center"}>Email</label>
                <input type={"text"} className={
                    "border-2 border-gray-200 rounded-md p-2"
                } placeholder={"Email"} value={email} onChange={onChangeEmail}/>
            </div>

            <div className={"mt-2 flex grid-cols-2 gap-2 "}>
                <label htmlFor={"password"} className={"self-center"}>Password</label>
                <input type={"password"} className={
                    "border-2 border-gray-200 rounded-md p-2"
                } placeholder={"Password"}/>
            </div>

            <div>
                <button className={`bg-blue-500 text-white p-2 rounded-md mt-2 disabled:cursor-not-allowed disabled:opacity-25`} disabled={disableIfErrors()}>Login</button>
            </div>

            <div>
                <h2>Errors</h2>
                <ul>
                    {errors.map((error,index) => ((!error.isValid && (
                        <li key={index}>{error.field} : {error.message}</li>
                    ))))}
                </ul>

            </div>
        </>
    )

}

export default Login;
