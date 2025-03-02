import React, { useState } from 'react';

const MultilevelDropdown = () => {
    const [openSubmenus, setOpenSubmenus] = useState({});

    // Example menu object with multiple levels
    const menu = [
        {
            name: "HTML",
            url: "#",
        },
        {
            name: "CSS",
            url: "#",
        },
        {
            name: "New dropdown",
            url: "#",
            submenu: [
                {
                    name: "2nd level dropdown",
                    url: "#",
                },
                {
                    name: "2nd level dropdown",
                    url: "#",
                    submenu: [
                        {
                            name: "3rd level dropdown",
                            url: "#",
                        },
                        {
                            name: "3rd level dropdown",
                            url: "#",
                            submenu: [
                                {
                                    name: "4th level dropdown",
                                    url: "#",
                                },
                                {
                                    name: "4th level dropdown",
                                    url: "#",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Another dropdown",
                    url: "#",
                    submenu: [
                        {
                            name: "3rd level dropdown",
                            url: "#",
                        },
                        {
                            name: "3rd level dropdown",
                            url: "#",
                            submenu: [
                                {
                                    name: "4th level dropdown",
                                    url: "#",
                                },
                                {
                                    name: "4th level dropdown",
                                    url: "#",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    // Function to toggle the visibility of a submenu based on its index
    const toggleSubmenu = (index) => {
        setOpenSubmenus((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Recursive function to render each level of the menu
    const renderMenu = (items, parentIndex = null) => (
        <ul className="dropdown-menu bg-white shadow-lg rounded-md">
            {items.map((item, index) => {
                const currentIndex = parentIndex !== null ? `${parentIndex}-${index}` : `${index}`;
                return (
                    <li key={currentIndex} className={`relative ${item.submenu ? 'dropdown-submenu' : ''}`}>
                        <a
                            href={item.url}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
                            onClick={(e) => {
                                if (item.submenu) {
                                    e.preventDefault();
                                    toggleSubmenu(currentIndex);
                                }
                            }}
                        >
                            {item.name} {item.submenu && <span className="caret">▼</span>}
                        </a>
                        {item.submenu && openSubmenus[currentIndex] && (
                            <div className="absolute left-full top-0 mt-1 w-48">
                                {renderMenu(item.submenu, currentIndex)}
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <div className="relative inline-block text-left">
            <h2 className="text-2xl font-semibold mb-4">Multilevel Dropdown</h2>
            <div className="dropdown">
                <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800 focus:outline-none">
                    Tutorials
                    <span className="caret">▼</span>
                </button>
                {renderMenu(menu)}
            </div>
        </div>
    );
};

export default MultilevelDropdown;
