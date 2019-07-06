import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import bp1 from '../../../../assets/img/birthday-promos-1.jpg'

export default () => {
    return (
        <MenuGroup
            id="birthday"
            heading="BIRTHDAY PROMOS"
            large={true}
            menu={[
                {
                    img: bp1,
                    code: 'BP1',
                    name: (
                        <>
                            Pancit Small Queen
                            <br />
                            4 Orders of Lumpiang Shanghai
                            <br />
                            4 Orders of Chinese Fried Chicken
                            <br />
                            3 Orders of Any Regular Vegetable or Fish Dish
                            <br />
                            1.5 Orders of Large Yangchow Fried Rice
                            <br />
                            12 pcs. Ube Pao
                            <br />
                            <br />
                            Good for 10-15 pax
                            <br />
                            Save P600
                        </>
                    ),
                    price: '3000',
                },
            ]}
        />
    )
}
