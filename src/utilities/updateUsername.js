import readCookie from "./readCookie";

// updateUsername.js
const updateUsername = async (newUsername) => {
    try {
        const token = readCookie('jwt_token')
        const res = await fetch('https://cardcatchersbackend-production.up.railway.app/updateUsername', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ newUsername: newUsername }),
        });
        
        if (!res.ok) {
            throw new Error('Failed to update username');
        }

        const result = await res.json();
        console.log('Username updated successfully:', result);
        return result;
    } catch (error) {
        console.error('Error updating username:', error);
        throw error;
    }
};

export default updateUsername;
