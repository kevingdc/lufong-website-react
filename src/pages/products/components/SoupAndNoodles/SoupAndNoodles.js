import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports

export default () => {
    return (
        <MenuGroup
            id="soup-and-noodles"
            heading="SOUP AND NOODLES"
            menu={[
                {
                    code: 'SN1',
                    name: 'Hototay',
                    price: '150',
                },
                {
                    code: 'SN2',
                    name: 'Chicken',
                    price: '150',
                },
                {
                    code: 'SN3',
                    name: 'Wanton',
                    price: '150',
                },
                {
                    code: 'SN4',
                    name: 'Beef Noodles',
                    price: '150',
                },
                {
                    code: 'SN5',
                    name: 'Beef Wanton',
                    price: '200',
                    bestseller: true,
                },
            ]}
        />
    )
}
