import React, { useState, useEffect } from 'react';

export default function Menu() {

    const [menuItems, setMenuItems] = useState([]);
    
    useEffect(() => {
        getMenuItems()
    }, []);

    async function getMenuItems() {
        try {
            const { data, error } = await supabase // Destructure the Supabase call
                .from("menu_items") // From the "Groceries" table
                .select("*"); // Select (fetch) everything
            if (error) throw error; // If there is an error, throw it
            if (data != null) { // If there is data fetched
                setMenuItems(data); // Set our groceries state variable to the data
            }
        } catch (error) {
            alert(error.message); // If an error is caught, alert it on the client
        }
    }

    return (
        <div>
            <ul>
                {menu_items && menu_items.map((item) => (
                    <li key={item.id}>
                        {item.item_name} - ${item.calories}{" "}
                    </li>
                ))}
            </ul>
	    </div>
    );
}