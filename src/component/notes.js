import React, { component } from "react";

class notes extends component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.addNote = this.addNote.bind(this);
}

addNote(event) {
    if (this.theTitle.value !== "") {
      var newItem = {
        title: this.theTitle.value,
        note: this.theNote.value
      };
    }

    this.setstate(prevstate => {
      return {
        items: prevstate.items.concat(newItem)
      };
    });

    this.theNote.value = "";
    this.theTitle.value = "";

    event.preventDefault();
}

render() {
    return (
      <div>
        <header>
          <h1>Notes</h1>
        </header>
        <div classname="main-content">
            <ul>
            {this.state.items.map( (val) => 
                <li>
                {val.title} - {val.note}
                </li>
            )}
            </ul>
        </div>
        <footer>
          <form onSubmit={this.addNote}>
            <input
              type="text"
              placeholder="Enter note title here"
              ref={title => (this.theTitle = title)}
            />
            <textarea
              placeholder="Enter note here"
              ref={note => (this.theNote = note)}
            />
            <button type="submit">Add Note</button>
          </form>
        </footer>
      </div>
    );
  }
}

export default notes;
