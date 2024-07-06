import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

// Sample data for food items
const foodItems = [
    { id: 1, name: "sweets", description: "মজাদার মিষ্টান্ন", price: "$5.99", calories: "350 kcal", ingredients: "Sugar,milk" },
    { id: 2, name: "Rezala", description: "হালাল মাংসের রেজালা", price: "$8.99", calories: "800 kcal", ingredients: "mutton,beef,spicy ingregiants" },
    { id: 3, name: "kacchi", description: "বিখ্যাত কাচ্চি", price: "$6.99", calories: "600 kcal", ingredients: "Basmati rice,mutton ,beef" },
    { id: 4, name: "kabab", description: "সুস্বাদু কাবাব", price: "$12.99", calories: "450 kcal", ingredients: "mutton Beef chicken, " },
    { id: 5, name: "Noodles", description: "একসাথে খান নুডুলস", price: "$4.99", calories: "200 kcal", ingredients: "Cocola ,maggi, chicken ,efggs" },
    { id: 6, name: "vagetable", description: "শরীরের জন্য উপকারী সবজি", price: "$3.99", calories: "300 kcal", ingredients: "all kinds of deshi vagtables" },
    { id: 7, name: "Fish", description: "আমিষের উৎস মাছ", price: "$2.99", calories: "250 kcal", ingredients: "all deshi fishes" },
    { id: 8, name: "snacks", description: "হালকা সন্ধ্যার নাস্তা", price: "$15.99", calories: "700 kcal", ingredients: " all kinds of snacks" }
];

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [showSearch, setShowSearch] = useState(false); // State to toggle search input visibility
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [filteredItems, setFilteredItems] = useState([]); // State for filtered food items

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredItems(foodItems.filter(item => item.name.toLowerCase().includes(query)).slice(0, 8));
    };

    return (
        <div className='navbar'>
            <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" className="search-icon" onClick={() => setShowSearch(!showSearch)} />
                {showSearch && (
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search for food..."
                            className="navbar-search-input"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        {filteredItems.length > 0 && (
                            <div className="search-results">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Calories</th>
                                            <th>Ingredients</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredItems.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td>{item.price}</td>
                                                <td>{item.calories}</td>
                                                <td>{item.ingredients}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
                    : <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>}
            </div>
        </div>
    );
}

export default Navbar;
