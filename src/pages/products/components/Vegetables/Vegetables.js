import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import chopsueyGuisado from '../../../../assets/img/chopsuey-guisado.jpg'
import chopsueyKing from '../../../../assets/img/chopsuey-king.jpg'
import chopsueyQueen from '../../../../assets/img/chopsuey-queen.jpg'
// import chopsueyConLechon from '../../../../assets/img/chopsuey-con-lechon.jpg'

export default () => {
    return (
        <MenuGroup
            id="vegetables"
            heading="VEGETABLES"
            menu={[
                {
                    code: 'VD1',
                    img: chopsueyGuisado,
                    name: 'Chopsuey Guisado',
                    price: '230',
                },
                {
                    code: 'VD2',
                    img: chopsueyQueen,
                    name: 'Chopsuey Queen (with Lechon)',
                    price: '260',
                    bestseller: true,
                },
                {
                    code: 'VD3',
                    img: chopsueyKing,
                    name: 'Chopsuey King (with Lechon & Longanisa)',
                    price: '280',
                },
                {
                    code: 'VD4',
                    name: 'Assorted Vegetables',
                    price: '230',
                },
                {
                    code: 'VD5',
                    name: 'Hototay Guisado',
                    price: '230',
                    bestseller: true,
                },
                {
                    code: 'VD6',
                    name: 'Broccoli Garlic',
                    price: '230',
                },
            ]}
        />
    )
}
