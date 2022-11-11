import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//
function CountryDetails({ countries }) {
  const { detailID } = useParams();
  const selectedCountry = countries.find((countrie) => {
    return countrie.alpha3Code === detailID;
  });

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`}
        alt="flags"
      />
      <h3>Capital {selectedCountry.name.common}</h3>
      <p>Capital {selectedCountry.capital}</p>
      <p>Area {selectedCountry.area}</p>
      <p>borders</p>
      {selectedCountry.borders.map((vizinho, index) => {
        return (
          <div key={selectedCountry.borders[index]}>
            <Link to={`/${selectedCountry.borders[index]}`}>{vizinho}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountryDetails;
