import React, { FC } from 'react';
import { useParams } from "react-router-dom";

export const ItemPage: FC = () => {
    const { itemId } = useParams();

    return (
        <div>
            Item Page
        </div>
    );
};

