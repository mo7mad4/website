import React, { useState } from 'react'
import { H4, Body1 } from '../../components/Typography'
import menu from '../../assets/ImagePage/menu.png'
import Styles from './style'
import imageForModal from '../../assets/ImagePage/Image.png'
import Hashtags from './components/Hashtags'
import Menu from './components/Menu'

const Image: React.FC = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [closeMenu, setCloseMenu] = useState(true)



    return (
        <Styles className='containerWidth' >

            <div className="menu" >
                <img src={menu} alt="menu"
                    onClick={() => {
                        setOpenMenu(true)
                        setCloseMenu(true)
                    }}
                />
                {openMenu === true ?  <Menu /> : "" && closeMenu === true ? <Menu />: ""}
            </div>

            <div className='item section__padding'>

                <div className="itemImage">
                    <img src={imageForModal} alt="Image For Modal" />
                </div>

                <div className="item-content">
                    <div className="item-content-title">
                        <H4
                            weight={600}
                            margin="16px 16px"
                            align="center"
                            transform="capitalize"
                        >
                            Abstact Smoke Red Blue
                        </H4>
                    </div>

                    <div className="item-content-detail">
                        <Body1
                            color='black'
                            align='start'
                            weight={400}
                            transform="capitalize"
                            margin='16px 16px'
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </Body1>
                    </div>
                    <Hashtags />
                </div>
            </div>

        </Styles>
    )
}

export default Image