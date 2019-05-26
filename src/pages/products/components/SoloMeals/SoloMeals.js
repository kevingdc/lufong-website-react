import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import soloMeals1 from '../../../../assets/img/solo-meals-1.jpg'
import soloMeals2 from '../../../../assets/img/solo-meals-2.jpg'

export default () => {
    return (
        <MenuGroup
            id="solo-meals"
            heading="SOLO MEALS"
            menu={[
                {
                    img: soloMeals1,
                    code: 'SM1',
                    name: (
                        <>
                            Shanghai Fried Rice, <br />3 pcs. Fried Chicken,{' '}
                            <br />1 pc. Ube Pao
                        </>
                    ),
                    price: '150',
                },
                {
                    img: soloMeals2,
                    code: 'SM2',
                    name: (
                        <>
                            Shanghai Fried Rice, <br />6 pcs. Lumpiang Shanghai,{' '}
                            <br />1 pc. Ube Pao
                        </>
                    ),
                    price: '150',
                },
            ]}
        />
    )
}
