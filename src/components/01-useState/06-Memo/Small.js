import React, { memo } from 'react'

export default memo(function Small({ value }) {

    console.log('me volvi a llamar')
    return (
        <div>
            <small>{value}</small>

        </div>
    )
}
)