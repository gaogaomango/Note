import React from 'react'

export default class NoteList extends React.Component {
  handleClickItem(id) {
    this.props.onSelect(id);
  }

  renderItem(note){
    const className = ['NoteList-item'];

    // 選択中の要素に'is-selected' classを付与する
    if(this.props.selectedNoteId === note.id) {
      classNames.push
    }

    return <li
      className={classNames.join(' ')}
      key={note.id}>
      <Link to={`/notes/${note.id}/edit`}>
        <span className="NoteList-title">{note.title}</span>
        <span className="NoteList-updated">{note.updated}</span>
      </Link>
    </li>;
  }

  // notesを親から受け取ってリストを返す
  render() {
    const items = this.props.notes.map(note: {return this.renderItem(note);
    });

    return <div className="NoteList">
      <ul>{items}</ul>
    </div>;
  }
}
