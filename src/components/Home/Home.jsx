import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {

    const authInfo = useContext(AuthContext)


    return (
        <div>
            <h2 className="text-3xl  text-center mt-5">This is Home for : </h2>
        </div>
    );
};

export default Home;