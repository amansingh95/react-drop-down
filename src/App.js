import React from "react";
import "./style.css";
import _ from 'lodash';

export default function App() {
  let streaming_profiles = [{color:"black"},{color:"red"},{color:"pink"}, {color:"yellow"}];
  profileOptions = () => {
    if (streaming_profiles) {
      if (streaming_profiles.length) {
        try { 
          let result = streaming_profiles.map((res) => {
            return {
              "type": res.color,
              "label": res.color,
              "value": res.color,
              "name": res.color
            }
          })
          const grouped = _.groupBy(result, (res) => res.type);
          const data = Object.keys(grouped).map((label) => ({
            label,
            options: grouped[label]
          }));
          console.log("profile data", data);
          return data;
        } catch (e) {
          options = oldOptions;
        }
      }
    }
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
