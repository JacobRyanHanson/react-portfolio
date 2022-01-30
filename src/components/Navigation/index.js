import React, { useState } from 'react';

function Naviation() {
    const [categories] = useState([
        { name: 'About Me', description: '' },
        { name: 'Portfolio', description: '' },
        { name: 'Contact', description: '' },
        { name: 'Resume', description: '' },
      ]);

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