export default async function Subjects ({params}:{params:{Subjects:string}}){
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.Subjects}`)
    const res = await fetchData.json()
    console.log(res)
  
 
    return (
        <div>
          <h3 className="text-green-600 underline ml-4">SUBJECT DETAIL</h3>
          <p className="ml-4">{res.id}</p>
          <p className="ml-4">{res.title}</p>
          <p className="ml-4">{res.body}</p>

        </div>
    );
}