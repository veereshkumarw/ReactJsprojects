import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import { getRecipe } from "../services/api";
import { Link } from "react-router-dom";


const RecipeDetails = () => {

    const [recipe, setRecipe] = useState({});

    const { recipeId } = useParams();

    useEffect(() => {
        const getData = async () => {
            let res = await getRecipe(recipeId);
            if (res && res.recipe) {
                setRecipe(res.recipe);
            }

        }
        getData();
    }, [])
    return (
        Object.keys(recipe).length > 0 ?
            <Grid container stackable columns={2} className="detailspagecontent">
                <Grid.Column>
                    <Button className="btn"
                        as={Link}
                        to={"/recipes"}
                        content="Back to Recipe List"
                        color="violet"
                        style={{ marginBottom: 40 }}
                    />
                    <Image src={recipe.image_url} />
                </Grid.Column>

                <Grid.Column>
                    <Header size="medium">{recipe.title}</Header>
                    <p>Provided By: {recipe.publisher}</p>

                    <Button className="btn"
                    as="a"
                    href={recipe.publisher_url}
                    target="_blank"
                    content="Publisher WebPage"
                    color="violet"
                // style={{marginBottom:40}}
                   />

                   <Button className="btn"
                    as="a"
                    href={recipe.source_url}
                    target="_blank"
                    content="Source url"
                    color="violet"
                // style={{marginBottom:40}}
                />

                <Header size="large" content="Ingredients" />
                <Segment.Group>
                    {
                       recipe && recipe.ingredients.map(data => (
                          <Segment>
                            <h4>{data}</h4>
                          </Segment>
                       ))
                    }
                </Segment.Group>

                </Grid.Column>

                

              

            </Grid> : null
    )
}

export default RecipeDetails;