import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports

export default () => {
    return (
        <MenuGroup
            id="vegetables"
            heading="VEGETABLES"
            menu={[
                {
                    code: 'VD1',
                    name: 'Chopsuey Guisado',
                    price: '220',
                },
                {
                    code: 'VD2',
                    name: 'Broccoli Garlic',
                    price: '220',
                },
                {
                    code: 'VD3',
                    name: 'Assorted Vegetables',
                    price: '220',
                },
                {
                    code: 'VD4',
                    name: 'Hototay Guisado',
                    price: '220',
                },
                {
                    code: 'VD5',
                    name: 'Chopsuey Con Lechon',
                    price: '250',
                },
            ]}
        />
    )
}
