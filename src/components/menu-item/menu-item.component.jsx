import React from 'react';

// React Router
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, position, history, linkUrl, match }) => (
    
    <div tabIndex="0" className={`menu-item ${position}`} onKeyPress={() => history.push(`${match.url}${linkUrl}`)}>
        <div style={{ backgroundImage: `url(${imageUrl})`}} className="menu-background" />
        <div className="menu-foreground" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="menu-title">{title}</div>
        </div>
</div>
);

export default withRouter(MenuItem);

/*{ onClick={() => history.push(`${match.url}${linkUrl}`)} 
Replacement for anchor links <a></a> links because url will load components 
instead of an entire page }*/