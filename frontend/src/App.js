import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

const getComments = async () => {
  const cost = 0
  const craft = "復仇者"
  const rare = "白銀"
  const data = await instance.get("/findCard", {
    params: { cost: cost, craft: craft, rare: rare },
  });
  console.log(data);
};

// const getComments = async () => {
//   // const cost = 0
//   // const craft = "復仇者"
//   // const rare = "白銀"
//   const data = await instance.get("/initCard", {
//     // params: { cost: cost, craft: craft, rare: rare },
//   });
//   console.log(data);
// };

function App() {
  getComments();
}

export default App;
