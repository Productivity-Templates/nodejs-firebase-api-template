class Address {

    /**
     * Endereço
     * @param {string} street Rua
     * @param {string} streetNumber Número
     * @param {string} district Bairro
     * @param {string} zipCode CEP
     * @param {string} city Cidade
     * @param {string} state Estado (duas letras)
     * @param {string} additionalInfo Complemento
     */
    constructor(street, streetNumber, district, zipCode, city, state, additionalInfo) {
        if (!street) throw new TypeError('The "Street" field is required.');
        if (!streetNumber) throw new TypeError('The "Number" field, related to the "Address" is required.');
        if (!district) throw new TypeError('The "District" field is required.');
        
        if (!zipCode) throw new TypeError('The "ZIP Code" field is required.');
        if (zipCode.length != 8) throw new TypeError('The "ZIP Code" field must contain 8 numbers, without hyphens or periods.');
        if (!/^\d+$/.test(zipCode)) throw new TypeError('The "ZIP Code" field must contain 8 numbers, without hyphens or periods.');
        
        if (!city) throw new TypeError('The "City" field is required.');
        
        if (!state) throw new TypeError('The "State" field is required.');
        if (state.length != 2) throw new TypeError('The "State" field must contain only 2 letters, without hyphens or periods.');
        if (!/^[a-zA-Z]+$/.test(state)) throw new TypeError('The "State" field must contain only 2 letters, without hyphens or periods.');
        
        this.street = street;
        this.streetNumber = streetNumber;
        this.district = district;
        this.zipCode = zipCode;
        this.city = city;
        this.state = state;
        this.additionalInfo = additionalInfo;
        this.country = 'BRA';
    }

}

export default Address;