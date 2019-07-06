import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import chopsueyGuisado from '../../../../assets/img/chopsuey-guisado.jpg'
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
                    name: 'Chopsuey Queen (with Lechon)',
                    price: '260',
                },
                {
                    code: 'VD3',
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
