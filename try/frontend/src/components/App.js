import React , {Component ,Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header';
import Dashboard from './leads/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';

class Hello extends Component {
    render() {
    return (
        <Provider store = {store}>
            <Fragment>
             <Header />
            <div className = "container">
                <Dashboard />
            </div>
            </Fragment>
        </Provider>
    );
  }
}

ReactDOM.render(<Hello/>, document.getElementById('root'));