import Topic from '@/components/topic/topic';
import React from 'react';

export default function VegetablesQuiz() {
    const data = require('@/assets/data/vocab/food/vegetables.json');
    const dataJson = JSON.stringify(data);
    return (
        <Topic lessonJson={dataJson}></Topic>
    )
}