const register = async (email, username, password) => {
    try {
        const res = await fetch(
            'http://localhost:5001/addUser',
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password,
                    username: username
                })
            }
        )
        const newUser = await res.json()
        console.log(newUser)
    } catch (error) {
        console.log(error)
    }
}

export default register