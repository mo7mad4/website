import React from "react";
import CustomLink from "../../../../components/CustomLink";
import { PATHS } from "../../../../router";
import MenuStyle from "./style";
import Button from "../../../Button";
import { useAuth } from "../../../../contexts/authContext";

interface IProps {
}


const Menu = ({ }: IProps) => {
    const {logout} = useAuth();
    
    return (
        <MenuStyle>
            <div className="dropMenuNav">
                <ul className="menuTypes">
                    <Button onClick={logout}>
                        <li className="signup">Logout</li>
                    </Button>
                    <CustomLink to={PATHS.SETTINGS}>
                        <li className="settings">Settings</li>
                    </CustomLink>
                </ul>
            </div>
        </MenuStyle>

    );
}

export default Menu