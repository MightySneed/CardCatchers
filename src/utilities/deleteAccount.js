import readCookie from "./readCookie";

// deleteAccount.js
const deleteAccount = async (username) => {
    try {
        const token = readCookie('jwt_token')
        const res = await fetch('https://cardcatchersbackend-production.up.railway.app/deleteUser', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ username: username }),
        });
        
        if (!res.ok) {
            throw new Error('Failed to delete user');
        }

        const result = await res.json();
        console.log('User deleted successfully');
        return result;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export default deleteAccount;
