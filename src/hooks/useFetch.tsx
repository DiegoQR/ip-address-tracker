export default function useFetch(baseUrl: string) {
    function get(url: string) {
        return fetch(baseUrl + url)
                .then(response => response.json());
    }

    return { get }
}