export const  getGifs =async(category) =>{
    const url = "https://api.giphy.com/v1/gifs/search?api_key=7xZCv29kiZKp84v0HSk9DlpUqFoMhr4a&q=" + category + "&limit=4";
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      };

    });
    return gifs;
  }