import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports

export default () => {
    return (
        <MenuGroup
            id="beef"
            heading="BEEF"
            menu={[
                {
                    code: 'BD1',
                    name: 'Braised Beef',
                    price: '270',
                    bestseller: true,
                },
                {
                    code: 'BD2',
                    name: 'Beef Steak',
                    price: '270',
                },
                {
                    code: 'BD3',
                    name: 'Beef with Mushroom',
                    price: '270',
                },
                {
                    code: 'BD4',
                    name: 'Beef in Oyster Sauce',
                    price: '270',
                },
                {
                    code: 'BD5',
                    name: 'Shredded Beef with Onions',
                    price: '270',
                },
                {
                    code: 'BD6',
                    name: 'Beef with Tofu',
                    price: '270',
                },
                {
                    code: 'BD7',
                    name: 'Beef with Broccoli',
                    price: '270',
                },
            ]}
        />
    )
}
