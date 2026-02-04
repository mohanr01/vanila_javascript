// fetch
async function fetchData(url) {
    try {
        let response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
}
// Example usage:

let fetchDataResp = fetchData('https://fakestoreapi.com/product/1');
    fetchDataResp
    .then(data => {
        console.log("Fetched data:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    }).finally(() => {
        console.log("Fetch operation completed.");
    });