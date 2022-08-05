import React from 'react'

type TitleType = {
    title: string;
    style?: string;
}

function Title({ title, style }: TitleType) {

    return (
        <h2 className={
            style === 'gradient'
                ? "text-transparent font-normal text-lg md:text-xl bg-clip-text mb-3 bg-gradient-to-r from-cyan-400 via-blue-900"
                : "text-lg md:text-xl font-normal mb-1" }
        >{ title }</h2>
    )

}

export default Title