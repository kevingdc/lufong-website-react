import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import lumpiangShanghai from '../../../../assets/img/lumpiang-shanghai.jpg'
import lechonKawali from '../../../../assets/img/lechon-kawali.jpg'

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
                    price: '220',
                },
                {
                    code: 'PD2',
                    img: lechonKawali,
                    name: 'Lechon Kawali',
                    price: '220',
                },
                {
                    code: 'PD3',
                    name: 'Salt and Pepper Spareribs',
                    price: '220',
                },
                {
                    code: 'PD4',
                    name: 'Pork Steak',
                    price: '220',
                },
                {
                    code: 'PD5',
                    name: 'Sweet and Sour Pork',
                    price: '220',
                },
                {
                    code: 'PD6',
                    name: 'Torta',
                    price: '220',
                },
                {
                    code: 'PD7',
                    name: 'Torta Longganisa',
                    price: '220',
                },
                {
                    code: 'PD8',
                    name: 'Lechon in Oyster Sauce',
                    price: '220',
                },
                {
                    code: 'PD9',
                    name: 'Pork with Tofu',
                    price: '220',
                },
            ]}
        />
    )
}
