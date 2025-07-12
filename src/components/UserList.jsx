import { useSelector } from "react-redux"


export default function UserList(){
    // 리덕스에서 값을 가져와서 화면에 보여주기
    const {items} = useSelector((state)=>{return state.userlist})

    return(
        <div>
            {
                items.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h3>{item.username}</h3>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}
