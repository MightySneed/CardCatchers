const register = async (email, username, password) => {
    try {
        const res = await fetch(
            "https://cardcatchersbackend-production.up.railway.app/addUser",
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