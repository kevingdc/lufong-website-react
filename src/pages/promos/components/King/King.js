import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import kp1 from '../../../../assets/img/kings-promo-1.jpg'
import kp2 from '../../../../assets/img/kings-promo-2.jpg'
import kp3 from '../../../../assets/img/kings-promo-3.jpg'

export default () => {
    return (
        <MenuGroup
            id="king"
            heading="KING'S PROMOS"
            large={true}
            menu={[
                {
                    code: 'KP1',
                    img: kp1,
                    name: (
                        <>
                            Good for 4-5 pax
                            <br />
                            <br />
                            Pancit Small King
                            <br />
                            2 Main Dishes (choice of Pork, Chicken, Fish,
                            Regular Vegetable)
                            <br />
                            4 Cups Plain Rice
                            <br />4 pcs. Ube Pao
                        </>
                    ),
                    price: (
                        <>
                            1000
                            <br />
                            Save P160
                        </>
                    ),
                },
                {
                    code: 'KP2',
                    img: kp2,
                    name: (
                        <>
                            Good for 6-8 pax
                            <br />
                            <br />
                            Pancit Small King
                            <br />
                            3 Main Dishes (choice of Pork, Chicken, Fish,
                            Vegetable)
                            <br />
                            Large Shanghai Fried Rice
                            <br />
                            12 pcs. Ube Pao
                        </>
                    ),
                    price: (
                        <>
                            1500
                            <br />
                            Save P210
                        </>
                    ),
                },
                {
                    code: 'KP3',
                    img: kp3,
                    name: (
                        <>
                            Good for 8-10 pax
                            <br />
                            <br />
                            Pancit Small King
                            <br />
                            4 Main Dishes (choice of Pork, Chicken, Fish,
                            Vegetable, Beef)
                            <br />
                            2 Large Yangchow Fried Rice
                            <br />
                            12 pcs. Ube Paoß
                        </>
                    ),
                    price: (
                        <>
                            2000
                            <br />
                            Save P280
                        </>
                    ),
                },
            ]}
        />
    )
}
