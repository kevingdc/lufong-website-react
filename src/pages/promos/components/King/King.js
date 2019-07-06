import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

export default () => {
    return (
        <MenuGroup
            id="king"
            heading="KING'S PROMOS"
            large={true}
            menu={[
                {
                    code: 'KP1',
                    name: (
                        <>
                            Pancit Small King
                            <br />
                            2 Main Dishes (choice of Pork, Chicken, Fish,
                            Regular Vegetable)
                            <br />
                            4 Cups Plain Rice
                            <br />
                            4 pcs. Ube Pao
                            <br />
                            <br />
                            Good for 4-5 pax
                            <br />
                            Save P160
                        </>
                    ),
                    price: '1000',
                },
                {
                    code: 'KP2',
                    name: (
                        <>
                            Pancit Small King
                            <br />
                            3 Main Dishes (choice of Pork, Chicken, Fish,
                            Vegetable)
                            <br />
                            Large Shanghai Fried Rice
                            <br />
                            12 pcs. Ube Pao
                            <br />
                            <br />
                            Good for 6-8 pax
                            <br />
                            Save P210
                        </>
                    ),
                    price: '1500',
                },
                {
                    code: 'KP3',
                    name: (
                        <>
                            Pancit Small King
                            <br />
                            4 Main Dishes (choice of Pork, Chicken, Fish,
                            Vegetable, Beef)
                            <br />
                            2 Large Yangchow Fried Rice
                            <br />
                            12 pcs. Ube Pao
                            <br />
                            <br />
                            Good for 8-10 pax
                            <br />
                            Save P280
                        </>
                    ),
                    price: '2000',
                },
            ]}
        />
    )
}
