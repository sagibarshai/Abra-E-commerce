import React,{useEffect , useState} from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
export default (props) => {
  useEffect(() => {
    if(props.isManager || localStorage.getItem('manager')) {
      props.setIsManager(props.userId)  
    }
  } , [props])
  return (
    <>
      <DesktopHeader
        userIsLoggedin={props.userIsLoggedin}
        userId={props.userId}
        setUserId={props.setUserId}
        setUserIsLoggedin={props.setUserIsLoggedin}
        username={props.username}
        isManager={props.isManager}
        setIsManager={props.setIsManager}

      />
      <MobileHeader
        userIsLoggedin={props.userIsLoggedin}
        userId={props.userId}
        setUserId={props.setUserId}
        setUserIsLoggedin={props.setUserIsLoggedin}
        username={props.username}
        isManager={props.isManager}
        setIsManager={props.setIsManager}

      />
    </>
  );
};
