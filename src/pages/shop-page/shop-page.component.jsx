import React from "react";
import './shop-page.styles.scss';
import { default as CollectionOverview } from "../../components/collections-overview/collections-overview.container";
import { Route } from "react-router-dom";
import {default as CollectionPage} from "../collection/collection.container";


const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;