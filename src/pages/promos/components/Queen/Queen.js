import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

export default () => {
    return (
        <MenuGroup
            id="queen"
            heading="QUEEN'S PROMOS"
            large={true}
            menu={[
                {
                    code: 'QP1',
                    name: (
                        <>
                            Pancit Medium Queen
                            <br />
                            2 Main Dishes (choice of Pork, Chicken, Fish,
                            Regular Vegetable)
                            <br />
                            Free Prawn Crackers
                            <br />
                            <br />
                            Good for 5-6 pax
                            <br />
                            Save P180
                        </>
                    ),
                    price: '1000',
                },
                {
                    code: 'QP2',
                    name: (
                        <>
                            Pancit Medium Queen
                            <br />
                            3 Main Dishes (choice of Pork, Chicken, Fish,
                            Vegetable, Beef)
                            <br />
                            Free Prawn Crackers
                            <br />
                            <br />
                            Good for 6-8 pax
                            <br />
                            Save P280
                        </>
                    ),
                    price: '1500',
                },
            ]}
        />
    )
}
