import Lesson from '@/components/screen/lesson';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

export default function LessonApp() {

    let { lesson } = useLocalSearchParams();
    lesson = JSON.parse( lesson );

    return (
        <Lesson lesson={lesson}></Lesson>
    )

}