import readCookie from "./readCookie";
export const addToCollectionYGO = async (url, name, game) =>  {
    try {
        console.log(url, name, game)

        const token = readCookie('jwt_token')
        console.log(token)
        const auth = 'Bearer ' + token
        const res = await fetch(
            "https://cardcatchersbackend-production.up.railway.app/addCard",
            {
                method: "POST",
                headers: {"Content-Type":"application/json", 
                    "Authorization": auth
                },
                body: JSON.stringify(
                    {
                        url: url,
                        name: name,
                        game: "YGO"
                    }
                )
            }
        )
        const data = await res.json();
        console.log(data)
        return res.status
    } catch (error) {
        console.log(error);
    }
}