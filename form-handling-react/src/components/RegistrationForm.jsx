const { useState } = require("react");

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const tempErrors = {};
    
        if (!username) {
            tempErrors.username = "Username required!!!";
        } else {
            tempErrors.username = "";
        }
    
        if (!email) {
            tempErrors.email = "Email required";
        } else {
            tempErrors.email = "";
        }
    
        if (!password) {
            tempErrors.password = "Password required!";
        } else {
            tempErrors.password = "";
        }
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            {errors.name && <p style={{color: 'red'}}>{errors.username}</p>}

            <label htmlFor="email">Email: </label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}

            <label htmlFor="password">Password: </label>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
