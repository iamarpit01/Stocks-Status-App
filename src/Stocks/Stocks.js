import React, { PureComponent } from 'react'
import Axios from 'axios';

import './Stocks.css';

class Stocks extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            stockDate: "",
            results: [],   
            noResults: true         
        }
    }

    // FETCHING DATA
    getStockInfo = (event) => {
        event.preventDefault();
        console.log("calling")
        Axios.get(`https://jsonmock.hackerrank.com/api/stocks?date=${this.state.stockDate}`)
            .then(response => {
                this.setState({results: response.data.data})                
                this.state.results.length > 0 ? this.setState({...this.state, noResults: false}) : this.setState({...this.state, noResults: true});
            })
            .catch(error => console.log(error.message));
    }

    render() {
        return (
            <React.Fragment>
                <div className="c-form">
                    <div className="container">
                        <div className="c-form-control">
                            <form onSubmit={this.getStockInfo}>
                                <input 
                                    className="c-input" 
                                    data-testid="app-input" 
                                    type="text" 
                                    value={this.state.stockDate} 
                                    onChange={(e) => this.setState({stockDate: e.target.value})}
                                    placeholder="Enter Date Format - 5-January-2000" />
                                <button className="c-button" data-testid="submit-button" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <ul className="stock-list" data-testid="stock-data">
                        { this.state.results.map(stock => (
                            <React.Fragment key={stock.open}>
                                <li><span className="stock-list-label">Open:</span><span className="stock-list-number"> {stock.open}</span></li>
                                <li><span className="stock-list-label">Close:</span><span className="stock-list-number"> {stock.close}</span></li>
                                <li><span className="stock-list-label">High:</span><span className="stock-list-number"> {stock.high}</span></li>
                                <li><span className="stock-list-label">Low:</span><span className="stock-list-number"> {stock.low}</span></li>
                            </React.Fragment>
                        ))}
                    </ul>
                    { this.state.noResults && <div className="stock-no-result" data-testid="no-result">No Results</div>}
                </div>
            </React.Fragment>
        )
    }
}

export default Stocks;

