import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Product.scss";
import {storage} from  "../firebase"


class Product extends Component {
    constructor(props){
        super(props);
        this.state ={
            Name:'',
            CoverImageLocation:'',
            Description:'',
            Price:'',
            Type:'',
            SizeOption:'',
            ColourOption:'' ,
            image:"",
            url:'', 
            small:false,
            medium:false,
            large:false,
            speedy:false,
            color:false,
            kyn:false,
            count:10

        }

        this.handleChange=this.handleChange.bind(this)
        this.onChange=this.onChange.bind(this);
        this.handleUpload= this.handleUpload.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.Small=this.Small.bind(this);
        this.Medium=this.Medium.bind(this);
        this.Large=this.Large.bind(this);
        this.Speedy=this.Speedy.bind(this);
        this.KYN= this.KYN.bind(this);
        this.Color=this.Color.bind(this);
    }
    handleUpload=()=>{
        const {image}= this.state;
        const uploadTask =storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed',
        (snapshot)=>{
//progress function......
        },(error)=>{
            console.log(error)
            //error function
        },()=>{
            //complete function...
            storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                this.setState(url)
            })
        })
    }
    handleChange=e=>{
        
        if(e.target.files[0]){
            const {image}= e.target.files[0];
            this.setState(()=>({image}));
        }
    }
    //checkbox
    handleChecked () {
        this.setState({isChecked: !this.state.isChecked});
      }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const post={
            Name:this.state.Name,
            Description: this.state.Description,
            Price:this.state.Price,
            Type:this.state.Type,
            SizeOption:this.state.count,
            ColourOption:this.state.ColourOption,
            CoverImageLocation:this.state.FileUpload,
        }
        fetch('https://localhost:44311/api/Products',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(response=>response.json())
        .then(data=>console.log(data));        

    }
    Color(){
        if(this.state.color==false){
            this.setState({color:true});
            this.setState({ColourOption:1})
        }
        else{
            this.setState({color:false})
        }

    }
    Speedy(){
        if(this.state.speedy==false){
            this.setState({speedy:true});
            this.setState({Type:"Speedy"})
         
        }
        else{
            this.setState({speedy:false});
        }

    }
    KYN(){
        if(this.state.kyn==false){
            this.setState({kyn:true});
            this.setState({Type:"Know your nation"})
         
        }
        else{
            this.setState({nyk:false});
        }

    }
      Small(){
        if(this.state.small==false){
            this.setState({small:true});
            this.setState({count:1});
         
        }
        else{
            this.setState({small:false});
            
        }
      }

      Medium(){

        if(this.state.medium==false){
            this.state.medium=true;
            this.setState({count:2})
        }
        else{
            this.state.medium=false;
        }
      }
      Large(){
        if(this.state.large==false){
            this.setState({large:true});
            this.setState({count:3})

        }
        else{
            this.setState({large:false});
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
                    <div className="row marginTop20px ">
                            <h3 className="marginLeft20px"></h3>
                    </div>
                    <div>
                        <img src={this.state.url || "http://placehold.it/150x150" } alt="Uploaded images" height="150" width="150"></img>
                    </div>
                    <div className="row ">
                        <div className="col-12 marginTop20px">
                            <label >Cover Image</label>
                            <span>
                                <input name="file" type="file"  onChange={this.handleChage}/> 
                             </span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Name</label>
                            <span><input className="formInput" name="Name" type="text" onChange={this.onChange}  value={this.state.Name}/></span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Description</label>
                        </div>
                        <div className="col-12 marginTop10px">
                            <textarea className ="Textarea"  type="text" name ="Description"  onChange={this.onChange}  value={this.state.Description}/>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Type/Category</label>
                        </div>
                        <div className="col-12 marginTop10px">
                            <span className ="rad">
                                <input type="radio" name="Speedy" onClick={this.Speedy}  value={this.state.Speedy}/><label >Speedy</label>
                                <input type="radio" value="Know your nation" name="Speedy" onClick={this.KYN}/> Know your nation
                            </span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Price</label>
                            <span>
                                <input className="formInput" name="Price" type="Price" onChange={this.onChange}  value={this.state.Price}/>
                            </span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Variations</label>
                        </div>
                        <div className="col-12 marginTop10px">
                            <label >Size</label>
                        </div>
                        <div className="col-12 marginTop10px">
                            <div className='checkboxs'>
                            <input className="Small" onClick={this.Small}  type="checkbox"/>
                            <input className="Medium" onClick={this.Medium} type="checkbox"/>
                            <input className="Large" onClick={this.Large} type="checkbox"/>
                            </div>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Color</label>
                        </div>
                        <div className="col-12 marginTop10px">
                            <div className ="color">
                                <input  type="radio" id="small" onClick={this.Color}  name="colorRadio"  />
                                <input  type="radio"  Id="medium" name="colorRadio"  />
                                <input  type="radio" id="large"  name="colorRadio"/>
                            </div>
                        </div>
                        <div className="col-12 marginTop20px">
                            <span className="createButton" >

                                <button onClick ={this.onSubmit} type="button" class="btn btn-success">CREATE</button>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
