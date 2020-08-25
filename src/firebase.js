import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCKTI5X83gtK_Wnl9nhEhanFgt-zl7xrg8',
	authDomain: 'shop-react-56cd5.firebaseapp.com',
	databaseURL: 'https://shop-react-56cd5.firebaseio.com',
	projectId: 'shop-react-56cd5',
	storageBucket: 'shop-react-56cd5.appspot.com',
	messagingSenderId: '912344901863',
	appId: '1:912344901863:web:350db41895c351f36b1a42',
	measurementId: 'G-9YG41VN8FT'
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
