import { useContext } from "react";
import { MovieContext } from "../../Contexts/MovieContext";
import Banner from "../../Components/Banner";
import Filmes from "../../Components/Filmes";



const Home = () => {
    const { movies } = useContext(MovieContext);


    return ( 
        <>
        <Banner />
        <Filmes />
        </>
     );
}
 
export default Home;