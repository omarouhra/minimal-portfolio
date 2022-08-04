import React from 'react'

type ButtonType = {
    lable: string
}

function Button({ lable }: ButtonType) {
    return (
        <button className='text-lg font-semibold'>
            { lable }
        </button>
    )
}

export default Button