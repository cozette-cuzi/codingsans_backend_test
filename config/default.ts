export default {
  port: 3000,
  dbURI: "",
  saltWorkFactor: 10, // how many roundes the password will be salted
  jwtSecretKey: "",
  accessTokenTtl: "1h",
  breweriesURL: "https://api.openbrewerydb.org/breweries",
};
