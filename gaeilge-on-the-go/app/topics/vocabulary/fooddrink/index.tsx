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
        },
        {
            "text" : "Another",
            "route" : "/topics/vocabulary/fooddrink/fruit-topic"
        },
        {
            "text" : "Another2",
            "route" : "/topics/vocabulary/fooddrink/fruit-topic"
        },
        {
            "text" : "Another3",
            "route" : "/topics/vocabulary/fooddrink/fruit-topic"
        },
        {
            "text" : "Another4",
            "route" : "/topics/vocabulary/fooddrink/fruit-topic"
        },
        {
            "text" : "Another5",
            "route" : "/topics/vocabulary/fooddrink/fruit-topic"
        },
        {
            "text" : "Another6",
            "route" : "/topics/vocabulary/fooddrink/fruit-topic"
        },
        {
            "text" : "Another7",
            "route" : "/topics/vocabulary/fooddrink/fruit-topic"
        }
    ];

    return (
        <Navigation title="Food and drink" paths={paths}></Navigation>
    )

}