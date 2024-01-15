import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";


const RecipeListItem = ({recipe})=>{
    return(
      
            <Card>
               <img src={recipe.image_url} alt="img" style={{height: 150}}/>
               <Card.Content>
                  <Card.Header content={recipe.title}/>
                  <Card.Description>
                    <h3>{recipe.publisher}</h3>
                  </Card.Description>
               </Card.Content>
               <Card.Content>
                  <Button
                    as={Link} 
                    to={recipe.recipe_id}
                    content="Details"
                    color="violet"
                    size="tiny"
                  />
                  <Button
                    href={recipe.source_url } 
                    target="_blank"
                    content="Recipe"
                    color="red"
                    size="tiny"
                  />
               </Card.Content>
            </Card>
       
    )
}

export default RecipeListItem;