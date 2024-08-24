import React, { useState } from 'react';
import './search.css';

const initialFoodItems = [
    { id: 1, name: "Jafran Roshogulla", description: "মজাদার মিষ্টান্ন", price: "$14", calories: "350 kcal", ingredients: "Sugar, milk,Jafran,milk cream" },
    { id: 2, name: "Borfi", description: "মজাদার মিষ্টান্ন", price: "$22", calories: "300 kcal", ingredients: "Sugar, milk,Badam,milk cream" },
    { id: 3, name: "Jilapi", description: "মজাদার মিষ্টান্ন", price: "$10", calories: "220 kcal", ingredients: "Sugar,oil, beshon,jafran" },
    { id: 4, name: "Lal Mohon", description: "মজাদার মিষ্টান্ন", price: "$12", calories: "310 kcal", ingredients: "Sugar, milk,milk cream" },
    { id: 5, name: "Khasi Rezala", description: "হালাল মাংসের রেজালা", price: "$14", calories: "800 kcal", ingredients: "Mutton,spicy ingredients" },
    { id: 6, name: "Gorur Rezala", description: "হালাল মাংসের রেজালা", price: "$12", calories: "810 kcal", ingredients: "Beef,spicy ingredients" },
    { id: 7, name: "Murgi Rezala", description: "হালাল মাংসের রেজালা", price: "$20", calories: "500 kcal", ingredients: "Chicken,spicy ingredients" }, 
    { id: 8, name: "Vera Rezala", description: "হালাল মাংসের রেজালা", price: "$15", calories: "600 kcal", ingredients: "Verar mangsho,spicy ingredients"},  
    { id: 9, name: "Khasir Kacchi", description: "বিখ্যাত কাচ্চি", price: "$12", calories: "600 kcal", ingredients: "Basmati rice, mutton" },
    { id: 10, name: "Gorur Kacchi", description: "বিখ্যাত কাচ্চি", price: "$18", calories: "610 kcal", ingredients: "Basmati rice,beef" },
    { id: 11, name: "Murgir Kacchi", description: "বিখ্যাত কাচ্চি", price: "$16", calories: "500 kcal", ingredients: "Basmati rice,chicken" },
    { id: 12, name: "Ilish Kacchi", description: "বিখ্যাত কাচ্চি", price: "$24", calories: "400 kcal", ingredients: "Basmati rice,Ilish" },
    { id: 13, name: "Murgi Kabab", description: "সুস্বাদু কাবাব", price: "$14", calories: "450 kcal", ingredients: "Spicy ingredients,chicken" },
    { id: 14, name: "Goru Kabab", description: "সুস্বাদু কাবাব", price: "$12", calories: "500 kcal", ingredients: "Spicy ingredients,beef" },
    { id: 15, name: "Chicken Hariali Kabab", description: "সুস্বাদু কাবাব", price: "$20", calories: "410 kcal", ingredients: "Spicy ingredients,chicken"},
    { id: 16, name: "Chicken Shik Kabab", description: "সুস্বাদু কাবাব", price: "$15", calories: "420 kcal", ingredients: "Spicy ingredients,chicken" },
    { id: 17, name: "Sobji Noodles", description: "একসাথে খান নুডুলস", price: "$12", calories: "200 kcal", ingredients: "Cocola, maggi,vegetables"},
    { id: 18, name: "Ponir Noodles", description: "একসাথে খান নুডুলস", price: "$18", calories: "210 kcal", ingredients: "Cocola, maggi,cheese"},
    { id: 19, name: "Non veg Moshla Noodles", description: "একসাথে খান নুডুলস", price: "$16", calories: "250 kcal", ingredients: "Cocola, maggi, mixed non-veg items"},
    { id: 20, name: "Murgi Noodles", description: "একসাথে খান নুডুলস", price: "$24", calories: "270 kcal", ingredients: "Cocola, maggi,chicken"},
    { id: 21, name: "Misro Sobji", description: "শরীরের জন্য উপকারী সবজি", price: "$14", calories: "350 kcal", ingredients: "All kinds of desi vegetables" },
    { id: 22, name: "Sobji Cutlet", description: "শরীরের জন্য উপকারী সবজি", price: "$22", calories: "330 kcal", ingredients: "All kinds of desi vegetables" },
    { id: 23, name: "Fulkopi Torkari", description: "শরীরের জন্য উপকারী সবজি", price: "$10", calories: "320 kcal", ingredients: "Cauliflower, spicy ingredients" },
    { id: 24, name: "Sobji Thala", description: "শরীরের জন্য উপকারী সবজি", price: "$12", calories: "310 kcal", ingredients: "All kinds of desi vegetables" },
    { id: 25 , name: "Sorisha Ilish", description: "আমিষের উৎস মাছ", price: "$14", calories: "250 kcal", ingredients: "Ilish fish, mustard, some other spicy ingredients"},
    { id: 26 , name: "Katla", description: "আমিষের উৎস মাছ", price: "$12", calories: "210 kcal", ingredients: "Katla fish, some other spicy ingredients"},
    { id: 27 , name: "Chingri Mas", description: "আমিষের উৎস মাছ", price: "$20", calories: "250 kcal", ingredients: "Shrimp, some other spicy ingredients"},
    { id: 28 , name: "Rui Mas", description: "আমিষের উৎস মাছ", price: "$2.99", calories: "250 kcal", ingredients: "Rohu fish, some other spicy ingredients"},
    { id: 29, name: "Fuchka", description: "হালকা সন্ধ্যার নাস্তা", price: "$12", calories: "200 kcal", ingredients: "Fuchka items" },
    { id: 30, name: "Doi Fuchka", description: "হালকা সন্ধ্যার নাস্তা", price: "$18", calories: "300 kcal", ingredients: "Sour Curd,Fuchka items" },
    { id: 31, name: "Chicken Porota", description: "হালকা সন্ধ্যার নাস্তা", price: "$16", calories: "400 kcal", ingredients: "Chicken, paratha items" },
    { id: 32, name: "Pau Vaji", description: "হালকা সন্ধ্যার নাস্তা", price: "$24", calories: "399 kcal", ingredients: "Pau vaji items" },
];

