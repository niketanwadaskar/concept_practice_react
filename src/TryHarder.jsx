import React from 'react'
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

export default function TryHarder() {
    const renderMenu = (items, parentIndex = null) => {
        return <ul>
            {items.map((elem, index) => {
                return <li key={index}>
                    <a href={elem.url} onClick={(e) => {
                        if (items.submenu) {
                            e.preventDefault();

                        }
                    }}>{elem.name}</a>
                    {elem.submenu && renderMenu(elem.submenu)}
                </li>

            })}
        </ul>
    }

    return (
        <div>
            <button >
                Open Menu
            </button>
            {renderMenu(menu)}
        </div>
    )
}
