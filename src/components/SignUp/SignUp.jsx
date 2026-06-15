import React, {useState} from 'react'

function SignUp() {
    
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Name: ",name);
        console.log("Mobile Number: ",mobileNumber);
        console.log("Email: ",email);
        console.log("Password: ",password);

        alert("Account Created Succesfully!");
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white w-96 p-8 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-4 px-4 py-2 border rounded-lg"/>
                    <input type="number" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="w-full mb-4 px-4 py-2 border rounded-lg"/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 px-4 py-2 border rounded-lg"/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-6 px-4 py-2 border rounded-lg"/>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Create Account</button>
                </form>

                <p className="text-sm text-center mt-4 text-gray-500">Already have an account? <span className="text-blue-500 cursor-pointer">Login</span></p>

            </div>
        </div>
    )
}

export default SignUp
