import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Dashboard}>
        <Route path="notes/:id/edit" component={NoteEdit} />
      </Route>
      <Route path="notes/:id" component={Note} />
      <Route path="stared" component={Stared} />
    </Route>
  </Router>,
  // <div>Hello React Spa</div>,
  document.getElementById('app')
);
