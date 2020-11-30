import React from 'react'
import './App.css';
import Greet from './components/Greet';
import Header from './components/Header';

class App extends React.Component{

  user = {
    username: "pabloberho",
    email: "pablo@pablo.com",
    avatar: "https://images-na.ssl-images-amazon.com/images/I/61iWqqcq%2BKL._AC_SL1500_.jpg"
  };

  checkForAvatar = ()=>{
    if(this.user.avatar){
      return <img src={this.user.avatar} alt={this.user.username} />
    }else{
      return <img src="https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="Default user" />
    }
  }


  render(){
    return (
      <div className="App">
        <Header />
        <Greet email={this.user.email} username={this.user.username}/>
        {this.checkForAvatar()}
        <p>{this.user.username === 'pabloberho' ? 'Welcome Pablo!!!' : 'Welcome student'}</p>
      </div>
    );
  }
}

export default App;