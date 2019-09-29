import React, { Component } from 'react';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <p> Page Component</p>
                </div>
            </div>
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
