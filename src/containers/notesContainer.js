import React, { Component } from 'react';
import {connect} from 'react-redux';

import NotesForm from "../components/notesForm";
import Notes from "../components/notes";

import {fetchNotes} from "../actions/fetchNotes";

//receives prop: pet
class NotesContainer extends Component {

    componentDidMount() {
        this.props.fetchNotes(this.props.pet.id)
    }

    render() {
        return (
            <div>
                Notes container
                <NotesForm pet={this.props.pet}/>
                <Notes notes={this.props.pet && this.props.notes}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps, {fetchNotes})(NotesContainer);