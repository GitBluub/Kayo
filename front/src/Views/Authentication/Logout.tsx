import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { unsetToken } from '../../Store/jwtToken/jwtTokenSlice';
import { useDispatch } from 'react-redux'

const Logout = () => {
    const dispatch = useDispatch();
    dispatch(unsetToken())
    return <Navigate replace to="/login"/>
}

export default Logout;
