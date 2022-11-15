import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//
function CountryDetails() {
  const { detailID } = useParams();
  const [selectedCountry, setSelectedCountry] = useState({});
  /* 
  const selectedCountry = countries.find((countrie) => {
    return countrie.alpha3Code === detailID;
  });
 */
  let ender = `https://ih-countries-api.herokuapp.com/countries/${detailID}`;
  console.log(ender);
  //
  useEffect(() => {
    axios.get(ender).then((response) => {
      setSelectedCountry(response.data);
      console.log(selectedCountry, 'response.data selelcted');
    });
  }, [detailID]);

  //console.log(selectedCountry, 'selectedCountry-----');

  return (
    selectedCountry && (
      <div>
        <div>teagoiasjo fasjf oafja {ender}</div>

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
    )
  );
}

export default CountryDetails;
