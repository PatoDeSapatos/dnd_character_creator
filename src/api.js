export const searchClass = async ( className ) => {
    try {
        let url = `https://www.dnd5eapi.co/api/classes/${className}`;
        const response = await fetch(url);
        return await response.json();
    } catch ( error ) {
        console.error( error );
    }
}