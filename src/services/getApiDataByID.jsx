export default async function getApiDataByID(id) {
    const apiURL = `https://rickandmortyapi.com/api/character/${id}`

    try {
        return fetch(apiURL).then(res => res.json()).then((response) => {
            return response
        });
    }
    catch (err) {
        console.log('ERROR:' + err)
    }
}