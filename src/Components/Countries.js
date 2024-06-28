import React ,{useEffect ,useState}from 'react';
 const url = 'https://restcountries.com/v3.1/all'
const Countries = () => {
  const [countries ,setCountries]=useState([]);

const fetchCountryData=async()=>{
  const response = await fetch(url)
  const countries=await response.json()
  setCountries(countries)
  console.log(countries)
}

useEffect(()=>{
  fetchCountryData()
},[])

  

  return (
    <div>
      {countries.map((country)=>{
        const {id,name,capital,region,population,flag} =country
      return(
        <article key={id}>
          country <data value=""></data>

        </article>
      )
      })}
    </div>
  );
}

export default Countries;
