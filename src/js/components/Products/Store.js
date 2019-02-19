import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import "./Store.scss"
import  * as myConstClass from "../../constants/product-constants"
import { NavLink } from "react-router-dom";


class  Store extends Component 
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            Type:'',
        }
        this.kynMerch=this.kynMerch.bind(this);
        this.speedyMerch=this.speedyMerch.bind(this);
    }
    speedyMerch() 
    {
        fetch(myConstClass.speedy_url)
            .then((response) => response.json())
            .then(
                (data) => 
                {
                    console.log(data);
                    this.posts = data.map((item,i) => 
                    {
                        return (    
                        <td>
                            <div className="col-6 items">                     
                            <NavLink to={`/Productname/${item.id}`}><img src={require(`${item.coverImageLocation}`)} /></NavLink> 
                                <div className='ProductPrice'>
                                    <p>{item.name} </p>
                                    <p>R{item.price}</p>
                                </div>        
                                </div> 
                        </td>)
                    })
                    this.setState(
                    {
                        posts: this.posts
                    })
                },
                (error) => 
                {
                    console.log(error);
                });
             }

    kynMerch()
    {
        fetch(myConstClass.kyn_url)
            .then((response) => response.json())
            .then(
                (data) => {
                    console.log(data);
                    this.posts = data.map((item,i) => {
                        return (
                            <td>
                                <div className="col-4 items">                                
                                    <NavLink to={`/Productname/${item.id}`} ><img src={require(`${item.coverImageLocation}`)}/></NavLink>
                                    <div className='ProductPrice'>
                                            <label>{item.name}</label>
                                            <label> R{item.price}</label>
                                    </div>
                                 </div> 
                            </td>
                        )
                    })
                    this.setState({
                        posts: this.posts
                    })
                },
                (error) => {
                    console.log(error);
                });
    }
    
    render() {
        let loc_navBarTitle = "Store";
        let loc_navbarItems = [true, true, true, true];
    return (
        <div className="Store">
            <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
            <div className="store-container">
                <ul className="nav nav-tabs">
                    <a className="nav-link speed-KYN" data-toggle="tab"  onClick= {this.speedyMerch} href="#speedyMerch">Speedy Merch</a>
                    <a className="nav-link  speed-KYN" data-toggle="tab" onClick= {this.kynMerch} href="#KYNMerch">KYN Merch</a>
                </ul>
            </div>
            <div className="container">
                <div className='row product'>
                    {this.posts}
                </div>
            </div>
            <div className ="col-12 name" >
                <div className="col-12 createbutton">
                    <button type="button" class="btn btn-dark btn-circle btn-xl"> cart</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Store;
