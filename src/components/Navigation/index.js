import React, { useState } from 'react';

function Naviation({props}) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <nav>
            <ul className="flexbox">
                {categories.map((category) => (
                    <li key={category.name} className="list-item">
                        {category.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Naviation;