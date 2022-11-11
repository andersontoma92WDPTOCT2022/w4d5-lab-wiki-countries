//import CountryDetails from './CountryDetails';
import { Link } from 'react-router-dom';

function CountriesList({ countries, setCountries }) {
  return (
    <div>
      {countries.map((countrie) => {
        return (
          <article key={countrie.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${countrie.alpha2Code.toLowerCase()}.png`}
              alt="flags"
            />
            <Link to={`/${countrie.alpha3Code}`}>{countrie.name.common}</Link>
          </article>
        );
      })}
    </div>
  );
}

export default CountriesList;
