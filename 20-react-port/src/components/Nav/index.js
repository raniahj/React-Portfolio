import React from 'react';

function Nav() {
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li className="mx-2">
                    <a href="https://www.linkedin.com/in/raniah-jeanlys/">
                        Linkedin
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;