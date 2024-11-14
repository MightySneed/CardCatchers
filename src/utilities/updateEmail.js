import readCookie from "./readCookie";

// updateEmail.js
const updateEmail = async (newEmail) => {

    try {
        const token = readCookie('jwt_token')
        const res = await fetch('https://cardcatchersbackend-production.up.railway.app/updateEmail', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ newEmail: newEmail }),
        });
        
        if (!res.ok) {
            throw new Error('Failed to update email');
        }

        const result = await res.json();
        console.log('Email updated successfully:', result);
        return result;
    } catch (error) {
        console.error('Error updating email:', error);
        throw error;
    }
};

export default updateEmail;