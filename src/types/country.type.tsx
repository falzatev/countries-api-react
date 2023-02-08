export default interface ICountryData {
    id?: any | null,
    [name: string]: any,
    currencies?: any,
    capital?: string,
    region?: string,
    subregion?: string,
    population?: bigint,
    countinents?: string,
}