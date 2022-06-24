import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
export default (props) => {
  return (
    <>
      <DesktopHeader
        userIsLoggedin={props.userIsLoggedin}
        userId={props.userId}
        setUserId={props.setUserId}
        setUserIsLoggedin={props.setUserIsLoggedin}
        username={props.username}
      />
      <MobileHeader
        userIsLoggedin={props.userIsLoggedin}
        userId={props.userId}
        setUserId={props.setUserId}
        setUserIsLoggedin={props.setUserIsLoggedin}
        username={props.username}
      />
    </>
  );
};
