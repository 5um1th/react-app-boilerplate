var hCard = require('./../app/hCard.js');
var App = require('./../app/App.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var hcard = new hCard();

describe("App", function() {

  it("should render text: Hello world!", function() {
    var app = TestUtils.renderIntoDocument(<App hcard={new hCard()} />);
    expect(React.findDOMNode(app).textContent.trim()).toEqual('');
  });

});
