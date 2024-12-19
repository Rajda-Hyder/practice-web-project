const Card = ({name,rollno}:{name:string,rollno:number}) => {
    return (
        <div>
            <h2>{`Hello ${name}, your Roll No is ${rollno}`}</h2>
        </div>
    )
}
export default Card