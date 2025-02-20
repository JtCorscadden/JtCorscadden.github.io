import React from 'react';
import Navigation from '@/components/screen/navigation';

export default function FoodAndDrink() {

    const paths = [
        {
            "text" : "Vegetables",
            "route" : "/topics/vocabulary/fooddrink/vegetables-topic",
        },
        {
            "text" : "Fruit",
            "route" : "/topics/vocabulary/fooddrink/fruit-topic",
        }
    ];

    return (
        <Navigation title="Food and drink" paths={paths}></Navigation>
    )

}