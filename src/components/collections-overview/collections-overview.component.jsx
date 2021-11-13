import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />))
        }
    </div>
);


export default CollectionOverview;