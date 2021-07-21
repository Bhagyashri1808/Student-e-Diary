import React from 'react'
import { Box, CloseButton, PopupBox } from './Popup.Style';

const Popup = ({handleClose,text}) => {
   return  (<PopupBox>
        <Box>
        <CloseButton className="close-icon" onClick={handleClose}>x</CloseButton>
        {text}
        </Box>
    </PopupBox>);
}

export default Popup;