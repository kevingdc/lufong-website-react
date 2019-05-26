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
                    price: '250',
                },
                {
                    code: 'BD2',
                    name: 'Beef Steak',
                    price: '250',
                },
                {
                    code: 'BD3',
                    name: 'Beef with Mushrooms',
                    price: '250',
                },
                {
                    code: 'BD4',
                    name: 'Beef in Oyster Sauce',
                    price: '250',
                },
                {
                    code: 'BD5',
                    name: 'Shredded Beef with Onions',
                    price: '250',
                },
                {
                    code: 'BD6',
                    name: 'Beef with Tofu',
                    price: '250',
                },
                {
                    code: 'BD7',
                    name: 'Beef with Broccoli',
                    price: '250',
                },
            ]}
        />
    )
}
