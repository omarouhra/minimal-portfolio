import React from 'react'

type TextType = {
    text: string;
}

function Text({ text }: TextType) {
    return (
        <div className='text-base font-normal text-gray-400 dark:text-gray-300 leading-6 mb-4'>{ text }</div>
    )
}

export default Text