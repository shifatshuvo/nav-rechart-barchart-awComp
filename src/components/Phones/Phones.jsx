import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Audio, Bars } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('https://raw.githubusercontent.com/shifatshuvo/json-data/main/phones.json')
    // .then(res => res.json())
    // .then(data => setPhones(data));

    axios
      .get(
        "https://raw.githubusercontent.com/shifatshuvo/json-data/main/phones.json"
      )
      .then((data) => setPhones(data.data));
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && (
        <div>
          {" "}
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <h1 className="text-3xl">{phones.length}</h1>

      <BarChart width={600} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey={"name"} />
        <YAxis dataKey="" />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Phones;
