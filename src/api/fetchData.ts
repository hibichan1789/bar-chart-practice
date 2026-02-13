// src/api/fetchData.ts

export async function fetchAPIData<T>(apiUrl:string):Promise<T>{
    const response = await fetch(apiUrl);
    if(!response.ok){
        console.error(await response.text());
        throw new Error("データの取得に失敗しました");
    }
    const fetchedData:T = await response.json();
    return fetchedData;
}