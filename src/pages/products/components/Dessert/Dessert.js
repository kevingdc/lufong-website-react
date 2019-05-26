import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports

export default () => {
    return (
        <MenuGroup
            id="dessert"
            heading="DESSERT"
            menu={[
                {
                    code: 'UBE1',
                    name: 'Ube Butchi (4 pcs.)',
                    price: '80',
                },
                {
                    code: 'UBE2',
                    name: 'Ube Pao (4 pcs.)',
                    price: '80',
                },
            ]}
        />
    )
}
