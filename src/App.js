import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

import NavbarR from "./componentes/NavbarR";
import CardsPortada from "./componentes/CardsPortada";
import CardsBody from "./componentes/CardsBody";
import CardsNews from "./componentes/CardsNews";
import Login from "./componentes/Login";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from 'react';
import Footer from "./componentes/Footer";

export default function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');

  useEffect(() => {
    getNews();
  }, [category, country]);

  const getNews = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=6&apiKey=3cf138ac86bc41c6920b7bef02d87e0d`
    );
    setNews(response.data.articles);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  const handleChange1 = (event) => {
    const { value } = event.target;
    setCountry(value);
  };

  return (
    <Router>
      <NavbarR/>
      <Switch>
        <Route path="/" exact>
          <CardsPortada news={news} />
          <CardsBody news={news}/>
        </Route>
        </Switch>
        <Switch>
        <Route path="/news" >
          <CardsNews news={news} handleChange={handleChange} handleChange1={handleChange1}/>
        </Route>
        <Route path="/login" >
          <Login/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
