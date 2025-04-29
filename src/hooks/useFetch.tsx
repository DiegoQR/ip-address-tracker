import { useState } from "react";

export default function useFetch(baseUrl: string) {
    const [loading, setLoading] = useState<boolean>(true);

    function get(url: string) {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}${url}`)
            .then((response) => response.json())
            .then((data) => {
                if (!data || data.hasOwnProperty('message')) {
                    setLoading(false);
                    alert(data.message || "Error fetching data");
                    return reject(data);
                }
                setLoading(false);
                resolve(data);
            })
            .catch((error) => {
                setLoading(false);
                reject(error);
            });

        });
    }

    return { get, loading }
}