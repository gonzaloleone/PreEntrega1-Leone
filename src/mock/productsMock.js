import BuzoBlanco from '../assets/BuzoBlanco.jpeg'
import JeanParis from '../assets/JeanParis.jpeg'
import RemeraNegra from '../assets/RemeraNegra.jpeg'

export const products = [
    {
        id: 1,
        title: 'Remera negra',
        price: 3000,
        stock: 25,
        category: 'remeras',
        img: RemeraNegra,
        //img: 'img/remera.png',
    },
    {
        id: 2,
        title: 'Buzo Blanco',
        price: 8000,
        stock: 15,
        category: 'buzos',
        img: BuzoBlanco,
    },
    {
        id: 3,
        title: 'Jean Paris',
        price: 7000,
        stock: 20,
        category: 'jeans',
        img: JeanParis,
    },
];