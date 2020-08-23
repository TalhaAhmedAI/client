import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamList from "./streams/streamList";
import StreamCreate from "./streams/streamCreate";
import StreamDelete from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamShow from "./streams/streamShow";
import Header from "./header";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show" component={StreamShow} />
      </BrowserRouter>
    </div>
  );
}

export default App;
