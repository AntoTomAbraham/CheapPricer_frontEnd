import React from 'react'
import { useState } from 'react'
import './admin.css'
import Select from 'react-select';

//import Axios from 'axios'

//const url=`${process.env.REACT_APP_BACKEND}/admin/create`



function Admin() {
  const [Data, setData] = useState({
    proId:"",
    proUrl:"",
    category:"",
    subCategory:"",
    imgLink:"",
    brand:"",
    desc:"",
    amazon:"",
    flipkart:"",
    croma:"",
    reliance:"",
    dell:"",
    amazon_aff:"",
    flipkart_aff:"",
    reliance_aff:"",
    dell_aff:"",
    croma_aff:"",
  })
  
  const handleInputs=(e)=>{
   
    const newData={...Data}
    newData[e.target.id]=e.target.value;
    setData(newData)
    console.log(newData)
  }
  const submit=async(e)=>{
    e.preventDefault();
    console.log("Submit Clicked")
    alert("Loading")
    const res=await fetch('/admin/create',{
    method:"POST",
    headers:{
      mode: "no cors",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(Data)
    
  })
  const data=await res.json();
  if(!data){
    console.log("no data")
    alert("Error")
  }else{
    console.log("data is there")
    alert("Successful")
  }
}
  return (
    <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>Add products as fast as possible</p>
                        <input type="submit" name="" value="🚀🚀🚀🚀"/><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Hai</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Dude</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Add your Product 🚀🚀</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Product Id *" 
                                            value={Data.proId}
                                            id="proId"
                                            onChange={(e)=>{handleInputs(e)}} 
                                            />
                                        </div>
                                        <br />
                                        <input type="text" class="form-control" placeholder="Product Url *" 
                                            value={Data.proUrl}
                                            id="proUrl"
                                            onChange={(e)=>{handleInputs(e)}} 
                                            />
                                        <br />
                                        <input type="text" class="form-control" placeholder="Image Link *" 
                                            value={Data.imgLink}
                                            id="imgLink"
                                            onChange={(e)=>{handleInputs(e)}} 
                                            />
                                         <br />
                                         <h6>Category</h6>
                                         <select class="form-select" aria-label="Default select example" value={Data.category} id="category" onChange={(e)=>{handleInputs(e)}} >
                                          <option value="">Select Category</option>
                                           <option value="Books">Electronics</option>
                                           <option value="Mobiles and Computers">Mobiles and Computers</option>
                                           <option value="sports">Sports</option>
                                           <option value="Bags">Bags</option>
                                           <option value="Toys">Toys</option>
                                           <option value="Video games">Video Games</option>
                                           <option value="Beauty">Beauty</option>
                                           <option value="Health">Health</option>
                                           <option value="LifeStyle">LifeStyle</option>
                                         </select>
                                         <br />
                                         <h6>Sub Category</h6>
                                         <select class="form-select" aria-label="Default select example" value={Data.subCategory} id="subCategory" onChange={(e)=>{handleInputs(e)}} >
                                          <option value="">Select Sub-Category</option>
                                           <option value="Mobile Phones">Mobile Phones</option>
                                           <option value="Laptops">Laptops</option>
                                           <option value="Mouse">Mouse</option>
                                           <option value="Keyboard">Keyboard</option>
                                           <option value="HeadPhone">HeadPhone</option>
                                           <option value="Speaker">Speaker</option>
                                           <option value="BackBag">BackBag</option>
                                           <option value="Trolley Bag">Trolley Bag</option>
                                           <option value="SideBag">SideBag</option>
                                           <option value="Football">Football</option>
                                           <option value="CricketBall">Cricket Ball</option>
                                           <option value="CricketBat">Cricket Bat</option>
                                           <option value="Shoes">Shoes</option>
                                           <option value="Chappals">Chappals</option>
                                           <option value="Refridgerator">Refridgerator</option>
                                           <option value="Air Conditioner">Air Conditioner</option>
                                           <option value="Oven">Oven</option>
                                         </select>
                                         <br />
                                    </div>
                                    <div class="col-md-6">
                                        {/* <div class="form-group">
                                            <input type="text" class="form-control" id="brand" placeholder="Brand *" value={Data.brand}  onChange={(e)=>{handleInputs(e)}} />
                                        </div> */}
                                        <br />
                                        <h6>Brand</h6>
                                         <select class="form-select" aria-label="Default select example" value={Data.brand} id="brand" onChange={(e)=>{handleInputs(e)}} >
                                         <option value="">Select Brand</option>
                                           <option value="Nokia">Nokia</option>
                                           <option value="Apple">Apple</option>
                                           <option value="Redmi">Redmi</option>
                                           <option value="Samsung">Samsung</option>
                                           <option value="Oppo">Oppo</option>
                                           <option value="Acer">Acer</option>
                                           <option value="Asus">Asus</option>
                                           <option value="Xiaomi">Xiaomi</option>
                                           <option value="Honor">Honor</option>
                                           <option value="HP">HP</option>
                                           <option value="Dell">Dell</option>
                                           <option value="Puma">Puma</option>
                                           <option value="Adidas">Adidas</option>
                                           <option value="F gear">F gear</option>
                                           <option value="Skybag">Skybag</option>
                                           <option value="American Express">American Express</option>
                                           <option value="Fila">Fila</option>
                                           <option value="Zebronics">Zebronics</option>
                                           <option value="JBL">JBL</option>
                                         </select>
                                         <br />
                                        <div class="form-group">
                                            <input type="text" minlength="10" id="desc" name="Description" class="form-control" placeholder="Description" value={Data.desc} onChange={(e)=>{handleInputs(e)}} />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text"  id="amazon" name="amazon" class="form-control" placeholder="Amazon" value={Data.amazon} onChange={(e)=>{handleInputs(e)}} />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text"  id="flipkart" name="flipkart" class="form-control" placeholder="Flipkart" value={Data.flipkart} onChange={(e)=>{handleInputs(e)}} />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text" id="croma" name="croma" class="form-control" placeholder="croma" value={Data.croma} onChange={(e)=>{handleInputs(e)}} />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text"  id="reliance" name="reliance" class="form-control" placeholder="reliance" value={Data.reliance} onChange={(e)=>{handleInputs(e)}} />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text"  id="dell" name="dell" class="form-control" placeholder="Dell" value={Data.dell} onChange={(e)=>{handleInputs(e)}} />
                                        </div>
                                        <h3>Affiliate Links</h3>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Amazon Affiliate *" 
                                            value={Data.amazon_aff}
                                            id="amazon_aff"
                                            onChange={(e)=>{handleInputs(e)}} 
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Flipkart Affiliate *" 
                                            value={Data.flipkart_aff}
                                            id="flipkart_aff"
                                            onChange={(e)=>{handleInputs(e)}} 
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Croma Affiliate *" 
                                            value={Data.croma_aff}
                                            id="croma_aff"
                                            onChange={(e)=>{handleInputs(e)}} 
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="reliance Affiliate *" 
                                            value={Data.reliance_aff}
                                            id="reliance_aff"
                                            onChange={(e)=>{handleInputs(e)}} 
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="dell Affiliate *" 
                                            value={Data.dell_aff}
                                            id="dell_aff"
                                            onChange={(e)=>{handleInputs(e)}} 
                                            />
                                        </div>
                                        <br />
                                        <input type="submit" class="btnRegister" onClick={(e)=>submit(e)}  value="Submit"/>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                              
                                <div class="row register-form">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
  )
}

export default Admin
