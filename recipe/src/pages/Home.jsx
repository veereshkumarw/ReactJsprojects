import Header from '../components/common/Header';
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        
        <Header title='Our Recipes' bgClass="bg-image" >
            
            <Button as={Link} to='/recipes' class="ui inverted button">Search Recipes
            </Button>
                
        </Header>
      
    );
}

export default Home;