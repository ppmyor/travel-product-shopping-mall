import React, { useState } from "react";
import { Collapse, Radio } from "antd";

const { Panel } = Collapse;

const RadioBox = (props) => {
  const [Value, setValue] = useState(0);

  const renderRadioBoxLists = () =>
    props.list &&
    props.list.map((value) => (
      <Radio key={value._id} value={value._id}>
        {value.name}
      </Radio>
    ));

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleFilters(event.target.value);
  };

  return (
    <Collapse defaultActiveKey={["0"]}>
      <Panel header="Price" key="1">
        <Radio.Group onChange={handleChange} value={Value}>
          {renderRadioBoxLists()}
        </Radio.Group>
      </Panel>
    </Collapse>
  );
};

export default RadioBox;
