import React from 'react';
import Navigation from '@/components/screen/navigation';

export default function Vocabulary() {

    const paths = [
        {
            "text" : "Food & Drink",
            "route" : "/topics/vocabulary/fooddrink"
        }
    ]

    return (
        <Navigation title="Vocabulary" paths={paths}></Navigation>
    )

}