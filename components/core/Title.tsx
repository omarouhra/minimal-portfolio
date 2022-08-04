import React from 'react'

type TitleType = {
    title: string;
    style?: string;
}

function Title({ title, style }: TitleType) {

    return (
        <h2 className={
            style === 'gradient'
                ? "text-transparent font-medium text-lg md:text-xl bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500"
                : "text-lg md:text-xl font-medium" }
        >{ title }</h2>
    )

}

export default Title