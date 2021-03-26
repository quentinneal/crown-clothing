import React from 'react';

import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import CustomButton from '../custom-button/custom-button.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <div className='collection-preview'>
        <div className='title-button'>
            <div className="title">{title}</div>
            <CustomButton onClick={() => history.push(`${match.path}/${routeName}`)} onKeyDown={(e) => { if (e.keyCode === 13) {history.push(`${match.path}/${routeName}`)}}}>All {title}</CustomButton>
        </div>
        <div className='preview'>
            {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default withRouter(CollectionPreview);