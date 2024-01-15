
// import { Container } from "react-dom";
import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList =({recipes,searchedRes}) => {
    return(
        
         <Container>
           <Header
             size="huge"
             content={`RECIPE LIST FOR ${searchedRes}`}
             textAlign="center"
           />

           <Grid columns={4} doubling>
            {
                recipes && recipes.map((recipe) => (
                    <Grid.Column>
                        <RecipeListItem recipe={recipe}/>
                    </Grid.Column>
                ))
            }
           </Grid>
         </Container>
       
    )
}

export default RecipeList;