import axios from 'axios';

export async function getBrreweries(breweriesURL: string, urlParams: any): Promise<object | null> {
  let breweries = null;
  await axios
    .get(breweriesURL, {
      params: urlParams,
    })
    .then(function(response) {
      breweries = response.data;
    });
  return breweries;
}
