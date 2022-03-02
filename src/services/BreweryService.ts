import axios from 'axios';

export async function getBrreweries(breweriesURL: string, urlParams: any) {
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