const SearchPage = () => {
    const [foodItems, setFoodItems] = useState(initialFoodItems);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [editItemId, setEditItemId] = useState(null);
    const [editItemData, setEditItemData] = useState({ name: "", description: "", price: "", calories: "", ingredients: "" });

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const results = foodItems.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.price.toLowerCase().includes(query) ||
            item.calories.toLowerCase().includes(query)
        );
        setFilteredItems(results);
    };

    const handleDelete = (id) => {
        const updatedItems = foodItems.filter(item => item.id !== id);
        setFoodItems(updatedItems);
        setFilteredItems(updatedItems.filter(item =>
            item.name.toLowerCase().includes(searchQuery) ||
            item.price.toLowerCase().includes(searchQuery) ||
            item.calories.toLowerCase().includes(searchQuery)
        ));
    };

    const handleEditChange = (e) => {
        setEditItemData({
            ...editItemData,
            [e.target.name]: e.target.value
        });
    };

    const handleEdit = (item) => {
        setEditItemId(item.id);
        setEditItemData(item);
    };

    const handleSave = () => {
        const updatedItems = foodItems.map(item =>
            item.id === editItemId ? { ...item, ...editItemData } : item
        );
        setFoodItems(updatedItems);
        setFilteredItems(updatedItems.filter(item =>
            item.name.toLowerCase().includes(searchQuery) ||
            item.price.toLowerCase().includes(searchQuery) ||
            item.calories.toLowerCase().includes(searchQuery)
        ));
        setEditItemId(null);
    };

    return (
        <div className='search-page'>
            <h1>Search for Food</h1>
            <input
                type="text"
                placeholder="Search for food..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearch}
            />
            {filteredItems.length > 0 ? (
                <div className="search-results">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Calories</th>
                                <th>Ingredients</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map(item => (
                                <tr key={item.id}>
                                    {editItemId === item.id ? (
                                        <>
                                            <td><input type="text" name="name" value={editItemData.name} onChange={handleEditChange} /></td>
                                            <td><input type="text" name="description" value={editItemData.description} onChange={handleEditChange} /></td>
                                            <td><input type="text" name="price" value={editItemData.price} onChange={handleEditChange} /></td>
                                            <td><input type="text" name="calories" value={editItemData.calories} onChange={handleEditChange} /></td>
                                            <td><input type="text" name="ingredients" value={editItemData.ingredients} onChange={handleEditChange} /></td>
                                            <td>
                                                <button onClick={handleSave}>Save</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td>{item.calories}</td>
                                            <td>{item.ingredients}</td>
                                            <td>
                                                <button onClick={() => handleEdit(item)}>Edit</button>
                                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                searchQuery && <p>No results found</p>
            )}
        </div>
    );
};

export default SearchPage;
