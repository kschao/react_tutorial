import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: "Twilight", author: "Stephanie Meyer"},
            {title: 'New Moon', author: 'Stephanie Meyer'},
            {title: 'Eclipse', author: 'Stephanie Meyer'}
        ];
        this.state = {
            bookNumber: 1
        };
    }

    render(){
        return(
            <div class= "container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/*button will be moved to the prev book viewed*/}
                    </div>
                <div className="col-md-4">
                    {/*display book with cover here*/}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                <div className="col-md-4">
                    {/*button here move to next book*/}
                    </div>
                </div>                
            </div>
        )
    }
}
export default App;
