
export default async function accountDetail({ params }: { params: { accountDetail: string } }) {
  const fetchdata = await fetch(`https://jsonplaceholder.typicode.com/users/${params.accountDetail}`)
  const res = await fetchdata.json()
  console.log(res)

  return (
    <div>
      <ul>
        <h2 className="text-center">ACCOUNT DETAIL</h2>
        <p><strong className="underline">ID</strong>:{res.id}</p>
        <p><strong className="underline">NAME</strong>:  {res.name}</p>
        <p><strong className="underline">USERNAME </strong>:   {res.username}</p>
        <p className=" underline"><strong>ADDRESS:</strong></p>
        <p>STREET: {res.address.street}</p>
        <p>SUITE: {res.address.suite}</p>
        <p>CITY: {res.address.city}</p>
        <p>ZIPCODE: {res.address.zipcode}</p>
        <p><strong className="underline">EMAIL</strong>: {res.email}</p>
        <p><strong className="underline">PHONE NO</strong>: {res.phone}</p>
        <p><strong className="underline">WEBSITE</strong>: {res.website}</p>
      </ul>
    </div>
  )
}
