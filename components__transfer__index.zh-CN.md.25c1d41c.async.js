"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5725],{997165:function(h,s,t){t.r(s);var m=t(502143),p=t(968521),g=t(720719),_=t(28840),c=t(759907),a=t(828089),x=t(825673),j=t(902068),y=t(574399),f=t(863942),v=t(316073),b=t(24628),K=t(719260),k=t(956140),o=t(127179),l=t(905388),S=t(245583),T=t(606965),D=t(268696),C=t(587302),r=t(424128),E=t(249706),w=t(795127),P=t(116846),M=t(720538),A=t(212039),O=t(73024),I=t(553913),i=t(606641),U=t(667294),e=t(785893);function d(){var u=(0,i.eL)(),n=u.texts;return(0,e.jsx)(i.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[1].value}),(0,e.jsx)("li",{children:n[2].value})]}),(0,e.jsx)("p",{children:n[3].value}),(0,e.jsxs)("p",{children:[n[4].value,(0,e.jsx)("code",{children:n[5].value}),n[6].value,(0,e.jsx)("code",{children:n[7].value}),n[8].value]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[9].value})}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(l.Z,{items:[{demo:{id:"transfer-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/transfer/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Transfer } from 'antd';
const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
}));
const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);
const App = () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };
  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };
  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      onScroll={onScroll}
      render={(item) => item.title}
    />
  );
};
export default App;
`,description:"<p>\u6700\u57FA\u672C\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u4E86 <code>dataSource</code>\u3001<code>targetKeys</code>\u3001\u6BCF\u884C\u7684\u6E32\u67D3\u51FD\u6570 <code>render</code> \u4EE5\u53CA\u56DE\u8C03\u51FD\u6570 <code>onChange</code> <code>onSelectChange</code> <code>onScroll</code> \u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"transfer-demo-oneway"},previewerProps:{title:"\u5355\u5411\u6837\u5F0F",filename:"components/transfer/demo/oneWay.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Switch, Transfer } from 'antd';
const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
  disabled: i % 3 < 1,
}));
const oriTargetKeys = mockData.filter((item) => Number(item.key) % 3 > 1).map((item) => item.key);
const App = () => {
  const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const handleChange = (newTargetKeys, direction, moveKeys) => {
    setTargetKeys(newTargetKeys);
    console.log('targetKeys: ', newTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };
  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  };
  const handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };
  const handleDisable = (checked) => {
    setDisabled(checked);
  };
  return (
    <>
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        onScroll={handleScroll}
        render={(item) => item.title}
        disabled={disabled}
        oneWay
        style={{
          marginBottom: 16,
        }}
      />
      <Switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        checked={disabled}
        onChange={handleDisable}
      />
    </>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7 <code>oneWay</code> \u5C06 Transfer \u8F6C\u4E3A\u5355\u5411\u6837\u5F0F\u3002</p>"}},{demo:{id:"transfer-demo-search"},previewerProps:{title:"\u5E26\u641C\u7D22\u6846",filename:"components/transfer/demo/search.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { Transfer } from 'antd';
const App = () => {
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1}\`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };
  useEffect(() => {
    getMock();
  }, []);
  const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;
  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };
  const handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };
  return (
    <Transfer
      dataSource={mockData}
      showSearch
      filterOption={filterOption}
      targetKeys={targetKeys}
      onChange={handleChange}
      onSearch={handleSearch}
      render={(item) => item.title}
    />
  );
};
export default App;
`,description:"<p>\u5E26\u641C\u7D22\u6846\u7684\u7A7F\u68AD\u6846\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u641C\u7D22\u51FD\u6570\u3002</p>"}},{demo:{id:"transfer-demo-advanced"},previewerProps:{title:"\u9AD8\u7EA7\u7528\u6CD5",filename:"components/transfer/demo/advanced.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { Button, Transfer } from 'antd';
const App = () => {
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1}\`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };
  useEffect(() => {
    getMock();
  }, []);
  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };
  const renderFooter = (_, { direction }) => {
    if (direction === 'left') {
      return (
        <Button
          size="small"
          style={{
            float: 'left',
            margin: 5,
          }}
          onClick={getMock}
        >
          Left button reload
        </Button>
      );
    }
    return (
      <Button
        size="small"
        style={{
          float: 'right',
          margin: 5,
        }}
        onClick={getMock}
      >
        Right button reload
      </Button>
    );
  };
  return (
    <Transfer
      dataSource={mockData}
      showSearch
      listStyle={{
        width: 250,
        height: 300,
      }}
      operations={['to right', 'to left']}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={(item) => \`\${item.title}-\${item.description}\`}
      footer={renderFooter}
    />
  );
};
export default App;
`,description:"<p>\u7A7F\u68AD\u6846\u9AD8\u7EA7\u7528\u6CD5\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u6587\u6848\uFF0C\u53EF\u5B9A\u5236\u5BBD\u9AD8\uFF0C\u53EF\u5BF9\u5E95\u90E8\u8FDB\u884C\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002</p>"}},{demo:{id:"transfer-demo-custom-item"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u884C\u6570\u636E",filename:"components/transfer/demo/custom-item.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { Transfer } from 'antd';
const App = () => {
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1}\`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };
  useEffect(() => {
    getMock();
  }, []);
  const handleChange = (newTargetKeys, direction, moveKeys) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };
  const renderItem = (item) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );
    return {
      label: customLabel,
      // for displayed item
      value: item.title, // for title and filter matching
    };
  };

  return (
    <Transfer
      dataSource={mockData}
      listStyle={{
        width: 300,
        height: 300,
      }}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={renderItem}
    />
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u6E32\u67D3\u6BCF\u4E00\u4E2A Transfer Item\uFF0C\u53EF\u7528\u4E8E\u6E32\u67D3\u590D\u6742\u6570\u636E\u3002</p>"}},{demo:{id:"transfer-demo-large-data"},previewerProps:{title:"\u5206\u9875",filename:"components/transfer/demo/large-data.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { Switch, Transfer } from 'antd';
const App = () => {
  const [oneWay, setOneWay] = useState(false);
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  useEffect(() => {
    const newTargetKeys = [];
    const newMockData = [];
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1}\`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        newTargetKeys.push(data.key);
      }
      newMockData.push(data);
    }
    setTargetKeys(newTargetKeys);
    setMockData(newMockData);
  }, []);
  const onChange = (newTargetKeys, direction, moveKeys) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };
  return (
    <>
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={onChange}
        render={(item) => item.title}
        oneWay={oneWay}
        pagination
      />
      <br />
      <Switch
        unCheckedChildren="one way"
        checkedChildren="one way"
        checked={oneWay}
        onChange={setOneWay}
      />
    </>
  );
};
export default App;
`,description:"<p>\u5927\u6570\u636E\u4E0B\u4F7F\u7528\u5206\u9875\u3002</p>"}},{demo:{id:"transfer-demo-table-transfer"},previewerProps:{title:"\u8868\u683C\u7A7F\u68AD\u6846",filename:"components/transfer/demo/table-transfer.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import difference from 'lodash/difference';
import { Space, Switch, Table, Tag, Transfer } from 'antd';
// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
  <Transfer {...restProps}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled,
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;
      const rowSelection = {
        getCheckboxProps: (item) => ({
          disabled: listDisabled || item.disabled,
        }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter((item) => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, listSelectedKeys)
            : difference(listSelectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: listSelectedKeys,
      };
      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{
            pointerEvents: listDisabled ? 'none' : undefined,
          }}
          onRow={({ key, disabled: itemDisabled }) => ({
            onClick: () => {
              if (itemDisabled || listDisabled) return;
              onItemSelect(key, !listSelectedKeys.includes(key));
            },
          })}
        />
      );
    }}
  </Transfer>
);
const mockTags = ['cat', 'dog', 'bird'];
const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
  disabled: i % 4 === 0,
  tag: mockTags[i % 3],
}));
const originTargetKeys = mockData
  .filter((item) => Number(item.key) % 3 > 1)
  .map((item) => item.key);
const leftTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag) => <Tag>{tag}</Tag>,
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];
const rightTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
];
const App = () => {
  const [targetKeys, setTargetKeys] = useState(originTargetKeys);
  const [disabled, setDisabled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const onChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };
  const triggerDisable = (checked) => {
    setDisabled(checked);
  };
  const triggerShowSearch = (checked) => {
    setShowSearch(checked);
  };
  return (
    <>
      <TableTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        disabled={disabled}
        showSearch={showSearch}
        onChange={onChange}
        filterOption={(inputValue, item) =>
          item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
        }
        leftColumns={leftTableColumns}
        rightColumns={rightTableColumns}
      />
      <Space
        style={{
          marginTop: 16,
        }}
      >
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={triggerDisable}
        />
        <Switch
          unCheckedChildren="showSearch"
          checkedChildren="showSearch"
          checked={showSearch}
          onChange={triggerShowSearch}
        />
      </Space>
    </>
  );
};
export default App;
`,description:"<p>\u4F7F\u7528 Table \u7EC4\u4EF6\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u3002</p>",style:`#components-transfer-demo-table-transfer .ant-table td {
  background: transparent;
}`}},{demo:{id:"transfer-demo-tree-transfer"},previewerProps:{title:"\u6811\u7A7F\u68AD\u6846",filename:"components/transfer/demo/tree-transfer.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Transfer, Tree, theme } from 'antd';
// Customize Table Transfer
const isChecked = (selectedKeys, eventKey) => selectedKeys.includes(eventKey);
const generateTree = (treeNodes = [], checkedKeys = []) =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key),
    children: generateTree(children, checkedKeys),
  }));
const TreeTransfer = ({ dataSource, targetKeys, ...restProps }) => {
  const { token } = theme.useToken();
  const transferDataSource = [];
  function flatten(list = []) {
    list.forEach((item) => {
      transferDataSource.push(item);
      flatten(item.children);
    });
  }
  flatten(dataSource);
  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      className="tree-transfer"
      render={(item) => item.title}
      showSelectAll={false}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === 'left') {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <div
              style={{
                padding: token.paddingXS,
              }}
            >
              <Tree
                blockNode
                checkable
                checkStrictly
                defaultExpandAll
                checkedKeys={checkedKeys}
                treeData={generateTree(dataSource, targetKeys)}
                onCheck={(_, { node: { key } }) => {
                  onItemSelect(key, !isChecked(checkedKeys, key));
                }}
                onSelect={(_, { node: { key } }) => {
                  onItemSelect(key, !isChecked(checkedKeys, key));
                }}
              />
            </div>
          );
        }
      }}
    </Transfer>
  );
};
const treeData = [
  {
    key: '0-0',
    title: '0-0',
  },
  {
    key: '0-1',
    title: '0-1',
    children: [
      {
        key: '0-1-0',
        title: '0-1-0',
      },
      {
        key: '0-1-1',
        title: '0-1-1',
      },
    ],
  },
  {
    key: '0-2',
    title: '0-2',
  },
  {
    key: '0-3',
    title: '0-3',
  },
  {
    key: '0-4',
    title: '0-4',
  },
];
const App = () => {
  const [targetKeys, setTargetKeys] = useState([]);
  const onChange = (keys) => {
    setTargetKeys(keys);
  };
  return <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={onChange} />;
};
export default App;
`,description:"<p>\u4F7F\u7528 Tree \u7EC4\u4EF6\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u3002</p>",style:`.tree-transfer .ant-transfer-list:first-child {
  flex: none;
  width: 50%;
}`}},{demo:{id:"transfer-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/transfer/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Space, Transfer } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Transfer status="error" />
    <Transfer status="warning" showSearch />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A Transfer \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"transfer-demo-custom-select-all-labels"},previewerProps:{debug:!0,title:"\u81EA\u5B9A\u4E49\u5168\u9009\u6587\u5B57",filename:"components/transfer/demo/custom-select-all-labels.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Transfer } from 'antd';
const mockData = Array.from({
  length: 10,
}).map((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
}));
const oriTargetKeys = mockData.filter((item) => Number(item.key) % 3 > 1).map((item) => item.key);
const selectAllLabels = [
  'Select All',
  ({ selectedCount, totalCount }) => \`\${selectedCount}/\${totalCount}\`,
];
const App = () => {
  const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
  return (
    <Transfer
      dataSource={mockData}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      render={(item) => item.title}
      selectAllLabels={selectAllLabels}
    />
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846\u5168\u9009\u6309\u94AE\u7684\u6587\u5B57\u3002</p>"}},{demo:{id:"transfer-demo-component-token"},previewerProps:{debug:!0,title:"\u7EC4\u4EF6 Token",filename:"components/transfer/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import difference from 'lodash/difference';
import React, { useState } from 'react';
import { ConfigProvider, Space, Switch, Table, Tag, Transfer } from 'antd';
// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
  <Transfer {...restProps}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled,
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;
      const rowSelection = {
        getCheckboxProps: (item) => ({
          disabled: listDisabled || item.disabled,
        }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter((item) => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, listSelectedKeys)
            : difference(listSelectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: listSelectedKeys,
      };
      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{
            pointerEvents: listDisabled ? 'none' : undefined,
          }}
          onRow={({ key, disabled: itemDisabled }) => ({
            onClick: () => {
              if (itemDisabled || listDisabled) return;
              onItemSelect(key, !listSelectedKeys.includes(key));
            },
          })}
        />
      );
    }}
  </Transfer>
);
const mockTags = ['cat', 'dog', 'bird'];
const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
  disabled: i % 4 === 0,
  tag: mockTags[i % 3],
}));
const leftTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag) => <Tag>{tag}</Tag>,
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];
const rightTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
];
const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);
const App = () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };
  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };
  const [disabled, setDisabled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const secondOnChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };
  const triggerDisable = (checked) => {
    setDisabled(checked);
  };
  const triggerShowSearch = (checked) => {
    setShowSearch(checked);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Transfer: {
            listWidth: 40,
            listWidthLG: 50,
            listHeight: 30,
            itemHeight: 20,
            itemPaddingBlock: 10,
            headerHeight: 18,
          },
        },
      }}
    >
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={(item) => item.title}
      />
      <Transfer status="error" />
      <Transfer status="warning" showSearch />
      <TableTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        disabled={disabled}
        showSearch={showSearch}
        onChange={secondOnChange}
        filterOption={(inputValue, item) =>
          item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
        }
        leftColumns={leftTableColumns}
        rightColumns={rightTableColumns}
      />
      <Space
        style={{
          marginTop: 16,
        }}
      >
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={triggerDisable}
        />
        <Switch
          unCheckedChildren="showSearch"
          checkedChildren="showSearch"
          checked={showSearch}
          onChange={triggerShowSearch}
        />
      </Space>
    </ConfigProvider>
  );
};
export default App;
`,description:"<p>Component Token Debug.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"transfer",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#transfer",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Transfer"]}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[10].value}),(0,e.jsx)("th",{children:n[11].value}),(0,e.jsx)("th",{children:n[12].value}),(0,e.jsx)("th",{children:n[13].value}),(0,e.jsx)("th",{children:n[14].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[15].value}),(0,e.jsxs)("td",{children:[n[16].value,(0,e.jsx)("code",{children:n[17].value}),n[18].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/blob/1bf0bab2a7bc0a774119f501806e3e0e3a6ba283/components/transfer/index.tsx#L12",sourceType:"a",children:n[19].value}),n[20].value]}),(0,e.jsx)("td",{children:n[21].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[22].value}),(0,e.jsx)("td",{children:n[23].value}),(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{children:n[27].value}),(0,e.jsx)("td",{children:n[28].value}),(0,e.jsx)("td",{}),(0,e.jsx)("td",{children:n[29].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[30].value}),(0,e.jsxs)("td",{children:[n[31].value,(0,e.jsx)("code",{children:n[32].value}),n[33].value,(0,e.jsx)("code",{children:n[34].value}),n[35].value,(0,e.jsx)("code",{children:n[36].value}),n[37].value]}),(0,e.jsx)("td",{children:n[38].value}),(0,e.jsx)("td",{children:n[39].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[40].value}),(0,e.jsx)("td",{children:n[41].value}),(0,e.jsx)("td",{children:n[42].value}),(0,e.jsx)("td",{children:n[43].value}),(0,e.jsx)("td",{children:n[44].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[45].value}),(0,e.jsx)("td",{children:n[46].value}),(0,e.jsxs)("td",{children:[n[47].value,(0,e.jsx)("code",{children:n[48].value}),n[49].value,(0,e.jsx)("code",{children:n[50].value}),n[51].value]}),(0,e.jsx)("td",{children:n[52].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[53].value}),(0,e.jsx)("td",{children:n[54].value}),(0,e.jsx)("td",{children:n[55].value}),(0,e.jsxs)("td",{children:[n[56].value,(0,e.jsx)("code",{children:n[57].value}),n[58].value,(0,e.jsx)("code",{children:n[59].value}),n[60].value,(0,e.jsx)("code",{children:n[61].value}),n[62].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[63].value}),(0,e.jsx)("td",{children:n[64].value}),(0,e.jsx)("td",{children:n[65].value}),(0,e.jsx)("td",{children:n[66].value}),(0,e.jsx)("td",{children:n[67].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[68].value}),(0,e.jsx)("td",{children:n[69].value}),(0,e.jsx)("td",{children:n[70].value}),(0,e.jsxs)("td",{children:[n[71].value,(0,e.jsx)("code",{children:n[72].value}),n[73].value,(0,e.jsx)("code",{children:n[74].value}),n[75].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[76].value}),(0,e.jsx)("td",{children:n[77].value}),(0,e.jsx)("td",{children:n[78].value}),(0,e.jsx)("td",{children:n[79].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[80].value}),(0,e.jsx)("td",{children:n[81].value}),(0,e.jsx)("td",{children:n[82].value}),(0,e.jsx)("td",{children:n[83].value}),(0,e.jsx)("td",{children:n[84].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[85].value}),(0,e.jsxs)("td",{children:[n[86].value,(0,e.jsx)("code",{children:n[87].value}),n[88].value,(0,e.jsx)("code",{children:n[89].value}),n[90].value,(0,e.jsx)("code",{children:n[91].value}),n[92].value]}),(0,e.jsx)("td",{children:n[93].value}),(0,e.jsx)("td",{children:n[94].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[95].value}),(0,e.jsx)("td",{children:n[96].value}),(0,e.jsx)("td",{children:n[97].value}),(0,e.jsx)("td",{children:n[98].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[99].value}),(0,e.jsx)("td",{children:n[100].value}),(0,e.jsx)("td",{children:n[101].value}),(0,e.jsx)("td",{children:n[102].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[103].value}),(0,e.jsx)("td",{children:n[104].value}),(0,e.jsx)("td",{children:n[105].value}),(0,e.jsx)("td",{children:n[106].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[107].value}),(0,e.jsx)("td",{children:n[108].value}),(0,e.jsx)("td",{children:n[109].value}),(0,e.jsx)("td",{children:n[110].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[111].value}),(0,e.jsx)("td",{children:n[112].value}),(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:n[114].value}),(0,e.jsx)("td",{children:n[115].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[116].value}),(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{children:n[119].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[120].value}),(0,e.jsx)("td",{children:n[121].value}),(0,e.jsx)("td",{children:n[122].value}),(0,e.jsx)("td",{children:n[123].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[124].value}),(0,e.jsx)("td",{children:n[125].value}),(0,e.jsx)("td",{children:n[126].value}),(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[128].value}),(0,e.jsx)("td",{children:n[129].value}),(0,e.jsx)("td",{children:n[130].value}),(0,e.jsx)("td",{children:n[131].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[132].value}),(0,e.jsx)("td",{children:n[133].value}),(0,e.jsxs)("td",{children:[n[134].value,(0,e.jsx)("code",{children:n[135].value}),n[136].value,(0,e.jsx)("code",{children:n[137].value}),n[138].value]}),(0,e.jsx)("td",{children:n[139].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[140].value}),(0,e.jsx)("td",{children:n[141].value}),(0,e.jsx)("td",{children:n[142].value}),(0,e.jsx)("td",{children:n[143].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"render-props",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#render-props",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Render Props"]}),(0,e.jsxs)("p",{children:[n[144].value,(0,e.jsx)("code",{children:n[145].value}),n[146].value]}),(0,e.jsxs)(a.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[147].value}),(0,e.jsx)("th",{children:n[148].value}),(0,e.jsx)("th",{children:n[149].value}),(0,e.jsx)("th",{children:n[150].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[151].value}),(0,e.jsx)("td",{children:n[152].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[153].value}),n[154].value,(0,e.jsx)("code",{children:n[155].value})]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[156].value}),(0,e.jsx)("td",{children:n[157].value}),(0,e.jsx)("td",{children:n[158].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[159].value}),(0,e.jsx)("td",{children:n[160].value}),(0,e.jsx)("td",{children:n[161].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{children:n[163].value}),(0,e.jsx)("td",{children:n[164].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[165].value}),(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{children:n[167].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[168].value}),(0,e.jsx)("td",{children:n[169].value}),(0,e.jsx)("td",{children:n[170].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h4",{id:"\u53C2\u8003\u793A\u4F8B",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u53C2\u8003\u793A\u4F8B",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u53C2\u8003\u793A\u4F8B"]}),(0,e.jsx)(c.Z,{lang:"jsx",children:n[171].value}),(0,e.jsxs)("h2",{id:"\u6CE8\u610F",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u6CE8\u610F",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6CE8\u610F"]}),(0,e.jsxs)("p",{children:[n[172].value,(0,e.jsx)(r.Z,{href:"http://facebook.github.io/react/docs/lists-and-keys.html#keys",sourceType:"a",children:n[173].value}),n[174].value,(0,e.jsx)("code",{children:n[175].value}),n[176].value,(0,e.jsx)("code",{children:n[177].value}),n[178].value,(0,e.jsx)("code",{children:n[179].value}),n[180].value,(0,e.jsx)("code",{children:n[181].value}),n[182].value]}),(0,e.jsxs)("p",{children:[n[183].value,(0,e.jsx)("code",{children:n[184].value}),n[185].value]}),(0,e.jsx)(c.Z,{lang:"jsx",children:n[186].value}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(o.Z,{component:"Transfer"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"\u600E\u6837\u8BA9-transfer-\u7A7F\u68AD\u6846\u5217\u8868\u652F\u6301\u5F02\u6B65\u6570\u636E\u52A0\u8F7D",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u600E\u6837\u8BA9-transfer-\u7A7F\u68AD\u6846\u5217\u8868\u652F\u6301\u5F02\u6B65\u6570\u636E\u52A0\u8F7D",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u600E\u6837\u8BA9 Transfer \u7A7F\u68AD\u6846\u5217\u8868\u652F\u6301\u5F02\u6B65\u6570\u636E\u52A0\u8F7D"]}),(0,e.jsxs)("p",{children:[n[187].value,(0,e.jsx)(r.Z,{href:"https://codesandbox.io/s/objective-wing-6iqbx",sourceType:"a",children:n[188].value})]})]})]})})}s.default=d}}]);
