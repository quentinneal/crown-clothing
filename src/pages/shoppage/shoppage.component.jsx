import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Spinner from '../../components/spinner/spinner.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import './shoppage.styles.scss'


const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

        return (
            <main className='shop-page'>
                <Suspense fallback={<Spinner />}>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                />
                </Suspense>
            </main>
        );
    }

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
    null, 
    mapDispatchToProps
)(ShopPage);