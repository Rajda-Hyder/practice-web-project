async function UserPage(){
const url ="https://fakerapi.it/api/v1/persons?_locale=US&_quantity=1"
const fetchdata= await fetch(url,{cache:"no-store"})
const res=await fetchdata.json()
return (<div>    <h1>{res.data[0].firstname}</h1>
    <h2>{res.data[0].lastname}</h2>
    <h3>{res.data[0].email}</h3>
    <h3>{res.data[0].phone}</h3>
    <h3>{res.data[0].birthday}</h3>
    <h3>{res.data[0].gender}</h3>
    <h3>{res.data[0].address.street}</h3>
    <h3>{res.data[0].address.city}</h3>

    </div>

)
}
export default UserPage