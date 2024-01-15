import { Grid, Form, Input } from "semantic-ui-react";
import { useState } from "react";



const Search =({setSearchedRes}) => {

    const[value,setvalue]=useState("");

    const onFormSubmit=()=>{
        setSearchedRes(value);
    }
    return(
        <>
         <Grid columns={2} textAlign="center" className="search-box">
            <Grid.Column>
                <h2 className="search-heading">
                    Search <span style={{color:"blueviolet"}}>Recipes</span>
                </h2>
                <Form onSubmit={onFormSubmit}>
                    <Input
                       placeholder="xvy,iyg,tyec"
                       action={{icon: 'search', color: 'violet' }}

                       onChange={(e)=> setvalue(e.target.value)}
                       value={value}
                    />
                </Form>
            </Grid.Column>
         </Grid>
        </>
    )
}

export default Search;