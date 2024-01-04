import { redirectToAuthCodeFlow } from "../../auth";

interface Iprobs {
    profile?: string;
}
const Nav:React.FC<Iprobs> = ({profile}) => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const handleClick = async () => {
        await redirectToAuthCodeFlow(clientId)
    }
    return (
        <>
            <h1>Kha-i</h1>
            {!profile ? (
                <button onClick={handleClick}>Login</button>
            ): (
                <img src={profile}></img>
            )}
            
        </>
        
    )

}

export default Nav