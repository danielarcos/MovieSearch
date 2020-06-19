import React, { useState, useEffect }  from 'react';
import { makeStyles, Container, Grid, TextField, Button, Typography } from '@material-ui/core';
import Movie from './MovieComponent';
import { getMovieByNameAndYear } from '../services/MovieServices';

const useStyles = makeStyles((theme) => ({
    searcher: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        marginTop: theme.spacing(3),
        width: '100%',
    },
    button: {
        margin: theme.spacing(3, 0, 2),
    },
  }));
  

const Main = () => {
    const classes = useStyles();
    const [name, setMovieName] = useState('');
    const [year, setMovieYear] = useState();
    const [result, setResult] = useState({});
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        setShowSearch(name.length >= 3);
    }, [name]);

    const getResult = () => {
        getMovieByNameAndYear(name, year).then(data => setResult(data));
    };

    return (
        <Container component="main" maxWidth="sm">
            <div className={classes.searcher}>
                <Typography component="h1" variant="h5">
                    Search for your Movie.
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField name="movieName" id="movieName" variant="outlined" required fullWidth
                                label="Movie Name" autoFocus onChange={(event) => setMovieName(event.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField name="yearName" id="yearName" variant="outlined" required fullWidth
                                label="Movie Year" onChange={(event) => setMovieYear(event.target.value)} />
                        </Grid>
                    </Grid>
                    {
                        showSearch ?
                            <Button type="button" variant="contained" color="primary" fullWidth 
                                className={classes.button} onClick={() => getResult()}>
                                Search
                        </Button> :
                            <></>
                    }
                </form>
                <Movie data={result} />
            </div>
        </Container> 
    );
};

export default Main; 