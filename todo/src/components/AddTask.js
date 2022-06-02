import React from 'react';

class AddTask extends React.Component {
    render(){
             
      return(
        <section>
        <h1 className="m-3">Nouvelle etude </h1>
        <div className="card mx-3">
            <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <label form="taskName">Nom de l'etude</label>
                    <input type="text" className="form-control" name="taskName" id="taskName" required ref={input => this.newTask = input} />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    </section>
        )
    }
    
      
    }

export default AddTask