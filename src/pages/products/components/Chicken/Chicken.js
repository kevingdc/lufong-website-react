import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports

export default () => {
    return (
        <MenuGroup
            id="chicken"
            heading="CHICKEN"
            menu={[
                {
                    code: 'CD1',
                    name: 'Chinese Fried Chicken',
                    price: '220',
                },
                {
                    code: 'CD2',
                    name: 'Sweet and Sour Chicken',
                    price: '220',
                },
                {
                    code: 'CD3',
                    name: 'Chicken with Mushrooms',
                    price: '220',
                },
                {
                    code: 'CD4',
                    name: 'Chicken with tofu',
                    price: '220',
                },
            ]}
        />
    )
}
