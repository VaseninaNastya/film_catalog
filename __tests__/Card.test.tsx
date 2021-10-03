import React from 'react';
import renderer from 'react-test-renderer'
import Card from '../src/components/Card'
import configureStore from 'redux-mock-store'
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Enzyme, { render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';




describe('Card',()=>{
  it('renders correctly', () => {
    const mockingData = JSON.parse(`{"id" : "tt0371746", "title" : "Iron Man", "year" : "2008", "type" : "movie", "poster" : "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"}`)
  const mockStore = configureStore()
  const store = mockStore()
  Enzyme.configure({ adapter: new Adapter() })
    const tree = render(
        <Provider store={store}>
          <Router>
            <Card 
              id={mockingData.id}
              title={mockingData.title}
              year={mockingData.year}
              type={mockingData.type}
              poster = {mockingData.poster}
            />
          </Router>
        </Provider>
      )
    expect(tree).toMatchSnapshot();
  });
});
