import Topic from '@/components/topic/topic';
import React from 'react';

export default function FruitTopic() {
    const data = require('@/assets/data/vocab/food/fruit.json');
    const dataJson = JSON.stringify(data);
    return (
        <Topic lessonJson={dataJson}></Topic>
    )
}