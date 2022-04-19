import React, { useState } from 'react';

function Naviation({ props }) {
    const {
        categories,
        setCurrentCategory,
        currentCategory
    } = props;
    
    return (
        <nav>
            <ul className="nav-link-container flexbox">
                {categories.map((category) => (
                    <li key={category.name}
                        id= {category.name}
                        className={`list-item ${currentCategory.name === category.name && 'navActive'}`}
                        onClick={() => {setCurrentCategory(category);}}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Naviation;