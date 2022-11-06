import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direc, setDirec] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailRepetido, setEmailRepetido] = useState('');
    const [loader, setLoader] = useState(false);

    const [ordenId, setOrdenId] = useState('');

    const { cart, precioTotal, deleteAll } = useContext(CartContext);

    

    const handleSubmit = (e) => {
        setLoader(true);
        e.preventDefault();
        const orden = {
            buyer: { nombre, apellido, direc, telefono, email },
            items: cart,
            total: precioTotal(),
            date: serverTimestamp(),
        };

        const coleccionOrdenes = collection(db, 'ordenes');

        if (email === emailRepetido) {
            addDoc(coleccionOrdenes, orden)
            .then((res) => {
                setOrdenId(res.id);
                deleteAll();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoader(false));
        }else{
            alert('E-mail incorrecto, vuelva a ingresarlo correctamente')
            setLoader(false);
        }
        
    };

    const handleChangeNombre = (e) => {
        setNombre(e.target.value);
    };
    const handleChangeApellido = (e) => {
        setApellido(e.target.value);
    };
    const handleChangeDirec = (e) => {
        setDirec(e.target.value);
    };
    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeEmailRepetido = (e) => {
        setEmailRepetido(e.target.value); 
    };

    if (ordenId) {
        return (
            <h1>
                Gracias por tu compra, tu número de seguimiento es {ordenId}
            </h1>
        );
    }

   
    return (
        <div
            style={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form onSubmit={handleSubmit} action="" class="formContacto">
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Ingrese su nombre..."
                        onChange={handleChangeNombre}
                        value={nombre}
                        required
                    />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="apellido"
                        placeholder=" Ingrese su apellido..."
                        onChange={handleChangeApellido}
                        value={apellido}
                        required
                    />
                </div>
                <div>
                    <label>Direccion:</label>
                    <input
                        type="text"
                        name="direccion"
                        placeholder="Ingrese su direccion..."
                        onChange={handleChangeDirec}
                        value={direc}
                        required
                    />
                </div>
                <div>
                    <label>Telefono:</label>
                    <input
                        type="number"
                        name="telefono"
                        placeholder=" Ingrese su telefono de contacto..."
                        onChange={handleChangeTelefono}
                        value={telefono}
                        required
                    />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="e-mail"
                        placeholder="Ingrese su e-mail..."
                        onChange={handleChangeEmail}
                        value={email}
                        required
                    />
                </div>
                <div>
                    <label>Repita nuevamente su e-mail:</label>
                    <input
                        type="email"
                        name="e-mailRepetido"
                        placeholder="Repita su e-mail..."
                        onChange={handleChangeEmailRepetido}
                        value={emailRepetido}
                        required
                    />
                </div>
                <button className='btn-env'>{loader ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
};

export default Form;