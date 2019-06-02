import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import porkSiomai from '../../../../assets/img/pork-siomai.jpg'
import japaneseSiomai from '../../../../assets/img/japanese-siomai.jpg'
import pinsecPrito from '../../../../assets/img/pinsec-prito.jpg'

export default () => {
    return (
        <MenuGroup
            id="dimsum"
            heading="DIMSUM"
            menu={[
                {
                    code: 'DM1',
                    img: porkSiomai,
                    name: 'Pork Siomai (4 pcs.)',
                    price: '100',
                },
                {
                    code: 'DM2',
                    img: japaneseSiomai,
                    name: 'Japanese Siomai (4 pcs.)',
                    price: '120',
                },
                {
                    code: 'DM3',
                    name: 'Spareribs w/ Tausi',
                    price: '120',
                },
                {
                    code: 'DM4',
                    name: 'Spicy Wanton (6 pcs.)',
                    price: '120',
                },
                {
                    code: 'DM6',
                    name: 'Pinsec Prito (6 pcs.)',
                    price: '120',
                },
                {
                    code: 'DM12',
                    img: pinsecPrito,
                    name: 'Pinsec Prito (12 pcs.)',
                    price: '220',
                },
            ]}
        />
    )
}
