import React from 'react'
import { useState, useEffect } from 'react';
const URL = "https://jsonplaceholder.typicode.com/posts";

function FetchData() {
    const [isLoading, setIsLoading] = useState(false);

    const [posts, setPosts] = useState([]);

    async function fetchData() {
        setIsLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        
        console.log(data);
        setPosts(data);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);

    if(isLoading){
        return(
            <h1>Loading...</h1>
        );
    }

    return (
        <>
            <h1>Fetch</h1>

            {posts.map((post)=> {
                return(
                    <article>
                    {post.id}
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    </article>
                );
            })}
        </>
    );
}

export default FetchData;
/*

* We have to fetch the data
* After rendering the data, we have to fetch the data
for that we'd use `useEffect` with empty dep. arr "[]" so that it runs only once.

`async function fetchData() {`
* async func issliye banaya, bcs I wanted to use the `await` statement

* fetch from the URL
* fetch the data asyncronously so we'd use async await

we'd create async function `fetchData()`
* useEffect ke callback mein `fetchData()` ko call karna hai
* for fetching data we'd pass fetch api ?????

fetch `promise` kar rha hai, ki main data ko fetch karunga iss URL se, awr promise ko fulfil karne ke liye thoda time lagega.
`const response = await fetch(URL);`
`response.json()` <-- this will take some time as it is going to change the response into js obj, this will take some time, so we are going to use `await` here again...
`const data = await response.json();`

*  to store the data we'd use `State` i.e. useState()
`const [posts, setPosts] = useState([]);`
...
`setPosts(data);`

baaki ka Screen pe render karne ke liye, 
`<h1>Fetch</h1>
            {posts.map((post)=> {
                return(
                    <article>
                    {post.id}
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    </article>
                );
            })}
`
we write this inside the return statement...!
*/