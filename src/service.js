const queryStrings = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_API_KEY
}

export const fetchData = async (defaultQuery) => {
    //const {app_id,app_key} = queryStrings
    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&beta=true&q=${defaultQuery}&app_id=911e77d3&app_key=c8b3157934ae3e21b8aee6185090a992`)
      
        //  https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}
        // https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=911e77d3&app_key=c8b3157934ae3e21b8aee6185090a992

        const response = await data.json();
        return response;
    }
    catch(e) {
        console.log(e,'Something wrong happend');
        return e
    }
}

export const fetchTabData = async (defaultQuery) => {
    // const {app_id,app_key} = queryStrings
    try{const data = await fetch(`https://api.edamam.com/api/recipes/v2/0209cb28fc05320434e2916988f47b71?type=public&beta=true&app_id=911e77d3&app_key=c8b3157934ae3e21b8aee6185090a992`)
        const response = await data.json();
        return response;
    }
    catch(e) {
        console.log(e,'Something wrong happend');
        return e;
    }
}