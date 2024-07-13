import React from "react"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from "./Button"
import { BsQuestionCircle } from "react-icons/bs";

const ToolTip = ()=> {
    
    return (
        <small>
            {['right'].map((placement) => (
                <OverlayTrigger
                    trigger="hover"
                    key={placement}
                    placement={placement}
                >
                    <Button content={<BsQuestionCircle size={15} color="white"  />} design=" btn-tooltip bg-dark" />
                </OverlayTrigger>
            ))}
        </small>
    );
}

export default ToolTip;