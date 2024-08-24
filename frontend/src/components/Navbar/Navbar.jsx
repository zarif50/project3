/*import React, { useContext, useState } from 'react';
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
                <li>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                </li>
                <li>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                </li>
                <li>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                </li>
                <li>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
                </li>
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
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>sign in</button>
                ) : (
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;

  */ 
 
/*
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

// Sample data for food items
const initialFoodItems = [
    { id: 1, name: "Sweets", description: "মজাদার মিষ্টান্ন", price: "$5.99", calories: "350 kcal", ingredients: "Sugar, milk" },
    { id: 2, name: "Rezala", description: "হালাল মাংসের রেজালা", price: "$8.99", calories: "800 kcal", ingredients: "Mutton, beef, spicy ingredients" },
    { id: 3, name: "Kacchi", description: "বিখ্যাত কাচ্চি", price: "$6.99", calories: "600 kcal", ingredients: "Basmati rice, mutton, beef" },
    { id: 4, name: "Kabab", description: "সুস্বাদু কাবাব", price: "$12.99", calories: "450 kcal", ingredients: "Mutton, beef, chicken" },
    { id: 5, name: "Noodles", description: "একসাথে খান নুডুলস", price: "$4.99", calories: "200 kcal", ingredients: "Cocola, maggi, chicken, eggs" },
    { id: 6, name: "Vegetable", description: "শরীরের জন্য উপকারী সবজি", price: "$3.99", calories: "300 kcal", ingredients: "All kinds of desi vegetables" },
    { id: 7, name: "Fish", description: "আমিষের উৎস মাছ", price: "$2.99", calories: "250 kcal", ingredients: "All desi fishes" },
    { id: 8, name: "Snacks", description: "হালকা সন্ধ্যার নাস্তা", price: "$15.99", calories: "700 kcal", ingredients: "All kinds of snacks" }
];

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [editItem, setEditItem] = useState(null); // State to hold the item being edited

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    // Use initialFoodItems as a base, and allow edit in this array
    const [foodItems, setFoodItems] = useState(initialFoodItems);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredItems(foodItems.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.price.toLowerCase().includes(query) ||
            item.calories.toLowerCase().includes(query)
        ).slice(0, 8));
    };

    const handleEdit = (item) => {
        setEditItem(item);
    };

    const handleSaveEdit = (editedItem) => {
        // Update the foodItems array with the edited item
        const updatedItems = foodItems.map(item => {
            if (item.id === editedItem.id) {
                return editedItem;
            }
            return item;
        });
        setFoodItems(updatedItems);
        setEditItem(null); // Clear the edit item state
    };

    const handleCancelEdit = () => {
        setEditItem(null); // Clear the edit item state on cancel
    };

    const handleDelete = (itemId) => {
        // Filter out the deleted item
        const updatedItems = foodItems.filter(item => item.id !== itemId);
        setFoodItems(updatedItems);
        // Also update filteredItems if needed
        setFilteredItems(filteredItems.filter(item => item.id !== itemId));
    };

    return (
        <div className='navbar'>
            <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <li>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                </li>
                <li>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                </li>
                <li>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                </li>
                <li>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
                </li>
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
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredItems.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id === editItem?.id ?
                                                    <input
                                                        type="text"
                                                        value={editItem.name}
                                                        onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                                                    /> :
                                                    item.name}
                                                </td>
                                                <td>{item.id === editItem?.id ?
                                                    <input
                                                        type="text"
                                                        value={editItem.description}
                                                        onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                                                    /> :
                                                    item.description}
                                                </td>
                                                <td>{item.id === editItem?.id ?
                                                    <input
                                                        type="text"
                                                        value={editItem.price}
                                                        onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
                                                    /> :
                                                    item.price}
                                                </td>
                                                <td>{item.id === editItem?.id ?
                                                    <input
                                                        type="text"
                                                        value={editItem.calories}
                                                        onChange={(e) => setEditItem({ ...editItem, calories: e.target.value })}
                                                    /> :
                                                    item.calories}
                                                </td>
                                                <td>{item.id === editItem?.id ?
                                                    <input
                                                        type="text"
                                                        value={editItem.ingredients}
                                                        onChange={(e) => setEditItem({ ...editItem, ingredients: e.target.value })}
                                                    /> :
                                                    item.ingredients}
                                                </td>
                                                <td>
                                                    {item.id === editItem?.id ?
                                                        <React.Fragment>
                                                            <button onClick={() => handleSaveEdit(editItem)}>Save</button>
                                                            <button onClick={handleCancelEdit}>Cancel</button>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <button onClick={() => handleEdit(item)}>Edit</button>
                                                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                                                        </React.Fragment>
                                                    }
                                                </td>
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
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
*/



import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const {getTotalCartAmount} = useContext(StoreContext);
    const { token, setToken } = useContext(StoreContext);
    const { email,setEmail} = useContext(StoreContext);
    const navigate = useNavigate();
    const [showAdmin,SetShowAdmin]=useState(false)
   
      console.log("here is ",email)
    const logout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            setToken("");
            setEmail('');
            navigate("/");
        }
    }
    const url="http://localhost:4000/api/user/login"
    const handleMenuClick = (menuName) => {
        setMenu(menuName);
    }

    const handleSearchClick = () => {
        navigate('/search');
    }
    const handleLogoClick = () => {
      navigate("/");
  }
  const fetchUser =async()=>{
    try {
        // Make the API call
        console.log("Fetching email:",email)
        
         if(email.trim()==="hriditaalam1@gmail.com"){
                SetShowAdmin(true);

         }else {
          // Show an error message if the API response is not successful
          console.log("Api is not working")
          SetShowAdmin(false);
         // toast.error("Failed to fetch response");
        }
      } catch (error) {
        // Handle any unexpected errors
        console.error("Error fetching :", error);
        //toast.error("An error occurred while fetching orders");
      }
  }
  useEffect(()=>{
    fetchUser();

  },[])
  
    return (
        <div className='navbar'>
            <div className='image-holder'>
               
                <Link to = '/'><img src={assets.logo} onClick={handleLogoClick} alt='' className='logo' /></Link>
            </div>
            <ul className='navbar-menu'>
                <li>
                    <Link to='/' onClick={() => handleMenuClick("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                </li>
                <a href= '#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
                <a href= '#app-download' onClick={()=>setMenu("Mobile-App")} className={menu ==="Mobile-App"?"active":""}>Mobile-app</a>
                <a href= '#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact-us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt='' onClick={handleSearchClick} />
                
                <div className="navbar-search-icon">
                   <Link to ='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()==0?"":"dot"}></div>
                </div>
                {!token ?
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                    :
                    <div className='navbar-profile' onClick={fetchUser}>
                        <img src={assets.profile_icon} alt="Profile" />
                        <ul className='nav-profile-dropdown'>
                            <li onClick={()=>navigate('/myorders')} >
                                <img src={assets.bag_icon} alt="" /><p>Order</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="" /><p>Log Out</p>
                                {console.log('Here is token: ',token)}
                            </li>
                            <hr />
                            {showAdmin ?(
    <>
        <li onClick={() => navigate('/admin')}>
            
            <p>Admin Panel</p>
        </li>
        
    </>
) : (
    <hr />
)}
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
}

export default Navbar;
