/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { covidNYTCounty } from '../models/covidNYTCounty';
import type { covidNYTState } from '../models/covidNYTState';
import type { covidNYTUSA } from '../models/covidNYTUSA';
import { request as __request } from '../core/request';

export class Covid19NytService {

    /**
     * Get COVID-19 time series data for all states, with an entry for each day since the pandemic began
     * @returns covidNYTState Status Ok
     * @throws ApiError
     */
    public static async getCovid19NytService({
        lastdays,
    }: {
        /** Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24) **/
        lastdays?: any,
    }): Promise<covidNYTState> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/nyt/states`,
            query: {
                'lastdays': lastdays,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 time series data for a state or set of states, with an entry for each day since the pandemic began
     * @returns covidNYTState Status Ok
     * @throws ApiError
     */
    public static async getCovid19NytService1({
        state,
        lastdays,
    }: {
        /** State name(s), separated by commas (e.g. 'Illinois, California') **/
        state: any,
        /** Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24) **/
        lastdays?: any,
    }): Promise<covidNYTState> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/nyt/states/${state}`,
            query: {
                'lastdays': lastdays,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 time series data for all available US counties, with an entry for each day since the pandemic began
     * @returns covidNYTCounty Status Ok
     * @throws ApiError
     */
    public static async getCovid19NytService2({
        lastdays,
    }: {
        /** Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24) **/
        lastdays?: any,
    }): Promise<covidNYTCounty> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/nyt/counties`,
            query: {
                'lastdays': lastdays,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 time series data for a county or set of counties, with an entry for each day since the pandemic began
     * @returns covidNYTCounty Status Ok
     * @throws ApiError
     */
    public static async getCovid19NytService3({
        county,
        lastdays,
    }: {
        /** County name(s), separated by commas (e.g. 'Alameda, Humboldt') **/
        county: any,
        /** Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24) **/
        lastdays?: any,
    }): Promise<covidNYTCounty> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/nyt/counties/${county}`,
            query: {
                'lastdays': lastdays,
            },
        });
        return result.body;
    }

    /**
     * Get COVID-19 time series data for the entire USA, with an entry for each day since the pandemic began
     * @returns covidNYTUSA Status Ok
     * @throws ApiError
     */
    public static async getCovid19NytService4(): Promise<covidNYTUSA> {
        const result = await __request({
            method: 'GET',
            path: `/v3/covid-19/nyt/usa`,
        });
        return result.body;
    }

}