import React from 'react';
import './history-page-list-item.css';
import PropTypes from 'prop-types';

const HistoryPageLinkItem = ({ historyData }) => {
    const { clientName, cooking_time, isReady } = historyData;
    return(
        <div>
            <span className="badge badge-light item-title">Client: <span className="badge badge-success item-value">{ `${clientName} ` }</span></span>
            <span className="badge badge-light item-title">Cooking time: <span className="badge badge-success item-value">{ `${cooking_time} ` }</span></span>
            <span className="badge badge-light item-title">Order progress: <span className="badge badge-success item-value">{ `${isReady} ` }</span></span>
        </div>
    );
};

HistoryPageLinkItem.propTypes = {
    historyData: PropTypes.object
};

export default HistoryPageLinkItem;