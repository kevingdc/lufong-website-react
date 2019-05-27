import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import ssp1 from '../../../../assets/img/sulit-sarap-promos-1.jpg'
import ssp2 from '../../../../assets/img/sulit-sarap-promos-2.jpg'
import ssp3 from '../../../../assets/img/sulit-sarap-promos-3.jpg'

export default () => {
    return (
        <MenuGroup
            id="sulit-sarap"
            heading="SULIT SARAP PROMOS"
            large={true}
            menu={[
                {
                    img: ssp1,
                    code: 'SSP1',
                    name: (
                        <>
                            Pancit Small Regular
                            <br />
                            Shanghai Fried Rice Large
                            <br />
                            8 pcs. Ube Pao
                            <br />
                            2 Main Dishes (choice of Vegetable, Fish, Chicken,
                            or Pork)
                            <br />
                            <br />
                            Good for 5-6 pax
                            <br />
                            Save P200
                        </>
                    ),
                    price: '1000',
                },
                {
                    img: ssp2,
                    code: 'SSP2',
                    name: (
                        <>
                            Pancit Small King
                            <br />
                            Shanghai Fried Rice Large
                            <br />
                            8 pcs. Ube Pao
                            <br />
                            4 Main Dishes (choice of Vegetable, Fish, Chicken,
                            or Pork)
                            <br />
                            <br />
                            Good for 6-8 pax
                            <br />
                            Save P320
                        </>
                    ),
                    price: '1500',
                },
                {
                    img: ssp3,
                    code: 'SSP3',
                    name: (
                        <>
                            Pancit Medium King
                            <br />
                            2 Shanghai Fried Rice Large
                            <br />
                            12 pcs. Ube Pao
                            <br />
                            3 Main Dishes (choice of Vegetable, Fish, Chicken,
                            or Pork)
                            <br />
                            1 Beef Dish
                            <br />
                            <br />
                            Good for 8-10 pax
                            <br />
                            Save P460
                        </>
                    ),
                    price: '2000',
                },
            ]}
        />
    )
}
