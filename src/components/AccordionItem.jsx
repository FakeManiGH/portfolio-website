import { useState } from 'react';
import PropTypes from 'prop-types';
import './AccordionItem.css';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleOpen}>
                <h4>{title}</h4>
                <h4>{isOpen ? '-' : '+'}</h4>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    {children}
                </div>
            )}
        </div>
    );
}

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default AccordionItem;