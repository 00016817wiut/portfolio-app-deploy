import Header from "./components/Header/Header";
import './assets/styles/common.css';
import './assets/styles/adaptive.css';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const App = () => {

  const [repos, setRepos] = useState([]);

  const user = "00016817wiut";
  const URL = `https://api.github.com/users/${user}/repos`;

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setRepos(response.data);
      console.log('Репозитроии:', response.data);
    } )
    .catch((error) => {console.error("Ошибка: " + error)} )  
  }, []);



  return (
    <>
     <Header/>
     <Main repos={repos}/>
     <Footer/>
    </>
  )
}

export default App
