import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
const Inputtype = () => {
  const [state, setState] = useState({
    value5: {
      min: 3,
      max: 7,
    },
  });
 
  return (
    <div>
      <div className="form mx-auto pt-16 px-6">
        {/* InputRange 1 */}

        <InputRange
          draggableTrack
          maxValue={20}
          minValue={0}
          onChange={(value) => setState({ ...state, value5: value })}
          onChangeComplete={(value) => console.log(value)}
          value={state.value5}
         
        />
      </div>
    </div>
  );
};

export default Inputtype;
