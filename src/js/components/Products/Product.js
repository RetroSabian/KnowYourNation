import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Product.scss";
import  * as myConstClass from "../../constants/product-constants"

class Product extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            Name:'',
            CoverImageLocation:'',
            Description:'',
            Price:'',
            Type:'',
            SizeOption:'',
            ColourOption:'' ,
            Small:false,
            Medium:false,
            Large:false,
            Speedy:false,
            Color:false,
            Kyn:false,
            Count:0,

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.Small=this.SmallFuction.bind(this);
        this.Medium=this.MediumFuction.bind(this);
        this.Large=this.LargeFuction.bind(this);
        this.handleChecked=this.handleChecked.bind(this);
        this.Color=this.Color.bind(this)
    }
    
    onChange(e)
    {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e)
    {
        e.preventDefault();
        const post=
        {
            Name:this.state.Name,
            Description: this.state.Description,
            Price:this.state.Price,
            Type:this.state.Type,
            SizeOption:this.state.Count,
            ColourOption:this.state.ColourOption,
            CoverImageLocation:this.state.FileUpload,
        }

        fetch(myConstClass.PRODUCT_URL,
            {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(response=>response.json());
    }

    Color()
    {
        if(this.state.Color==false)
        {
            this.setState({Color:true,ColourOption:1});
        }
        else
        {
            this.setState({Color:false})
        }
    }

    handleChecked()
    {
        if(this.state.Speedy==false)
        {
            this.setState({Speedy:true,Kyn:false,Type:"Speedy"});
        }
        else{
            this.setState({Speedy:false,Kyn:true,Type:"Know your nation"});
        }
    }
    
    SmallFuction()
    {
        if(this.state.Small==false)
        {
            this.setState({Small:true,count:1});
        }
        else{
            this.setState({Small:false}); 
        }
    }

    MediumFuction()
    {
        if(this.state.Medium==false)
        {
            this.setState({Medium:true,Count:2})
        }
        else
        {
            this.state.Medium=false;
        }
    }

    LargeFuction()
    {
        if(this.state.Large==false)
        {
            this.setState({Large:true,Count:3});
        }
        else
        {
            this.setState({Large:false});
        }
    } 
    
    render()
    {
        let loc_navBarTitle = "CREATE PRODUCT";
        let loc_navbarItems = [true, false, false, true];
        return (
            <div className="Product">
                <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                <div className="container ">
                   <div>
                        <img src={require('./download.jpg')} />
                    </div>
                    <div className="row ">
                        <div className="col-12 cover-image">
                            <label >Cover Image</label>
                            <span>
                                <input name="file" type="file"/> 
                             </span>
                        </div>
                        <div className="col-12 name">
                            <label >Name</label>
                            <input className="formInput" name="Name" type="text" onChange={this.onChange}  value={this.state.Name}/>
                        </div>
                        <div className="col-12 name">
                            <label >Description</label>
                        </div>
                        <div className="col-12 description">
                            <textarea className ="description"  type="text" name ="Description"  onChange={this.onChange}  value={this.state.Description}/>
                        </div>
                        <div className="col-12 name">
                            <label >Type/Category</label>
                        </div>
                        <div className="col-12 name">
                            <div className="rad">
                                <input type="radio" name="Speedy" value={this.state.Speedy} onClick={this.handleChecked}  /><label >Speedy</label>
                                <input type="radio" value="Know your nation" name="Speedy" value={this.state.Speedy} onClick={this.handleChecked}/> Know your nation
                            </div>
                        </div>
                        <div className="col-12 name">
                            <label >Price</label>
                            <input className="formInput" name="Price" type="Price" onChange={this.onChange}  value={this.state.Price}/>
                        </div>
                        <div className ="col-12 name" >
                            <div className="col-12 createbutton">
                                <button onClick ={this.onSubmit} type="button" className="btn-dark">CREATE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;
