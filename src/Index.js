import React from 'react';
import RootNavigation from "./components/RootNavigation"
import {Provider} from "react-redux";
import store from "./store/configureStore"
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    );
  }
}