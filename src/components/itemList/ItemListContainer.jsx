import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"; 
import SyncLoader from "react-spinners/SyncLoader";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig"

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};



const ItemListContainer = () => {
  const { categoryName } = useParams()


const [ items, setItems ] = useState([])

const [ isLoading, setIsLoading ] = useState(false)


useEffect(()=>{ 

  setIsLoading(true)

  const itemCollection = collection(db, "Products")

  if( categoryName ){
    const q = query( itemCollection, where( "category" , "==" , categoryName ) )
    getDocs(q)
    .then( (res) => {
      const products = res.docs.map( product => { 
        return {
          
          ...product.data(),
          id: product.id
        }
      } )

      setItems(products)
    })
    .catch( (err) => console.log(err))

  }else{

    getDocs(itemCollection)
    .then( (res) => {
      const products = res.docs.map( product => { 
        return {
          
          ...product.data(),
          id: product.id
        }
      } )

      setItems(products)
    })
    .catch( (err) => console.log(err))

  }


  setTimeout(() => {
    setIsLoading(false)
  }, 1500);

}, [ categoryName] )


return (
  <div>
    {
      isLoading ?  <SyncLoader
      color={"black"}
      cssOverride={override}
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> :  <ItemList items={items}/>
    }

   
  </div>
  )
}

export default ItemListContainer