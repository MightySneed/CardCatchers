import readCookie from "./readCookie";

// updatePassword.js
const updatePassword = async (newPassword) => {
    try {
        const token = readCookie('jwt_token')
        const res = await fetch('https://cardcatchersbackend-production.up.railway.app/updatePassword', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ password: newPassword }),
        });
        
        if (!res.ok) {
            throw new Error('Failed to update password');
        }

        const result = await res.json();
        console.log('Password updated successfully:', result);
        return result;
    } catch (error) {
        console.error('Error updating password:', error);
        throw error;
    }
};

export default updatePassword;
