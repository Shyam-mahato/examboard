import React from 'react'
import {useRouter} from 'next/router';
function Name() {

    const router = useRouter();
    const {name} = router.query;
    return (
        <div>
            <h1>Welcome {name} to my dynaic page</h1> 
        </div>
    )
}

export default Name
