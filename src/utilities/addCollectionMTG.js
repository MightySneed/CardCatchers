import readCookie from "./readCookie";

export const addToCollectionMTG = async (scryfall_uri, name, game) =>  {
    try {
        console.log(scryfall_uri, name, game)
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
                        url: scryfall_uri,
                        name: name,
                        game: "MTG"
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