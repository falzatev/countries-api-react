import api from '../http-common/http-common';
import ICountryData from '../types/country.type';

class CountryService {
    getAll() {
        debugger
        return api.get<Array<ICountryData>>('all');
    }

    findByName(name: string) {
        return api.get<ICountryData>(`name/${name}`);
    }
}

export default new CountryService();
