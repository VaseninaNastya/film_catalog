import React from 'react';
import Card from './components/Card';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('src/components/Card', () => {
  describe('Card', () => {
    it("expected innerHTML in elements of DOM", () => {
      const mockingData = JSON.parse(`{"id" : "tt0371746", "title" : "Iron Man", "year" : "2008", "type" : "movie", "poster" : "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"}`)
      Enzyme.configure({ adapter: new Adapter() })
      const component =
        shallow(    
          
          
          
          <Card 
            id={mockingData.id}
            title={mockingData.title}
            year={mockingData.year}
            type={mockingData.type}
            poster = {mockingData.poster}
          />
        )
      expect(component.find("Link").prop('to')).toMatch(/\/film/);
      expect(component.find(".filmListCard").prop('id')).toMatch(`${mockingData.id}`);
      expect(component.find("h3").text()).toMatch(`${mockingData.title}`);
      expect(component.find("span").at(0).text()).toMatch(`year: ${mockingData.year}`);
      expect(component.find("span").at(1).text()).toMatch(`type: ${mockingData.type}`);
      expect(component.find(".filmListCard_img").prop('src')).toMatch(`${mockingData.poster}`);
    })
  })
})