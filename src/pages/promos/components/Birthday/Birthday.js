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
                            Pancit Medium Queen
                            <br />
                            24 pcs. Chinese Fried Chicken
                            <br />
                            48 pcs. Lumpiang Shanghai
                            <br />
                            Chopsuey Guisado
                            <br />
                            Choice of 2 Large Yangchow Fried Rice or 30 pcs. Ube
                            Pao
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
