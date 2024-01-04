import { redirectToAuthCodeFlow } from "../../auth";
import { Navbar, H1, Button, Profile } from "./style";

interface Iprobs {
    profile?: string | null;
}
const Nav:React.FC<Iprobs> = ({profile}) => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const handleClick = async () => {
        await redirectToAuthCodeFlow(clientId)
    }
    return (
        <>
            <Navbar>
            <H1>Kha-i</H1>
            {!profile ? (
                <Button onClick={handleClick}>Login</Button>
            ): (
                        <Profile
                            profile={profile}
                        />
            )}
            </Navbar>
        </>
        
    )

}

export default Nav