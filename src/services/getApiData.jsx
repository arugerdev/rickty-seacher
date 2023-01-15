export default async function getApiData(keyword, page) {
    const apiURL = `https://rickandmortyapi.com/api/character?page=${page}&name=${keyword}`

    try {
        return fetch(apiURL).then(res => res.json()).then((response) => {
            if (response.error) {
                return { data: { info: { error: response.error } } };
            }

            return response
        });
    }
    catch (err) {
        console.log('ERROR:' + err)

    }
}