import { useGetAllProductQuery } from "../RTK/UserSlice"


const AllProduct = () =>{


    const {data} = useGetAllProductQuery()
    return(
<>

{
    data?.products.map(item =>(
        <div>
           <h1> {item.price}</h1>
        </div>
    ))
}

<h1>Hello world </h1>
</>
    )
}


export default AllProduct