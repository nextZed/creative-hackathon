/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { covidAll } from '../models/covidAll';
import type { covidContinent } from '../models/covidContinent';
import type { covidContinents } from '../models/covidContinents';
import type { covidCountries } from '../models/covidCountries';
import type { covidCountry } from '../models/covidCountry';
import type { covidState } from '../models/covidState';
import type { covidStates } from '../models/covidStates';
import { request as __request } from '../core/request';

export class Covid19WorldometersService {

    /**
     * Get global COVID-19 totals for today, yesterday and two days ago
     * @returns covidAll Status OK
     * @throws ApiError
     */
    public static async getCovid19WorldometersService({
        yesterday,
        twoDaysAgo,
        allowNull,
    }: {
        /** Queries data reported a day ago **/
        yesterday?: any,
        /** Queries data reported two days ago **/
        twoDaysAgo?: any,
        /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned **/
        allowNull?: any,
    }): Promise<covidAll> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/all`,
            query: {
                'yesterday': yesterday,
                'twoDaysAgo': twoDaysAgo,
                'allowNull': allowNull,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 totals for all US States
     * @returns covidStates Status OK
     * @throws ApiError
     */
    public static async getCovid19WorldometersService1({
        sort,
        yesterday,
        allowNull,
    }: {
        /** Provided a key (e.g. cases, todayCases, deaths, active), result will be sorted from greatest to least **/
        sort?: any,
        /** Queries data reported a day ago **/
        yesterday?: any,
        /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned **/
        allowNull?: any,
    }): Promise<covidStates> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/states`,
            query: {
                'sort': sort,
                'yesterday': yesterday,
                'allowNull': allowNull,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 totals for specific US State(s)
     * @returns covidState Status OK
     * @throws ApiError
     */
    public static async getCovid19WorldometersService2({
        states,
        yesterday,
        allowNull,
    }: {
        /** State name or comma separated names spelled correctly **/
        states: any,
        /** Queries data reported a day ago **/
        yesterday?: any,
        /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned **/
        allowNull?: any,
    }): Promise<covidState> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/states/${states}`,
            query: {
                'yesterday': yesterday,
                'allowNull': allowNull,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 totals for all continents
     * @returns covidContinents Status OK
     * @throws ApiError
     */
    public static async getCovid19WorldometersService3({
        yesterday,
        twoDaysAgo,
        sort,
        allowNull,
    }: {
        /** Queries data reported a day ago **/
        yesterday?: any,
        /** Queries data reported two days ago **/
        twoDaysAgo?: any,
        /** Provided a key (e.g. cases, todayCases, deaths, recovered, active), results will be sorted from greatest to least **/
        sort?: any,
        /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned **/
        allowNull?: any,
    }): Promise<covidContinents> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/continents`,
            query: {
                'yesterday': yesterday,
                'twoDaysAgo': twoDaysAgo,
                'sort': sort,
                'allowNull': allowNull,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 totals for a specific continent
     * @returns covidContinent Status OK
     * @throws ApiError
     */
    public static async getCovid19WorldometersService4({
        continent,
        yesterday,
        twoDaysAgo,
        strict,
        allowNull,
    }: {
        /** Continent name **/
        continent: any,
        /** Queries data reported a day ago **/
        yesterday?: any,
        /** Queries data reported two days ago **/
        twoDaysAgo?: any,
        /** Setting to false gives you the ability to fuzzy search continents (i.e. Oman vs. rOMANia) **/
        strict?: any,
        /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned **/
        allowNull?: any,
    }): Promise<covidContinent> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/continents/${continent}`,
            query: {
                'yesterday': yesterday,
                'twoDaysAgo': twoDaysAgo,
                'strict': strict,
                'allowNull': allowNull,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 totals for all countries
     * @returns covidCountries Status OK
     * @throws ApiError
     */
    public static async getCovid19WorldometersService5({
        yesterday,
        twoDaysAgo,
        sort,
        allowNull,
    }: {
        /** Queries data reported a day ago **/
        yesterday?: any,
        /** Queries data reported two days ago **/
        twoDaysAgo?: any,
        /** Provided a key (e.g. cases, todayCases, deaths, recovered, active), the result will be sorted from greatest to least **/
        sort?: any,
        /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned **/
        allowNull?: any,
    }): Promise<covidCountries> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/countries`,
            query: {
                'yesterday': yesterday,
                'twoDaysAgo': twoDaysAgo,
                'sort': sort,
                'allowNull': allowNull,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 totals for a specific country
     * @returns covidCountry Status OK
     * @throws ApiError
     */
    public static async getCovid19WorldometersService6({
        country,
        yesterday,
        twoDaysAgo,
        strict,
        allowNull,
    }: {
        /** A country name, iso2, iso3, or country ID code **/
        country: any,
        /** Queries data reported a day ago **/
        yesterday?: any,
        /** Queries data reported two days ago **/
        twoDaysAgo?: any,
        /** Setting to false gives you the ability to fuzzy search countries (i.e. Oman vs. rOMANia) **/
        strict?: any,
        /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned **/
        allowNull?: any,
    }): Promise<covidCountry> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/countries/${country}`,
            query: {
                'yesterday': yesterday,
                'twoDaysAgo': twoDaysAgo,
                'strict': strict,
                'allowNull': allowNull,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 totals for a specific set of countries
     * @returns covidCountries Status OK
     * @throws ApiError
     */
    public static async getCovid19WorldometersService7({
        countries,
        yesterday,
        twoDaysAgo,
        allowNull,
    }: {
        /** Multiple country names, iso2, iso3, or country IDs separated by commas **/
        countries: any,
        /** Queries data reported a day ago **/
        yesterday?: any,
        /** Queries data reported two days ago **/
        twoDaysAgo?: any,
        /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned **/
        allowNull?: any,
    }): Promise<covidCountries> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/countries/${countries}`,
            query: {
                'yesterday': yesterday,
                'twoDaysAgo': twoDaysAgo,
                'allowNull': allowNull,
            },
        });
        return result.body;
    }

}