import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import ubeButchi from '../../../../assets/img/ube-butchi.jpg'
import ubePao from '../../../../assets/img/ube-pao.jpg'

export default () => {
    return (
        <MenuGroup
            id="dessert"
            heading="DESSERT"
            menu={[
                {
                    code: 'UBE1',
                    name: 'Ube Pao (4 pcs.)',
                    price: '80',
                    bestseller: true,
                },
                {
                    code: 'UBE12',
                    img: ubePao,
                    name: 'Ube Pao (12 pcs.)',
                    price: '200',
                },
                {
                    code: 'UBE2',
                    name: 'Ube Butchi (4 pcs.)',
                    price: '80',
                },
                {
                    code: 'UBE15',
                    img: ubeButchi,
                    name: 'Ube Butchi (15 pcs.)',
                    price: '250',
                },
            ]}
        />
    )
}
