import React, { useEffect, useState } from 'react';

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log('Error fetching country data:', error);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
    <section className='grid'>
    {countries.map((country) => {
        const { name, population, region, capital, flags } = country;
        const { common } = name;
        const flag = flags.png;

        return (
          <article key={common}>
            <div>
              <img src={flag} alt={common} />
              <div className='details'>
              <h3>{common}</h3>
              <h4>Population: <span>{population}</span></h4>
              <h4>Region: <span>{region}</span></h4>
              <h4>Capital: <span>{capital}</span></h4>
              </div>
            </div>
          </article>
        );
      })}

    </section>
    </>
  );
};

export default Countries;