export async function fetcher(url, options={}){
  try{
    let response
    
    response = await fetch(url,options)

    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }
  
    
    return response.json

  } catch(err){
    console.log(err);
  }  
}