import React, { useState } from 'react';

const MultilevelDropdown = () => {
    const [menu, setMenu] = useState([
        {
            id: 1,
            title: 'Option 1',
            children: [
                {
                    id: 11,
                    title: 'Suboption 1.1',
                    parent: 1,
                    children: [
                        { id: 111, title: 'Sub-suboption 1.1.1', parent: 11 },
                        { id: 112, title: 'Sub-suboption 1.1.2', parent: 11 }
                    ]
                },
                {
                    id: 12,
                    title: 'Suboption 1.2',
                    parent: 1,
                    children: [
                        { id: 121, title: 'Sub-suboption 1.2.1', parent: 12 },
                        { id: 122, title: 'Sub-suboption 1.2.2', parent: 12 }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: 'Option 2',
            children: [
                {
                    id: 21,
                    title: 'Suboption 2.1',
                    parent: 2,
                    children: [
                        { id: 211, title: 'Sub-suboption 2.1.1', parent: 21 },
                        { id: 212, title: 'Sub-suboption 2.1.2', parent: 21 }
                    ]
                },
                {
                    id: 22,
                    title: 'Suboption 2.2',
                    parent: 2,
                    children: [
                        { id: 221, title: 'Sub-suboption 2.2.1', parent: 22 },
                        { id: 222, title: 'Sub-suboption 2.2.2', parent: 22 }
                    ]
                }
            ]
        }
    ]);

    const [selectedOption, setSelectedOption] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOptionClick = (option) => {
        console.log('Clicked option:', option);
        setSelectedOption(option);
        if (option.children) {
            setMenuOpen(true); // Keep the menu open when a parent option is clicked
        } else {
            setMenuOpen(false); // Close the menu when a leaf option is clicked
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <h2>Multilevel Dropdown</h2>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    onClick={toggleMenu}
                >
                    Select Option
                </button>
                {menuOpen && (
                    <div className="dropdown-menu">
                        {menu.map((option) => (
                            <div key={option.id} className="dropdown-item">
                                <button
                                    className="btn btn-info btn-block"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.title}
                                </button>
                                {console.log('Rendered option:', option)}
                                {selectedOption && selectedOption.id === option.id && option.children && (
                                    <div className="sub-menu">
                                        {option.children.map((child) => (
                                            <div key={child.id} className="dropdown-item">
                                                <button
                                                    className="btn btn-light btn-block sub-item"
                                                    onClick={() => handleOptionClick(child)}
                                                    onMouseDown={(e) => e.preventDefault()}
                                                >
                                                    {child.title}
                                                </button>
                                                {console.log('Rendered child:', child)}
                                                {selectedOption && selectedOption.id === child.parent && child.children && (
                                                    <div className="sub-menu">
                                                        {child.children.map((subChild) => (
                                                            <button
                                                                key={subChild.id}
                                                                className="btn btn-light btn-block sub-item"
                                                                onClick={() => handleOptionClick(subChild)}
                                                                onMouseDown={(e) => e.preventDefault()}
                                                            >
                                                                {subChild.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultilevelDropdown;
