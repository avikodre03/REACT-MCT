import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './product.css'

const Product = () => {
  const [category, setcategoroy] = useState([])
  const [titleCategory, settitleCategory] = useState("electronics")
  const [productList, setproductList] = useState([])
  useEffect(() => {

    categories()
    details()
  }, [titleCategory])

  const categories = async () => {
    const Responce = await fetch("https://fakestoreapi.com/products/categories")

    const data = await Responce.json()

    setcategoroy(data)

  }

  const details = async () => {
    const Responce = await fetch(`https://fakestoreapi.com/products/category/${titleCategory}`)
    // console.log(Responce)
    const data = await Responce.json()
    console.log(data)
    setproductList(data)

  }

  return (
    <>
<div className="mainProductContainer">

      <div className='Product'>
        <div className="productComponents">
          {category.map((ele) => {

            // return <Link
            //   to={ele} onClick={() => {
            //     settitleCategory(ele)
            //   }}
            // >
            //   <p>{ele && ele}</p>
            // </Link>
            return <Link to={ele} onClick={() => {
                settitleCategory(ele)
              
              }}>  <p>{ele && ele}</p></Link>
            
          })}
        </div>
        <div className="productTitles">
          <ul>
            {productList.map((ele) => {
              return  <Link to={`/productdetails/${ele.id}`}><li>{ele && ele.title}</li></Link>
            })}
          </ul>
        </div>
      </div>
</div>
    </>
  )
}

export default Product

// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import './product.css'

// export const Product = () => {
//  const{ category} =useParams()
// const [productcategory, setProductcategory] = useState([])
// // const [catdetailes, setCatdetailes] = useState([])
// const [categories, setCategories] = useState("electronics")
// const [productlist, setProductlist] = useState([])

//     useEffect(() => { 
//         catgories()
//         details()

//     }, [categories])

//     const catgories = async()=>{
//         const res= await fetch("https://fakestoreapi.com/products/categories")
//         // console.log(res)
//         const data= await res.json()
//         // console.log(data)
//         setProductcategory(data)

//     }

//     const details = async()=>{
//         const res= await fetch(`https://fakestoreapi.com/products/category/${categories}`)
//         // console.log(res)
//         const data= await res.json()
//         console.log(data)
//         setProductlist(data)

//     }
    
//   return (
//     <div className='product'>
//         <div className="product-sidebar">
//             {
//                 productcategory.map((ele)=>{
//                     return <div className='button-category'>
//                         <Link to={ele} onClick={()=>{
//                             setCategories(ele)
//                             console.log(categories)
//                         }}>{ele &&  ele}</Link>
//                     </div>
//                 })
//             }
            

//         </div>

//         <div className='product_maincontainer'>
//             <ul>
//             {productlist.map((ele)=>{
//                 console.log(ele)

//                 return <Link to={`/productdetails/${ele.id}`}><li>{ele && ele.title}</li></Link>
                
//             })}
//             </ul>

        
//         </div>
//     </div>
//   )
// }

// export default Product