import { RestCountry } from '../country/interfaces/rest-country.interfaces';
import { Country } from '../country/interfaces/country.interface';
export class CountryMapper{

  static mapRestCountrytoCountry(restCountry: RestCountry): Country{
    return {
      capital : restCountry.capital,
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg : restCountry.flags.svg,
      name : restCountry.name.common,
      population: restCountry.population,
    };
  }

  static mapRestCountryArrayToCountryArray(restCountries : RestCountry[]): Country[]{
    return restCountries.map((country)=>this.mapRestCountrytoCountry(country));
  }
}
