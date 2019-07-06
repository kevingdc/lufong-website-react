import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import lumpiangShanghai from '../../../../assets/img/lumpiang-shanghai.jpg'
import lechonKawali from '../../../../assets/img/lechon-kawali.jpg'
import pinsecPrito from '../../../../assets/img/pinsec-prito.jpg'

export default () => {
    return (
        <MenuGroup
            id="pork"
            heading="PORK"
            menu={[
                {
                    code: 'PD1',
                    img: lumpiangShanghai,
                    name: 'Lumpiang Shanghai',
                    price: '240',
                },
                {
                    code: 'PD2',
                    img: lechonKawali,
                    name: 'Lechon Kawali',
                    price: '240',
                },
                {
                    code: 'PD3',
                    name: 'Salt and Pepper Spareribs',
                    price: '240',
                },
                {
                    code: 'PD4',
                    name: 'Pork Steak',
                    price: '240',
                },
                {
                    code: 'PD5',
                    name: 'Sweet and Sour Pork',
                    price: '240',
                },
                // {
                //     code: 'PD6',
                //     name: 'Torta',
                //     price: '220',
                // },
                // {
                //     code: 'PD7',
                //     name: 'Torta Longganisa',
                //     price: '220',
                // },
                {
                    code: 'PD8',
                    name: 'Lechon in Oyster Sauce',
                    price: '240',
                },
                {
                    code: 'PD9',
                    name: 'Pork with Tofu',
                    price: '240',
                },
                {
                    code: 'PD12',
                    img: pinsecPrito,
                    name: 'Pinsec Prito (12 pcs.)',
                    price: '240',
                },
            ]}
        />
    )
}
