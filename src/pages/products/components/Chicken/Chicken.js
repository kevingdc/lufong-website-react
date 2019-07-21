import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import chineseFriedChicken from '../../../../assets/img/chinese-fried-chicken.jpg'

export default () => {
    return (
        <MenuGroup
            id="chicken"
            heading="CHICKEN"
            menu={[
                {
                    code: 'CD1',
                    img: chineseFriedChicken,
                    name: 'Chinese Fried Chicken',
                    price: '220',
                    bestseller: true,
                },
                {
                    code: 'CD2',
                    name: 'Sweet and Sour Chicken',
                    price: '240',
                },
                {
                    code: 'CD3',
                    name: 'Chicken with Mushrooms',
                    price: '240',
                },
                {
                    code: 'CD4',
                    name: 'Chicken with Tofu',
                    price: '240',
                },
                {
                    code: 'CD5',
                    name: 'Whole Chicken',
                    price: '380',
                },
            ]}
        />
    )
}
