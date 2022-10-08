import BuzoBlanco from '../assets/BuzoBlanco.jpeg'
import JeanParis from '../assets/JeanParis.jpeg'
import RemeraNegra from '../assets/RemeraNegra.jpeg'

export const products = [
    {
        id: 1,
        title: 'Remera negra',
        price: 200,
        stock: 10,
        category: 'remeras',
        img: RemeraNegra,
        //img: 'img/remera.png',
    },
    {
        id: 2,
        title: 'Buzo Blanco',
        price: 300,
        stock: 5,
        category: 'buzos',
        img: BuzoBlanco,
    },
    {
        id: 3,
        title: 'Jean Paris',
        price: 20,
        stock: 3,
        category: 'jeans',
        img: JeanParis,
    },
];