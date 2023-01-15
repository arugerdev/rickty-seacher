export default async function getApiEpisode(id) {
    const apiURL = `https://rickandmortyapi.com/api/episode/${id}`

    try {
        return fetch(apiURL).then(res => res.json()).then((response) => {
            return response
        });
    }
    catch (err) {
        console.log('ERROR:' + err)
    }
}