import { params, tiposCita } from "../types/types";

async function generarCita({author, genre, limit}: params): Promise<tiposCita> {
  return fetch(`https://quote-garden.onrender.com/api/v3/quotes?${author ? `author=${author}`: ""}&${genre ? `genre=${genre}`: ""}&${limit ? `limit=${limit}`: ""}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(data => {
    console.log(data.data)
    return data.data as tiposCita
  })
  .catch(error => error)
}

export default generarCita