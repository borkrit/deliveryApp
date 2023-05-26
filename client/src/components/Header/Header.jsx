import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

import s from "./style.module.css";
import { Home } from '../Home/Home';
import { ShopCard } from '../ShopCard/ShopCard';

export const Header = () => {
  return (
    <>
      <Router>
        <header className={s.header}>
          <a href="/" className="logo">
            Delivery app
          </a>
          <ul>
            <Link to="/">Shop</Link>
            <Link to="/card">Shopping card</Link>

          </ul>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ShopCard />} />
        </Routes>
      </Router>
    </>
  );
};
