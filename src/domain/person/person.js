import { Address, Email, Phone } from '.';
import Entity from '../entity';
import moment from 'moment';

class Person extends Entity {

    /**
     * Pessoa
     * @param {string} name Nome
     * @param {string} lastName Sobrenome
     * @param {string} birthDate Data de Nascimento
     * @param {Email} email Endereço de email
     * @param {Phone} phone Telefone
     * @param {Address} address Endereço
     * @param {string} id Identificador da Pessoa
     */
    constructor(name, lastName, birthDate, email, phone, address, id) {
        super(id);

        if (!name) throw new TypeError('The "Person Name" field is required.');
        if (!lastName) throw new TypeError('The "Person Surname" field is required.');
        
        if (!birthDate) throw new TypeError('The "Person Birth Date" field is required.');
        if ((typeof birthDate) !== 'string') throw new TypeError('The "Person Birth Date" field must be a string.');
        const bDate = moment(birthDate, 'YYYY-MM-DD');
        if (!bDate.isValid()) throw new TypeError('The "Person Birth Date" field must be a date in the format YYYY-MM-DD.');
        
        if (!email) throw new TypeError('The "Person Email" field is required.');
        if (!(email instanceof Email)) throw new TypeError('The "Person Email" field must be of type Email.');
        
        if (!phone) throw new TypeError('The "Person Phone" field is required.');
        if (!(phone instanceof Phone)) throw new TypeError('The "Person Phone" field must be of type Phone.');
        
        if (!address) throw new TypeError('The "Person Address" field is required.');
        if (!(address instanceof Address)) throw new TypeError('The "Person Address" field must be of type Address.');

        this.name = name;
        this.lastName = lastName;
        this.birthDate = bDate.format();
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

}

export default Person;