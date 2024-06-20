import './index.css'
const UserCard = ({image, fullname})=>{
    return (
        <div className='names'>
            <img src={image} alt={`${fullname}profile`}/>
            <h3>{fullname}</h3>
        </div>
    )
    
}
export default UserCard;