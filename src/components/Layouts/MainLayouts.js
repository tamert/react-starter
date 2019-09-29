import React from 'react';
import PropTypes from 'prop-types';

const MainLayouts = ({children}) => {

    return (
        <div className="App">
            <header className="App-header">
                {children}
            </header>
        </div>
    );
};

MainLayouts.propTypes = {
    children: PropTypes.node.isRequired
};

export default MainLayouts;

