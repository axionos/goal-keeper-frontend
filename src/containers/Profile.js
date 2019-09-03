import React from 'react';

class Profile extends React.Component {
  componentDidMount(){
    if (!localStorage.getItem('token')){
      this.props.router.history.push('/login')
    }
  }

  render(){

    return (
      <div className="profile">
        Profile
      </div>
    );
  }
}

export default Profile;
