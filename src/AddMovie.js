import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    backgroundColor: `white`,
    
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class AddMovie extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

    constructor(props) {
        super(props);
        this.addNewMovie = this.addNewMovie.bind(this);
      }
  addNewMovie(e) {
    e.preventDefault();
    var movie = {
      title: this.title.value,
      year: this.year.value,
      description: this.description.value,
      poster: this.poster.value,
      ratingFilm:this.ratingFilm.value
    };
    this.props.addMovie(movie);
  }
  
  
 
  
  render() {

    const { classes } = this.props;

    return (
      <div className="movie-card">
         <Button className="open-modal" onClick={this.handleOpen}>+</Button>
         <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
         <div style={getModalStyle()} >
         <form className="movie-form" onSubmit={(e) => this.addNewMovie(e)}>
        <h2>Add a Movie</h2>
        <input ref={(input) => this.title = input} type="text" placeholder="Title"  name="title" /> 

        <input ref={(input) => this.year = input} type="text" placeholder="Year" />
        <input ref={(input) => this.poster = input} type="text" placeholder="Poster" />
        <textarea ref={(input) => this.description = input} placeholder="Description">
        </textarea>
        <input ref={(input) => this.ratingFilm = input} type="text" placeholder="Rating"  name="Rating" /> 
        <button type="submit" >Add Movie</button>
        
      </form>
           
          
        </div>
        </Modal>
      
      </div>
    );
  }





}

export default AddMovie;