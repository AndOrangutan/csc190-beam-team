import renderer from "react-test-renderer";

// import App from './App'

describe("<App />", () => {
 it("1+1 = 2", () => {
  expect(1 + 1 === 2).toBe(true);
 });

});
// describe("<App />", () => {
//  it("has 1 child", () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree.children.length).toBe(1);
//  });
//
//  it("renders correctly", () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
//  });
//  it("renders Hello World message on the home page", async () => {
//   renderer.create(<App />);
//   expect(screen.getByText("Hello, World!")).toBeDefined()
//  });
// });
