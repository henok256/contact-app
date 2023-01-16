import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
 class AddContact extends React.Component {
    state ={
        name:"",
        email:""
    };
    navigate= useNavigate();
    
     add=(e)=>{
        e.preventDefault();
        if(this.state.name===""|| this.state.email===""){
            alert("all fields are manadtory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""})
        this.navigate('/');
        //this.props.history.push("/");
        //window.location.href = '/';
        
    }
    render(){
        return(
            <div className='ui main'><br></br>
                <h2 id="headerApp" >Add Contact</h2>
                <form className='ui form' onSubmit={this.add} >
                    <div className='field'>
                        <label>Name</label>
                        <input type="text" 
                        value={this.state.name}
                        name="name" 
                        placeholder='Name' 
                        onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type="email" 
                        name="email" 
                        value={this.state.email}
                        placeholder='Email' 
                        onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>
                    <button className='ui button blue' to="">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;