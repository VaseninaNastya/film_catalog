import React from 'react';
import { screen } from '@testing-library/react';
//import { render, unmountComponentAtNode } from "react-dom";
import  Card  from './components/Card';
import { act } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import { RootState} from './store'
import configureMockStore from 'redux-mock-store';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

let state = {
  cardProduct: {
    productsInCard: [1]
  }
};

const middlewares: any[] = [];
const mockStore = configureMockStore(middlewares);
const store = mockStore(() => state);
describe('src/components/Card', () => {
  describe('Card', () => {
    it("expected innerHTML in elements of DOM", () => {
      const mockingData = JSON.parse(`{"id" : "tt0371746", "title" : "Iron Man", "year" : "2008", "type" : "movie", "poster" : "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"}`)
      Enzyme.configure({ adapter: new Adapter() })
      const component = shallow(        
        <Provider store={store}>
      <Card 
        id={mockingData.id}
        title={mockingData.title}
        year={mockingData.year}
        type={mockingData.type}
        poster = {mockingData.poster}
      />
        </Provider>)
      const wrapper = component.find("h3")
      console.log("component", component)
      expect(wrapper.length).toBe(1)
    })
  })
})











/*
let state = {
  cardProduct: {
    productsInCard: [1]
  }
};
const middlewares: any[] = [];
const mockStore = configureMockStore(middlewares);
const store = mockStore(() => state);
let container: HTMLElement = document.createElement("div");
beforeEach(() => {
  document.body.appendChild(container);
});

afterEach(() => {
  if(typeof container !== null){
    unmountComponentAtNode(container);
  }
  container.remove();
});


describe('src/components/Card', () => {
  describe('Card', () => {
    it("expected innerHTML in elements of DOM", () => {
      const mockingData = JSON.parse(`{"id" : "tt0371746", "title" : "Iron Man", "year" : "2008", "type" : "movie", "poster" : "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"}`)
      act(() => {
        render(
          <Provider store={store}>
            <Card 
              id={mockingData.id}
              title={mockingData.title}
              year={mockingData.year}
              type={mockingData.type}
              poster = {mockingData.poster}
            />
          </Provider>, container
        );
      });
    })
  })
})


*/
