import ReactDOM from 'react-dom/client'
import axios from 'axios';
import App from './App'
import './index.css'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

promise.then(response => {
  console.log(response);
  const notes = response.data;
  console.log("notes", notes);

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

