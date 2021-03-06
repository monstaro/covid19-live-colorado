import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import StayingProtected from "./StayingProtected";

describe("Welcome", () => {
  it("should render", () => {
    const store = createStore(rootReducer);
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Router>
          <StayingProtected />
        </Router>
      </Provider>
    );
    expect(getByTestId("staying-protected-container")).toBeInTheDocument();
    expect(getByText("CPSC COVID-19 Home Safty Page")).toBeInTheDocument();
    expect(
      getByText("Pandemic Resources & Information by API Energy")
    ).toBeInTheDocument();
  });
});
