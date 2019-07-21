import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports

export default () => {
    return (
        <MenuGroup
            id="fish"
            heading="FISH"
            menu={[
                {
                    code: 'FD1',
                    name: 'Sweet and Sour Fish',
                    price: '230',
                    bestseller: true,
                },
                {
                    code: 'FD2',
                    name: 'Fish Cubes with Tofu',
                    price: '230',
                },
                {
                    code: 'FD3',
                    name: 'Fish Cubes with Tausi',
                    price: '230',
                },
                {
                    code: 'FD4',
                    name: 'Fish Cubes with Tofu and Tausi',
                    price: '230',
                },
            ]}
        />
    )
}
