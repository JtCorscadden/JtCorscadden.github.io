import Quiz from '@/components/screen/quiz';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

export default function QuizApp() {

    let { lesson } = useLocalSearchParams();
    lesson = JSON.parse( lesson );

    return (
        <Quiz lesson={lesson}></Quiz>
    )

}