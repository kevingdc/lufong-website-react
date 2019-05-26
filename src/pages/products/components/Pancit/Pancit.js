import React from 'react'

// Component imports
import MenuGroup from '../../../../components/MenuGroup'

// Asset imports
import soloMeals1 from '../../../../assets/img/solo-meals-1.jpg'
import soloMeals2 from '../../../../assets/img/solo-meals-2.jpg'
import soloMeals3 from '../../../../assets/img/solo-meals-3.jpg'
import soloMeals4 from '../../../../assets/img/solo-meals-4.jpg'
import soloMeals5 from '../../../../assets/img/solo-meals-5.jpg'

export default () => {
    return (
        <MenuGroup
            id="pancit"
            heading="PANCIT"
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
                {
                    img: soloMeals3,
                    code: 'SM3',
                    name: (
                        <>
                            Shanghai Fried Rice, <br />
                            1/2 Order of Lechong Kawali, <br />1 pc. Ube Pao
                        </>
                    ),
                    price: '150',
                },
                {
                    img: soloMeals4,
                    code: 'SM4',
                    name: (
                        <>
                            Plain Rice, <br />
                            1/2 Order of Braised Beef, <br />1 pc. Ube Pao
                        </>
                    ),
                    price: '150',
                },
                {
                    img: soloMeals5,
                    code: 'SM5',
                    name: (
                        <>
                            Plain Rice, <br />
                            1/2 Order of Hoototay Guisado, <br />2 pcs. Ube Pao
                        </>
                    ),
                    price: '150',
                },
            ]}
        />
    )
}
