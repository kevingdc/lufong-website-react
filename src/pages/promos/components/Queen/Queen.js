import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import qp1 from '../../../../assets/img/queens-promo-1.jpg'
import qp2 from '../../../../assets/img/queens-promo-2.jpg'

export default () => {
    return (
        <MenuGroup
            id="queen"
            heading="QUEEN'S PROMOS"
            large={true}
            menu={[
                {
                    code: 'QP1',
                    img: qp1,
                    name: (
                        <>
                            Good for 5-6 pax
                            <br />
                            <br />
                            Pancit Medium Queen
                            <br />
                            2 Main Dishes (choice of Pork, Chicken, Fish,
                            Regular Vegetable)
                            <br />
                            Free Prawn Crackers
                            <br />
                        </>
                    ),
                    price: (
                        <>
                            1000
                            <br />
                            Save P180
                        </>
                    ),
                },
                {
                    code: 'QP2',
                    img: qp2,
                    name: (
                        <>
                            Good for 6-8 pax
                            <br />
                            Pancit Medium Queen
                            <br />
                            3 Main Dishes (choice of Pork, Chicken, Fish,
                            Vegetable, Beef)
                            <br />
                            Free Prawn Crackers
                        </>
                    ),
                    price: (
                        <>
                            1500
                            <br />
                            Save P280
                        </>
                    ),
                },
            ]}
        />
    )
}
