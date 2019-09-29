import React, { Component } from 'react';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                Sayfa Component
            </p>
        );
    }
}

/**
 function mapStateToProps(state) {
    const { tab } = state.tab;
    return {
        tab
    };
}
 */

export default Page;
