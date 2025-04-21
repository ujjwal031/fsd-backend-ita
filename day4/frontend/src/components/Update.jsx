import React, { useState } from 'react';
import axios from 'axios';

const Update = () => {
    const [notification, setNotification] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleupdate = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const id = e.target.id.value;
            const name = e.target.name.value;
            const age = e.target.age.value;
            const user = { name, age };
            
            await axios.put(`https://fsd-backend-ita.onrender.com/users${id}`, user);
            
            setNotification('User updated successfully!');
            
            e.target.reset();
            
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
            <h2>Update User</h2>
            <form onSubmit={handleupdate}>
                <label htmlFor="id">User ID:</label>
                <input 
                    type="text" 
                    id="id" 
                    name="id" 
                    required 
                    placeholder="Enter user ID"
                />

                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Enter new name"
                />

                <label htmlFor="age">Age:</label>
                <input 
                    type="number" 
                    id="age" 
                    name="age" 
                    required 
                    placeholder="Enter new age"
                />

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                    {isSubmitting ? 'Updating...' : 'Update User'}
                </button>
            </form>
            
            {notification && (
                <div className="notification">
                    {notification}
                </div>
            )}
        </div>
    );
};

export default Update;
