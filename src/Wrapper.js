import React, { Component } from 'react';

 class Wrapper extends Component (){
    constructor(){
        super();

        this.componentRef = React.createRef();
    }


    render() {
        return (
            <div>
                    <ce-table name = "asdsdsad" ref = {this.componentRef} />

            </div>
        )
    }
}
export default Wrapper;