import React from 'react';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';

const Movie = ({ data }) => {
    if(data.Title)
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    {
                        data.Poster !== 'N/A' ?
                            <img src={data.Poster} alt={data.Title}/> :
                            data.Poster
                    }
                </Grid>

                <Grid item xs={12} sm={12}>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemText primary={data.Title}/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemText primary="Director:" secondary={data.Director} />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemText primary="Actors:" secondary={data.Actors} />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemText primary="Plot:" secondary={data.Plot} />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemText primary="Year:" secondary={data.Year} />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemText primary="Rated:" secondary={data.Rated} />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        );
    else
        return '';
};


export default (Movie); 