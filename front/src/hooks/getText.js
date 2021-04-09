
export const getTexts = async( category ) => {

    const url = `http://18.223.115.36:5000/iecho?text=${ encodeURI( category ) }`
    const resp = await fetch( url )
    const data  = await resp.json()
    return data

}