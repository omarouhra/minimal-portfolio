import React from 'react'

type ButtonType = {
    lable: string
}

function Button({ lable }: ButtonType) {
    return (
        <button className='text-lg font-semibold opacity-60 hover:opacity-100 hover:translate-x-1 transition duration-200'>
            { lable }
        </button>
    )
}

export default Button