import React from "react";

import iconSet from "./icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Icon = (props) => {
    const { color, size = "100%", icon, className = "" } = props;

    return (
        <IcomoonReact
            className={className}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon}
        />
    );
};

export default Icon;