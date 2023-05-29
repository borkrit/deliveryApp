import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

import s from "./style.module.css";
import { Home } from '../Home/Home';
import { ShopCard } from '../ShopCard/ShopCard';
import History from '../History/History';

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
            <Link to="/history">History order</Link>

          </ul>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ShopCard />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </>
  );
};
