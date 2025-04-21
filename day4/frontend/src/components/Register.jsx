import React, { useState } from 'react'
import axios from 'axios'
import "./Register.css";

const Register = () => {
    const [notification, setNotification] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleregister = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Extract values from form inputs
            const name = e.target.name.value;
            const age = e.target.age.value;

            // Create a user object with name and age
            const user = { name, age };

            // Send the POST request with the user object
            await axios.post('https://fsd-backend-ita.onrender.com/users', user);
            
            // Show notification
            setNotification('User registered successfully!');
            
            // Clear form
            e.target.reset();
            
            // Clear notification after 3 seconds
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        } catch (error) {
            setNotification(`Error: ${error.message}`);
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="item-animation">
          <h2>User Register</h2>

            <form onSubmit={handleregister}>
                <label>
                    Name : 
                    <input type='text' name='name' required placeholder="Enter your name" />
                </label>
                <label>
                    Age : 
                    <input type='number' name='age' required placeholder="Enter your age" />
                </label>

                <button 
                    type='submit' 
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                    {isSubmitting ? 'Registering...' : 'Register'}
                </button>
            </form>
            
            {notification && (
                <div className="notification">
                    {notification}
                </div>
            )}
        </div>
    )
}

export default Register;
