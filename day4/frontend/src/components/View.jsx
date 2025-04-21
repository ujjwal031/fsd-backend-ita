import React, { useEffect, useState } from 'react'
import axios from 'axios'

const View = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleviews = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:9000/users');
            setUsers(res.data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleviews();
    }, []);

    return (
        <div className="table-container">
            <h2>Registered Users</h2>
            
            {loading ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    Loading users...
                </div>
            ) : users.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)' }}>
                    No users registered yet
                </div>
            ) : (
                <div style={{ overflow: 'auto' }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid #444',
                        borderRadius: 'var(--border-radius)',
                        overflow: 'hidden'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}>
                                <th style={tableHeaderStyle}>ID</th>
                                <th style={tableHeaderStyle}>Name</th>
                                <th style={tableHeaderStyle}>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr 
                                    key={user.id} 
                                    style={{
                                        ...tableRowStyle,
                                        animation: `fadeIn ${0.3 + index * 0.1}s ease-out`
                                    }}
                                >
                                    <td style={tableCellStyle}>{user.id}</td>
                                    <td style={tableCellStyle}>{user.name}</td>
                                    <td style={tableCellStyle}>{user.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            <button 
                onClick={handleviews} 
                style={{ 
                    maxWidth: '200px', 
                    margin: '20px auto',
                    display: 'block'
                }}
            >
                Refresh Users
            </button>
        </div>
    )
}

// Table styles
const tableHeaderStyle = {
    padding: '12px 15px',
    textAlign: 'left',
    fontWeight: 'bold'
}

const tableRowStyle = {
    borderBottom: '1px solid #444',
    transition: 'background-color 0.3s ease'
}

const tableCellStyle = {
    padding: '12px 15px',
    textAlign: 'left'
}

export default View