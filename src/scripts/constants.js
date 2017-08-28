import companyImg1 from '../assets/images/company1.jpg';
import companyImg2 from '../assets/images/company2.jpg';
import companyImg3 from '../assets/images/company3.jpg';

import personImg1 from '../assets/images/person1.jpg';
import personImg2 from '../assets/images/person2.jpg';
import personImg3 from '../assets/images/person3.jpg';

export const COMPANIES = [
  {
    id: 1,
    type: 'Manufacturer',
    city: 'Belgrade, Serbia',
    img: companyImg1
  }, {
    id: 2,
    type: 'Service Provider',
    city: 'New York, USA',
    img: companyImg2
  }, {
    id: 3,
    type: 'Supplier',
    city: 'London, England',
    img: companyImg3
  }
];

export const PEOPLE = [
  {
    id: 4,
    name: 'Dennis Adams',
    img: personImg1,
    business: 'Dentist (Practice Owner)',
    city: 'London, England'
  }, {
    id: 5,
    name: 'Mary Carpenter',
    img: personImg2,
    business: 'Dentist (Practice Owner)',
    city: 'Belgrade, Serbia'
  }, {
    id: 6,
    name: 'Danielle Salazar',
    img: personImg3,
    business: 'Dentist (Practice Owner)',
    city: 'Paris, France'
  }
];

export const TOKEN = '538cf4ce3c40449a25eb2832aef6a5c20f3e7962';