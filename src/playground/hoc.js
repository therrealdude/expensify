import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) =>
    props.isAuthenticated ?
      (<p>Please login to view the info</p>) :
      (<WrappedComponent {...props}/>)

}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="This is info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is info" />, document.getElementById('app'));
