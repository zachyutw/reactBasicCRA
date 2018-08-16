import firebase from 'firebase';
import keys from 'config/keys';
const {firebaseConfig  } =keys;


const firebaseApp = firebase.initializeApp({ ...firebaseConfig });

 export default firebaseApp

 export const freeFirebase = ()=>firebaseApp.delete()
 .then(function() {
   console.log("App deleted successfully");
 })
 .catch(function(error) {
   console.log("Error deleting app:", error);
 });
