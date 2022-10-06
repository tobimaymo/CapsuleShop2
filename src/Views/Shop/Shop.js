import React, { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './Shop.css';
import TextField from '@mui/material/TextField';
import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
import Swal from 'sweetalert2';
import { CartContext } from '../../Context/CartContext';

const initialState = {
	name: '',
	phone: '',
	email: '',
};

const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
		marginTop: 120,
		marginBottom: 300,
	},
};


const Shop = () => {
	const [values, setValues] = useState(initialState);
	const [purchaseID, setPurchaseID] = useState('');
	const {items } = useContext(CartContext)

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values, items, purchaseID);
		const docRef = await addDoc(collection(db, 'compras'), {
			values, items, purchaseID
		});
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (
		<>
		<div style={styles.containerShop}>
			<h1>Completa tus Datos para finalizar la compra!</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Phone'
					style={{ margin: 10, width: 400 }}
					name='phone'
					value={values.lastName}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Email'
					style={{ margin: 10, width: 400 }}
					name='email'
					value={values.city}
					onChange={handleOnChange}
				/>
				<button className='button-75'>Enviar</button>
				{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
			</form>
		</div>
		</>
	);
};

export default Shop;
