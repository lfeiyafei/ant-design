"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7729],{737182:function(p,o,n){n.r(o);var u=n(502143),m=n(968521),_=n(720719),g=n(28840),h=n(759907),c=n(828089),x=n(825673),b=n(902068),j=n(574399),v=n(863942),f=n(316073),B=n(24628),w=n(719260),C=n(956140),a=n(127179),i=n(905388),A=n(245583),E=n(606965),P=n(268696),y=n(587302),t=n(424128),k=n(249706),D=n(795127),R=n(116846),O=n(720538),S=n(212039),M=n(73024),z=n(553913),s=n(606641),U=n(667294),e=n(785893);function d(){var l=(0,s.eL)(),r=l.texts;return(0,e.jsx)(s.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:r[0].value}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsx)("p",{children:r[1].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(i.Z,{items:[{demo:{id:"badge-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/badge/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
const App = () => (
  <Space size="middle">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge
      count={
        <ClockCircleOutlined
          style={{
            color: '#f5222d',
          }}
        />
      }
    >
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u5FBD\u7AE0\u5C55\u793A\uFF0C\u5F53 <code>count</code> \u4E3A <code>0</code> \u65F6\uFF0C\u9ED8\u8BA4\u4E0D\u663E\u793A\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528 <code>showZero</code> \u4FEE\u6539\u4E3A\u663E\u793A\u3002</p>"}},{demo:{id:"badge-demo-no-wrapper"},previewerProps:{title:"\u72EC\u7ACB\u4F7F\u7528",filename:"components/badge/demo/no-wrapper.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge, Space, Switch } from 'antd';
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 11 : 0} showZero color="#faad14" />
      <Badge count={show ? 25 : 0} />
      <Badge
        count={
          show ? (
            <ClockCircleOutlined
              style={{
                color: '#f5222d',
              }}
            />
          ) : (
            0
          )
        }
      />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{
          backgroundColor: '#52c41a',
        }}
      />
    </Space>
  );
};
export default App;
`,description:`<p>\u4E0D\u5305\u88F9\u4EFB\u4F55\u5143\u7D20\u5373\u662F\u72EC\u7ACB\u4F7F\u7528\uFF0C\u53EF\u81EA\u5B9A\u6837\u5F0F\u5C55\u73B0\u3002</p>
<blockquote>
<p>\u5728\u53F3\u4E0A\u89D2\u7684 badge \u5219\u9650\u5B9A\u4E3A\u7EA2\u8272\u3002</p>
</blockquote>`}},{demo:{id:"badge-demo-overflow"},previewerProps:{title:"\u5C01\u9876\u6570\u5B57",filename:"components/badge/demo/overflow.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Avatar, Badge, Space } from 'antd';
const App = () => (
  <Space size="large">
    <Badge count={99}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={100}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
export default App;
`,description:"<p>\u8D85\u8FC7 <code>overflowCount</code> \u7684\u4F1A\u663E\u793A\u4E3A <code>${overflowCount}+</code>\uFF0C\u9ED8\u8BA4\u7684 <code>overflowCount</code> \u4E3A <code>99</code>\u3002</p>"}},{demo:{id:"badge-demo-dot"},previewerProps:{title:"\u8BA8\u5ACC\u7684\u5C0F\u7EA2\u70B9",filename:"components/badge/demo/dot.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Badge, Space } from 'antd';
const App = () => (
  <Space>
    <Badge dot>
      <NotificationOutlined
        style={{
          fontSize: 16,
        }}
      />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </Space>
);
export default App;
`,description:"<p>\u6CA1\u6709\u5177\u4F53\u7684\u6570\u5B57\u3002</p>"}},{demo:{id:"badge-demo-change"},previewerProps:{title:"\u52A8\u6001",filename:"components/badge/demo/change.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Switch, Space } from 'antd';
const ButtonGroup = Button.Group;
const App = () => {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);
  const increase = () => {
    setCount(count + 1);
  };
  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };
  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };
  const onChange = (checked) => {
    setShow(checked);
  };
  return (
    <Space direction="vertical">
      <Space size="large">
        <Badge count={count}>
          <Avatar shape="square" size="large" />
        </Badge>
        <ButtonGroup>
          <Button onClick={decline} icon={<MinusOutlined />} />
          <Button onClick={increase} icon={<PlusOutlined />} />
          <Button onClick={random} icon={<QuestionOutlined />} />
        </ButtonGroup>
      </Space>
      <Space size="large">
        <Badge dot={show}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Switch onChange={onChange} checked={show} />
      </Space>
    </Space>
  );
};
export default App;
`,description:"<p>\u5C55\u793A\u52A8\u6001\u53D8\u5316\u7684\u6548\u679C\u3002</p>"}},{demo:{id:"badge-demo-link"},previewerProps:{title:"\u53EF\u70B9\u51FB",filename:"components/badge/demo/link.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Avatar, Badge } from 'antd';
const App = () => (
  <a href="#">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
);
export default App;
`,description:"<p>\u7528 a \u6807\u7B7E\u8FDB\u884C\u5305\u88F9\u5373\u53EF\u3002</p>"}},{demo:{id:"badge-demo-offset"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E\u504F\u79FB",filename:"components/badge/demo/offset.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Avatar, Badge } from 'antd';
const App = () => (
  <Badge count={5} offset={[10, 10]}>
    <Avatar shape="square" size="large" />
  </Badge>
);
export default App;
`,description:"<p>\u8BBE\u7F6E\u72B6\u6001\u70B9\u7684\u4F4D\u7F6E\u504F\u79FB\uFF0C\u683C\u5F0F\u4E3A <code>[left, top]</code>\uFF0C\u8868\u793A\u72B6\u6001\u70B9\u8DDD\u9ED8\u8BA4\u4F4D\u7F6E\u5DE6\u4FA7\u3001\u4E0A\u65B9\u7684\u504F\u79FB\u91CF\u3002</p>"}},{demo:{id:"badge-demo-size"},previewerProps:{title:"\u5927\u5C0F",filename:"components/badge/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Avatar, Badge, Space } from 'antd';
const App = () => (
  <Space size="middle">
    <Badge size="default" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge size="small" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u8BBE\u7F6E\u6709\u6570\u5B57\u5FBD\u6807\u7684\u5927\u5C0F\u3002</p>"}},{demo:{id:"badge-demo-status"},previewerProps:{title:"\u72B6\u6001\u70B9",filename:"components/badge/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Badge, Space } from 'antd';
const App = () => (
  <>
    <Space>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="default" />
      <Badge status="processing" />
      <Badge status="warning" />
    </Space>
    <br />
    <Space direction="vertical">
      <Badge status="success" text="Success" />
      <Badge status="error" text="Error" />
      <Badge status="default" text="Default" />
      <Badge status="processing" text="Processing" />
      <Badge status="warning" text="Warning" />
    </Space>
  </>
);
export default App;
`,description:"<p>\u7528\u4E8E\u8868\u793A\u72B6\u6001\u7684\u5C0F\u5706\u70B9\u3002</p>"}},{demo:{id:"badge-demo-colorful"},previewerProps:{title:"\u591A\u5F69\u5FBD\u6807",filename:"components/badge/demo/colorful.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Badge, Divider, Space } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const App = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <Space direction="vertical">
      {colors.map((color) => (
        <Badge key={color} color={color} text={color} />
      ))}
    </Space>
    <Divider orientation="left">Custom</Divider>
    <Space direction="vertical">
      <Badge color="#f50" text="#f50" />
      <Badge color="rgb(45, 183, 245)" text="rgb(45, 183, 245)" />
      <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
      <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
    </Space>
  </>
);
export default App;
`,description:"<p>\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u5FBD\u6807\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002\u5982\u679C\u9884\u8BBE\u503C\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684\u8272\u503C\u3002</p>"}},{demo:{id:"badge-demo-ribbon"},previewerProps:{title:"\u7F0E\u5E26",filename:"components/badge/demo/ribbon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Badge, Card, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    size="middle"
    style={{
      width: '100%',
    }}
  >
    <Badge.Ribbon text="Hippies">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="pink">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="red">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="cyan">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="green">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="purple">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="volcano">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="magenta">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528\u7F0E\u5E26\u578B\u7684\u5FBD\u6807\u3002</p>"}},{demo:{id:"badge-demo-ribbon-debug"},previewerProps:{debug:!0,title:"Ribbon Debug",filename:"components/badge/demo/ribbon-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Badge, Card, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="purple">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5" placement="start">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5" placement="end">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
  </Space>
);
export default App;
`,description:"<p>Buggy!</p>"}},{demo:{id:"badge-demo-mix"},previewerProps:{debug:!0,title:"\u5404\u79CD\u6DF7\u7528\u7684\u60C5\u51B5",filename:"components/badge/demo/mix.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Avatar, Badge, Space } from 'antd';
const App = () => (
  <Space size="middle" wrap>
    <Space size="middle" wrap>
      <Badge count={5} status="success">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={5} status="warning">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={5} color="blue">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={5} color="#fa541c">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot status="success">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot status="warning">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot color="blue">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot color="#fa541c">
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>

    <Space size="middle" wrap>
      <Badge count={0} showZero />
      <Badge count={0} showZero color="blue" />
      <Badge count={0} showZero color="#f0f" />
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero color="blue">
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  </Space>
);
export default App;
`,description:"<p>\u6D4B\u8BD5 <code>count</code> <code>status</code> <code>color</code> <code>dot</code> \u5171\u7528\u7684\u60C5\u51B5\u3002</p>"}},{demo:{id:"badge-demo-title"},previewerProps:{debug:!0,title:"\u81EA\u5B9A\u4E49\u6807\u9898",filename:"components/badge/demo/title.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Avatar, Badge, Space } from 'antd';
const App = () => (
  <Space size="large">
    <Badge count={5} title="Custom hover text">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={-5} title="Negative">
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
export default App;
`,description:"<p>\u8BBE\u7F6E\u9F20\u6807\u653E\u5728\u72B6\u6001\u70B9\u4E0A\u65F6\u663E\u793A\u7684\u6587\u5B57\u3002</p>"}},{demo:{id:"badge-demo-colorful-with-count-debug"},previewerProps:{debug:!0,title:"\u591A\u5F69\u5FBD\u6807\u652F\u6301 count \u663E\u793A Debug",filename:"components/badge/demo/colorful-with-count-debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Badge, Space } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const AvatarItem = ({ color }) => (
  <div
    style={{
      width: 90,
      height: 90,
      lineHeight: '90px',
      background: '#ccc',
      textAlign: 'center',
    }}
  >
    {color}
  </div>
);
const App = () => (
  <>
    <Space wrap size={['large', 'middle']}>
      {colors.map((color) => (
        <Badge color={color} count={44} key={color}>
          <AvatarItem color={color} />
        </Badge>
      ))}
    </Space>
    <Space wrap size={['large', 'middle']}>
      {colors.map((color) => (
        <Badge status="processing" color={color} text="loading" key={color} />
      ))}
    </Space>
  </>
);
export default App;
`,description:"<p>\u5728\u4F7F\u7528\u591A\u5F69\u5FBD\u6807\u7684\u540C\u65F6\uFF0C\u652F\u6301 count \u5C5E\u6027\u663E\u793A</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"badge",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#badge",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Badge"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[2].value}),(0,e.jsx)("th",{children:r[3].value}),(0,e.jsx)("th",{children:r[4].value}),(0,e.jsx)("th",{children:r[5].value}),(0,e.jsx)("th",{children:r[6].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[7].value}),(0,e.jsx)("td",{children:r[8].value}),(0,e.jsx)("td",{children:r[9].value}),(0,e.jsx)("td",{children:r[10].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[11].value}),(0,e.jsxs)("td",{children:[r[12].value,(0,e.jsx)("code",{children:r[13].value}),r[14].value]}),(0,e.jsx)("td",{children:r[15].value}),(0,e.jsx)("td",{children:r[16].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[17].value}),(0,e.jsx)("td",{children:r[18].value}),(0,e.jsx)("td",{children:r[19].value}),(0,e.jsx)("td",{children:r[20].value}),(0,e.jsx)("td",{children:r[21].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[22].value}),(0,e.jsx)("td",{children:r[23].value}),(0,e.jsx)("td",{children:r[24].value}),(0,e.jsx)("td",{children:r[25].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[26].value}),(0,e.jsx)("td",{children:r[27].value}),(0,e.jsx)("td",{children:r[28].value}),(0,e.jsx)("td",{children:r[29].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[30].value}),(0,e.jsx)("td",{children:r[31].value}),(0,e.jsx)("td",{children:r[32].value}),(0,e.jsx)("td",{children:r[33].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[34].value}),(0,e.jsx)("td",{children:r[35].value}),(0,e.jsx)("td",{children:r[36].value}),(0,e.jsx)("td",{children:r[37].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[38].value}),(0,e.jsxs)("td",{children:[r[39].value,(0,e.jsx)("code",{children:r[40].value}),r[41].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[42].value}),r[43].value,(0,e.jsx)("code",{children:r[44].value})]}),(0,e.jsx)("td",{children:r[45].value}),(0,e.jsx)("td",{children:r[46].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[47].value}),(0,e.jsx)("td",{children:r[48].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[49].value}),r[50].value,(0,e.jsx)("code",{children:r[51].value}),r[52].value,(0,e.jsx)("code",{children:r[53].value}),r[54].value,(0,e.jsx)("code",{children:r[55].value}),r[56].value,(0,e.jsx)("code",{children:r[57].value})]}),(0,e.jsx)("td",{children:r[58].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[59].value}),(0,e.jsx)("td",{children:r[60].value}),(0,e.jsx)("td",{children:r[61].value}),(0,e.jsx)("td",{children:r[62].value}),(0,e.jsx)("td",{children:r[63].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[64].value}),(0,e.jsxs)("td",{children:[r[65].value,(0,e.jsx)("code",{children:r[66].value}),r[67].value]}),(0,e.jsx)("td",{children:r[68].value}),(0,e.jsx)("td",{children:r[69].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[70].value}),(0,e.jsx)("td",{children:r[71].value}),(0,e.jsx)("td",{children:r[72].value}),(0,e.jsx)("td",{children:r[73].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"badgeribbon-450",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#badgeribbon-450",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Badge.Ribbon (4.5.0+)"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[74].value}),(0,e.jsx)("th",{children:r[75].value}),(0,e.jsx)("th",{children:r[76].value}),(0,e.jsx)("th",{children:r[77].value}),(0,e.jsx)("th",{children:r[78].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[79].value}),(0,e.jsx)("td",{children:r[80].value}),(0,e.jsx)("td",{children:r[81].value}),(0,e.jsx)("td",{children:r[82].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[83].value}),(0,e.jsxs)("td",{children:[r[84].value,(0,e.jsx)("code",{children:r[85].value}),r[86].value,(0,e.jsx)("code",{children:r[87].value}),r[88].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[89].value}),r[90].value,(0,e.jsx)("code",{children:r[91].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[92].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[93].value}),(0,e.jsx)("td",{children:r[94].value}),(0,e.jsx)("td",{children:r[95].value}),(0,e.jsx)("td",{children:r[96].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"styles-\u548C-classnames-\u5C5E\u6027",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#styles-\u548C-classnames-\u5C5E\u6027",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("code",{children:r[97].value})," \u548C ",(0,e.jsx)("code",{children:r[98].value})," \u5C5E\u6027"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[99].value}),(0,e.jsx)("th",{children:r[100].value}),(0,e.jsx)("th",{children:r[101].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[102].value}),(0,e.jsx)("td",{children:r[103].value}),(0,e.jsx)("td",{children:r[104].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[105].value}),(0,e.jsx)("td",{children:r[106].value}),(0,e.jsx)("td",{children:r[107].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(a.Z,{component:"Badge"})]})})}o.default=d}}]);
