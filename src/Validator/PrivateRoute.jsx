import React, { useContext } from 'react'
import mycontext from '../Store/Auth-context'
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {

    const ctx = useContext(mycontext);

    

  return ctx.isLogin ? props.children : <Navigate to={"/login"} />
}

export default PrivateRoute