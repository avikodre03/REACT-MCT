import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Productdetails.css'
import { useSelector } from "react-redux";


export const Productdetails = () => {
    const { productsData } = useSelector((state) => state);
    const { id } = useParams();
    const [productdetails, setProductdetails] = useState({});
    useEffect(() => {
        setProductdetails(
            productsData.find((ele) => {
                return ele.id === +id;
            })
        );

    }, []);

   
    return (
        <>
            {productdetails && (
                <div className="productdetails">
                    <div className="productdetails_maincontainer">
                        <div className="topheading">

                            <h2>{productdetails.category} Category</h2>
                        </div>
                        <div className="lower_maincontainer">
                            <div className="image_container">
                                <img src={productdetails.image} alt="" />

                            </div>
                            <div className="details_container">
                                <div className="pname">
                                    <h3>Product Name</h3>
                                    <p>{productdetails.title}</p>
                                </div>
                                <div className="pname">
                                    <h3>Product Price</h3>
                                    <p>${productdetails.price}</p>
                                </div>
                                <div className="pname">
                                    <h3>Product Description</h3>
                                    <p>{productdetails.description}</p>
                                </div>
                                <div className="pname">
                                    <h3>Product Rating</h3>
                                    <p>{productdetails.rating && productdetails.rating.rate}</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            )}
        </>
    )
}