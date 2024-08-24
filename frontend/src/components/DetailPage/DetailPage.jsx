import React from 'react'
import './DetailPage.css'
const DetailPage = () => {
    const shops = [
        { name: "Star Kebab Mirpur-1", address: "Opposite side of Mirpur-1 Bus Stand", phone: "01816721401" },
        { name: "Star Kebab Mirpur-10", address: "456 Oak Avenue, Springfield", phone: "01825464800" },
        { name: "Star Kebab Mirpur-11", address: "789 Pine Road, Springfield", phone: "01626155240" },
        { name: "Star Kebab Mirpur-12", address: "101 Maple Street, Springfield", phone: "01825593674" },
        { name: "Star Kebab Mirpur-13", address: "202 Birch Lane, Springfield", phone: "01642323585" },
        { name: "Star Kebab Mirpur-14", address: "303 Cedar Drive, Springfield", phone: "01642323584" },
        { name: "Star Kebab Mirpur-6", address: "404 Walnut Boulevard, Springfield", phone: "01642323587" },
        { name: "Star Kebab Mohammadpur", address: "505 Cherry Street, Springfield", phone: "01642323586" },
        { name: "Star Kebab Dhanmondi-27", address: "606 Pinecrest Road, Springfield", phone: "01642323589" },
        { name: "Star Kebab Shankar Plaza", address: "707 Ash Lane, Springfield", phone: "01642323588" },
        { name: "Star Kebab Farmgate", address: "808 Fir Avenue, Springfield", phone: "01642323581" },
        { name: "Star Kebab Banani", address: "909 Spruce Street, Springfield", phone: "01642323582" },
        { name: "Star Kebab Gulshan", address: "1010 Redwood Drive, Springfield", phone: "01642323583" },
        { name: "Star Kebab Gabtoli", address: "1111 Juniper Road, Springfield", phone: "01642323580" },
        { name: "Shop 15", address: "1212 Dogwood Lane, Springfield", phone: "+1 (555) 111-0015" },
        { name: "Shop 16", address: "1313 Aspen Boulevard, Springfield", phone: "+1 (555) 111-0016" },
        { name: "Shop 17", address: "1414 Willow Street, Springfield", phone: "+1 (555) 111-0017" },
        { name: "Shop 18", address: "1515 Linden Road, Springfield", phone: "+1 (555) 111-0018" },
        { name: "Shop 19", address: "1616 Hemlock Avenue, Springfield", phone: "+1 (555) 111-0019" },
        { name: "Shop 20", address: "1717 Sycamore Drive, Springfield", phone: "+1 (555) 111-0020" },
    ];
    
    return (
        <div className="shop-details-page">
            <h1>Our Shops</h1>
            <div className="shop-list">
                {shops.map((shop, index) => (
                    <div key={index} className="shop-card">
                        <h2 className="shop-name">{shop.name}</h2>
                        <p className="shop-address">{shop.address}</p>
                        <p className="shop-phone">Phone: <a href={`tel:${shop.phone}`}>{shop.phone}</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailPage