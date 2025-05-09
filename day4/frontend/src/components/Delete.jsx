import React, { useState } from 'react'
import axios from 'axios'

const Delete = () => {
    const [notification, setNotification] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const id = e.target.id.value;
            await axios.delete(`http://localhost:9000/users/${id}`);
            
            // Show notification
            setNotification('User deleted successfully!');
            
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
    }

    return (
        <div className="item-animation">
            <h2>Delete User</h2>
            <form onSubmit={handleDelete}>
                <div className="form-field">
                    <label htmlFor="user-id">User ID:</label>
                    <input 
                        type="text" 
                        id="user-id"
                        name="id" 
                        required 
                        placeholder="Enter user ID to delete"
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{
                        opacity: isSubmitting ? 0.7 : 1,
                        backgroundColor: 'var(--error-color)'
                    }}
                >
                    {isSubmitting ? 'Deleting...' : 'Delete User'}
                </button>
            </form>
            
            {notification && (
                <div className="notification" style={{
                    color: notification.includes('Error') ? 'var(--error-color)' : 'var(--success-color)'
                }}>
                    {notification}
                </div>
            )}
        </div>
    )
}

export default Delete