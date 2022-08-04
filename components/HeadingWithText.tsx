import React from 'react'
import IconLink from './core/IconLink'
import Text from './core/Text'
import Title from './core/Title'

type HeadingWithTextType = {
    title: string;
    style?: string;
    text: string;
    label: string;
}

function HeadingWithText({ title, style, text, label }: HeadingWithTextType) {
    return (
        <div>
            <Title title={ title } style={ style } />
            <Text text={ text } />
            <IconLink label={ label } />
        </div>
    )
}

export default HeadingWithText