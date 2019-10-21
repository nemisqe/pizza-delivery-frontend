import React, { Component } from 'react';
import compose from "../../utils";
import withPizzaDeliveryService from "../hoc/with-pizza-delivery-service";
import { fetchUserOrderHistory } from "../../actions/user-actions";
import { connect } from 'react-redux';
import HistoryPageListItem from '../history-list/history-page-list-item';
import Spinner from "../spinner";
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";

class HistoryList extends Component {

    componentDidMount() {
        const { fetchUserOrderHistory, clientName } = this.props;
        console.log(this.props);
        fetchUserOrderHistory(clientName);
    }

    render() {
        const { currentUserOrderHistory, loading } = this.props;
        console.log(this.props);

        if (loading) {
            return <Spinner/>
        }

        return(
            <ul className="list-group">
                {
                    currentUserOrderHistory.map(item => {
                        return(
                            <li className="list-group-item" key={item.orderId}>
                                <HistoryPageListItem historyData={item} />
                            </li>
                        );
                    })
                }
            </ul>
        )
    }

    static get propTypes() {
        return {
            fetchUserOrderHistory: PropTypes.func.isRequired,
            currentUserOrderHistory: PropTypes.array,
            loading: PropTypes.bool,
            clientName: PropTypes.string
        };
    }
}

const mapStateToProps = ({ MenuReducer: {loading}, UserReducer: {clientName, currentUserOrderHistory} }) => {
    return { clientName, currentUserOrderHistory, loading };
};

const mapDispatchToProps = (dispatch, { pizzaService }) => {
    return bindActionCreators({
        fetchUserOrderHistory: fetchUserOrderHistory(pizzaService)
    }, dispatch);
};

export default compose(
    withPizzaDeliveryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HistoryList);