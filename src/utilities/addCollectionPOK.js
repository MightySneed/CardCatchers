import readCookie from "./readCookie";

export const addToCollectionPOK = async (username ,id, name, game) =>  {
    try {
        const uri = "https://api.pokemontcg.io/v2/cards/" + id
        console.log(uri, name, game)
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
                        url: uri,
                        name: name,
                        game: "POK",
                        username: username
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