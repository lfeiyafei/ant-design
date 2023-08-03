"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3419],{471835:function(d,c,n){n.r(c);var p=n(502143),m=n(968521),u=n(720719),_=n(28840),x=n(759907),o=n(828089),g=n(825673),h=n(902068),j=n(574399),v=n(863942),f=n(316073),b=n(24628),C=n(719260),D=n(956140),k=n(127179),i=n(905388),P=n(245583),E=n(606965),y=n(268696),R=n(587302),t=n(424128),w=n(249706),A=n(795127),T=n(116846),B=n(720538),M=n(212039),O=n(73024),S=n(553913),l=n(606641),U=n(667294),e=n(785893);function s(){var a=(0,l.eL)(),r=a.texts;return(0,e.jsx)(l.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("p",{children:[r[0].value,(0,e.jsx)("code",{children:r[1].value}),r[2].value]}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsx)("p",{children:r[3].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(i.Z,{items:[{demo:{id:"components-color-picker-demo-base"},previewerProps:{title:"Basic Usage",filename:"components/color-picker/demo/base.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ColorPicker } from 'antd';
const Demo = () => <ColorPicker />;
export default Demo;
`,description:"<p>Basic Usage.</p>"}},{demo:{id:"components-color-picker-demo-size"},previewerProps:{title:"Trigger size",filename:"components/color-picker/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ColorPicker, Space } from 'antd';
const Demo = () => (
  <Space>
    <Space direction="vertical">
      <ColorPicker size="small" />
      <ColorPicker />
      <ColorPicker size="large" />
    </Space>
    <Space direction="vertical">
      <ColorPicker size="small" showText />
      <ColorPicker showText />
      <ColorPicker size="large" showText />
    </Space>
  </Space>
);
export default Demo;
`,description:"<p>The trigger has three sizes: large, medium and small. If size is not set, the size will be medium.</p>"}},{demo:{id:"components-color-picker-demo-controlled"},previewerProps:{title:"controlled mode",filename:"components/color-picker/demo/controlled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { ColorPicker, theme } from 'antd';
const Demo = () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  return <ColorPicker value={color} onChange={setColor} />;
};
export default Demo;
`,description:"<p>Set the component to controlled mode.</p>"}},{demo:{id:"components-color-picker-demo-change-completed"},previewerProps:{title:"Color change completed",filename:"components/color-picker/demo/change-completed.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { App, ColorPicker } from 'antd';
const Demo = () => {
  const { message } = App.useApp();
  const [value, setValue] = useState('#1677ff');
  return (
    <App>
      <ColorPicker
        value={value}
        onChangeComplete={(color) => {
          setValue(color);
          message.success(\`The selected color is \${color.toHexString()}\`);
        }}
      />
    </App>
  );
};
export default Demo;
`,description:"<p>The callback will be called only when the color selection is completed.</p>"}},{demo:{id:"components-color-picker-demo-text-render"},previewerProps:{title:"Rendering Trigger Text",filename:"components/color-picker/demo/text-render.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { ColorPicker, Space } from 'antd';
const Demo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Space direction="vertical">
      <ColorPicker showText />
      <ColorPicker showText={(color) => <span>Custom Text ({color.toHexString()})</span>} />
      <ColorPicker
        open={open}
        onOpenChange={setOpen}
        showText={() => (
          <DownOutlined
            rotate={open ? 180 : 0}
            style={{
              color: 'rgba(0, 0, 0, 0.25)',
            }}
          />
        )}
      />
    </Space>
  );
};
export default Demo;
`,description:"<p>Renders the default text of the trigger, effective when <code>showText</code> is <code>true</code>. When customizing text, you can use <code>showText</code> as a function to return custom text.</p>"}},{demo:{id:"components-color-picker-demo-disabled"},previewerProps:{title:"Disable",filename:"components/color-picker/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ColorPicker } from 'antd';
export default () => <ColorPicker showText disabled />;
`,description:"<p>Set to disabled state.</p>"}},{demo:{id:"components-color-picker-demo-disabled-alpha"},previewerProps:{title:"Disabled Alpha",filename:"components/color-picker/demo/disabled-alpha.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ColorPicker } from 'antd';
const Demo = () => <ColorPicker disabledAlpha />;
export default Demo;
`,description:"<p>Disabled color alpha.</p>"}},{demo:{id:"components-color-picker-demo-allowclear"},previewerProps:{title:"Clear Color",filename:"components/color-picker/demo/allowClear.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ColorPicker } from 'antd';
export default () => <ColorPicker allowClear />;
`,description:"<p>Clear Color.</p>"}},{demo:{id:"components-color-picker-demo-trigger"},previewerProps:{title:"Custom Trigger",filename:"components/color-picker/demo/trigger.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useMemo, useState } from 'react';
import { Button, ColorPicker, theme } from 'antd';
const Demo = () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  const bgColor = useMemo(() => (typeof color === 'string' ? color : color.toHexString()), [color]);
  const btnStyle = {
    backgroundColor: bgColor,
  };
  return (
    <ColorPicker value={color} onChange={setColor}>
      <Button type="primary" style={btnStyle}>
        open
      </Button>
    </ColorPicker>
  );
};
export default Demo;
`,description:"<p>Triggers for customizing color panels.</p>"}},{demo:{id:"components-color-picker-demo-trigger-event"},previewerProps:{title:"Custom Trigger Event",filename:"components/color-picker/demo/trigger-event.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ColorPicker } from 'antd';
const Demo = () => <ColorPicker trigger="hover" />;
export default Demo;
`,description:"<p>Triggers event for customizing color panels, provide options <code>click</code> and <code>hover</code>.</p>"}},{demo:{id:"components-color-picker-demo-format"},previewerProps:{title:"Color Format",filename:"components/color-picker/demo/format.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useMemo, useState } from 'react';
import { Col, ColorPicker, Row, Space } from 'antd';
export default () => {
  const [colorHex, setColorHex] = useState('#1677ff');
  const [colorHsb, setColorHsb] = useState('hsb(215, 91%, 100%)');
  const [colorRgb, setColorRgb] = useState('rgb(22, 119, 255)');
  const [formatHex, setFormatHex] = useState('hex');
  const [formatHsb, setFormatHsb] = useState('hsb');
  const [formatRgb, setFormatRgb] = useState('rgb');
  const hexString = useMemo(
    () => (typeof colorHex === 'string' ? colorHex : colorHex.toHexString()),
    [colorHex],
  );
  const hsbString = useMemo(
    () => (typeof colorHsb === 'string' ? colorHsb : colorHsb.toHsbString()),
    [colorHsb],
  );
  const rgbString = useMemo(
    () => (typeof colorRgb === 'string' ? colorRgb : colorRgb.toRgbString()),
    [colorRgb],
  );
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: 'flex',
      }}
    >
      <Row align="middle">
        <Space>
          <Col>
            <ColorPicker
              format={formatHex}
              value={colorHex}
              onChange={setColorHex}
              onFormatChange={setFormatHex}
            />
          </Col>
          <Col>
            HEX: <span>{hexString}</span>
          </Col>
        </Space>
      </Row>
      <Row align="middle">
        <Space>
          <Col>
            <ColorPicker
              format={formatHsb}
              value={colorHsb}
              onChange={setColorHsb}
              onFormatChange={setFormatHsb}
            />
          </Col>
          <Col>
            HSB: <span>{hsbString}</span>
          </Col>
        </Space>
      </Row>
      <Row align="middle">
        <Space>
          <Col>
            <ColorPicker
              format={formatRgb}
              value={colorRgb}
              onChange={setColorRgb}
              onFormatChange={setFormatRgb}
            />
          </Col>
          <Col>
            RGB: <span>{rgbString}</span>
          </Col>
        </Space>
      </Row>
    </Space>
  );
};
`,description:"<p>Encoding formats, support <code>HEX</code>, <code>HSB</code>, <code>RGB</code>.</p>"}},{demo:{id:"components-color-picker-demo-presets"},previewerProps:{title:"Preset Colors",filename:"components/color-picker/demo/presets.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ColorPicker } from 'antd';
export default () => (
  <ColorPicker
    presets={[
      {
        label: 'Recommended',
        colors: [
          '#000000',
          '#000000E0',
          '#000000A6',
          '#00000073',
          '#00000040',
          '#00000026',
          '#0000001A',
          '#00000012',
          '#0000000A',
          '#00000005',
          '#F5222D',
          '#FA8C16',
          '#FADB14',
          '#8BBB11',
          '#52C41A',
          '#13A8A8',
          '#1677FF',
          '#2F54EB',
          '#722ED1',
          '#EB2F96',
          '#F5222D4D',
          '#FA8C164D',
          '#FADB144D',
          '#8BBB114D',
          '#52C41A4D',
          '#13A8A84D',
          '#1677FF4D',
          '#2F54EB4D',
          '#722ED14D',
          '#EB2F964D',
        ],
      },
      {
        label: 'Recent',
        colors: [],
      },
    ]}
  />
);
`,description:"<p>Set the presets color of the color picker.</p>"}},{demo:{id:"components-color-picker-demo-panel-render"},previewerProps:{title:"Custom Render Panel",filename:"components/color-picker/demo/panel-render.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Col, ColorPicker, Divider, Row, Space } from 'antd';
const Demo = () => (
  <Space direction="vertical">
    <Row align="middle">
      <Space>
        <span>Add title: </span>
        <Col>
          <ColorPicker
            panelRender={(panel) => (
              <div className="custom-panel">
                <div
                  style={{
                    fontSize: 12,
                    color: 'rgba(0, 0, 0, 0.88)',
                    lineHeight: '20px',
                    marginBottom: 8,
                  }}
                >
                  Color Picker
                </div>
                {panel}
              </div>
            )}
          />
        </Col>
      </Space>
    </Row>
    <Row align="middle">
      <Space>
        <span>Horizontal layout: </span>
        <Col>
          <ColorPicker
            styles={{
              popupOverlayInner: {
                width: 468 + 24,
              },
            }}
            presets={[
              {
                label: 'Recommended',
                colors: [
                  '#000000',
                  '#000000E0',
                  '#000000A6',
                  '#00000073',
                  '#00000040',
                  '#00000026',
                  '#0000001A',
                  '#00000012',
                  '#0000000A',
                  '#00000005',
                  '#F5222D',
                  '#FA8C16',
                  '#FADB14',
                  '#8BBB11',
                  '#52C41A',
                  '#13A8A8',
                  '#1677FF',
                  '#2F54EB',
                  '#722ED1',
                  '#EB2F96',
                  '#F5222D4D',
                  '#FA8C164D',
                  '#FADB144D',
                  '#8BBB114D',
                  '#52C41A4D',
                  '#13A8A84D',
                  '#1677FF4D',
                  '#2F54EB4D',
                  '#722ED14D',
                  '#EB2F964D',
                ],
              },
              {
                label: 'Recent',
                colors: [
                  '#F5222D4D',
                  '#FA8C164D',
                  '#FADB144D',
                  '#8BBB114D',
                  '#52C41A4D',
                  '#13A8A84D',
                ],
              },
            ]}
            panelRender={(_, { components: { Picker, Presets } }) => (
              <div
                className="custom-panel"
                style={{
                  display: 'flex',
                  width: 468,
                }}
              >
                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <Presets />
                </div>
                <Divider
                  type="vertical"
                  style={{
                    height: 'auto',
                  }}
                />
                <div
                  style={{
                    width: 234,
                  }}
                >
                  <Picker />
                </div>
              </div>
            )}
          />
        </Col>
      </Space>
    </Row>
  </Space>
);
export default Demo;
`,description:"<p>Rendering of the free control panel via <code>panelRender</code>.</p>"}},{demo:{id:"components-color-picker-demo-pure-panel"},previewerProps:{debug:!0,title:"Pure Render",filename:"components/color-picker/demo/pure-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { ColorPicker, theme } from 'antd';
const PureRenderColorPicker = ColorPicker._InternalPanelDoNotUseOrYouWillBeFired;
export default () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  return (
    <div
      style={{
        paddingLeft: 100,
      }}
    >
      <PureRenderColorPicker value={color} onChange={setColor} />
    </div>
  );
};
`,description:"<p>Pure Panel</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[r[4].value,(0,e.jsx)("code",{children:r[5].value}),r[6].value]})}),(0,e.jsxs)(o.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{align:"left",children:r[7].value}),(0,e.jsx)("th",{align:"left",children:r[8].value}),(0,e.jsx)("th",{align:"left",children:r[9].value}),(0,e.jsx)("th",{align:"left",children:r[10].value}),(0,e.jsx)("th",{align:"left",children:r[11].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[12].value}),(0,e.jsx)("td",{align:"left",children:r[13].value}),(0,e.jsx)("td",{align:"left",children:r[14].value}),(0,e.jsx)("td",{align:"left",children:r[15].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[16].value}),(0,e.jsx)("td",{align:"left",children:r[17].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[18].value})}),(0,e.jsx)("td",{align:"left",children:r[19].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[20].value}),(0,e.jsx)("td",{align:"left",children:r[21].value}),(0,e.jsx)("td",{align:"left",children:r[22].value}),(0,e.jsx)("td",{align:"left",children:r[23].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[24].value}),(0,e.jsx)("td",{align:"left",children:r[25].value}),(0,e.jsxs)("td",{align:"left",children:[r[26].value,(0,e.jsx)("code",{children:r[27].value})]}),(0,e.jsx)("td",{align:"left",children:r[28].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[29].value}),(0,e.jsx)("td",{align:"left",children:r[30].value}),(0,e.jsx)("td",{align:"left",children:r[31].value}),(0,e.jsx)("td",{align:"left",children:r[32].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[33].value}),(0,e.jsx)("td",{align:"left",children:r[34].value}),(0,e.jsx)("td",{align:"left",children:r[35].value}),(0,e.jsx)("td",{align:"left",children:r[36].value}),(0,e.jsx)("td",{align:"left",children:r[37].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[38].value}),(0,e.jsx)("td",{align:"left",children:r[39].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[40].value})}),(0,e.jsx)("td",{align:"left",children:r[41].value}),(0,e.jsx)("td",{align:"left",children:r[42].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[43].value}),(0,e.jsx)("td",{align:"left",children:r[44].value}),(0,e.jsxs)("td",{align:"left",children:[(0,e.jsx)("code",{children:r[45].value}),r[46].value,(0,e.jsx)("code",{children:r[47].value}),r[48].value,(0,e.jsx)("code",{children:r[49].value})]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[50].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[51].value}),(0,e.jsx)("td",{align:"left",children:r[52].value}),(0,e.jsx)("td",{align:"left",children:r[53].value}),(0,e.jsx)("td",{align:"left",children:r[54].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[55].value}),(0,e.jsx)("td",{align:"left",children:r[56].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[57].value})}),(0,e.jsx)("td",{align:"left",children:r[58].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[59].value}),(0,e.jsx)("td",{align:"left",children:r[60].value}),(0,e.jsxs)("td",{align:"left",children:[(0,e.jsx)("code",{children:r[61].value}),r[62].value,(0,e.jsx)("code",{children:r[63].value}),r[64].value,(0,e.jsx)("code",{children:r[65].value}),r[66].value,(0,e.jsx)("code",{children:r[67].value}),r[68].value,(0,e.jsx)("code",{children:r[69].value}),r[70].value,(0,e.jsx)("code",{children:r[71].value})]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[72].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[73].value}),(0,e.jsx)("td",{align:"left",children:r[74].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[75].value})}),(0,e.jsx)("td",{align:"left",children:r[76].value}),(0,e.jsx)("td",{align:"left",children:r[77].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[78].value}),(0,e.jsx)("td",{align:"left",children:r[79].value}),(0,e.jsxs)("td",{align:"left",children:[r[80].value,(0,e.jsx)("code",{children:r[81].value})]}),(0,e.jsx)("td",{align:"left",children:r[82].value}),(0,e.jsx)("td",{align:"left",children:r[83].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[84].value}),(0,e.jsx)("td",{align:"left",children:r[85].value}),(0,e.jsxs)("td",{align:"left",children:[(0,e.jsx)("code",{children:r[86].value}),r[87].value,(0,e.jsx)("code",{children:r[88].value}),r[89].value,(0,e.jsx)("code",{children:r[90].value})]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[91].value})}),(0,e.jsx)("td",{align:"left",children:r[92].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[93].value}),(0,e.jsx)("td",{align:"left",children:r[94].value}),(0,e.jsxs)("td",{align:"left",children:[(0,e.jsx)("code",{children:r[95].value}),r[96].value,(0,e.jsx)("code",{children:r[97].value})]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[98].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[99].value}),(0,e.jsx)("td",{align:"left",children:r[100].value}),(0,e.jsxs)("td",{align:"left",children:[r[101].value,(0,e.jsx)("code",{children:r[102].value})]}),(0,e.jsx)("td",{align:"left",children:r[103].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[104].value}),(0,e.jsxs)("td",{align:"left",children:[r[105].value,(0,e.jsx)("code",{children:r[106].value}),r[107].value]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[108].value})}),(0,e.jsx)("td",{align:"left",children:r[109].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[110].value}),(0,e.jsx)("td",{align:"left",children:r[111].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[112].value})}),(0,e.jsx)("td",{align:"left",children:r[113].value}),(0,e.jsx)("td",{align:"left",children:r[114].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[115].value}),(0,e.jsxs)("td",{align:"left",children:[r[116].value,(0,e.jsx)("code",{children:r[117].value}),r[118].value]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[119].value})}),(0,e.jsx)("td",{align:"left",children:r[120].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[121].value}),(0,e.jsxs)("td",{align:"left",children:[r[122].value,(0,e.jsx)("code",{children:r[123].value}),r[124].value]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[125].value})}),(0,e.jsx)("td",{align:"left",children:r[126].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[127].value}),(0,e.jsx)("td",{align:"left",children:r[128].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[129].value})}),(0,e.jsx)("td",{align:"left",children:r[130].value}),(0,e.jsx)("td",{align:"left",children:r[131].value})]})]})]}),(0,e.jsxs)("h3",{id:"color",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#color",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Color"]}),(0,e.jsxs)(o.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{align:"left",children:r[132].value}),(0,e.jsx)("th",{align:"left",children:r[133].value}),(0,e.jsx)("th",{align:"left",children:r[134].value}),(0,e.jsx)("th",{align:"left",children:r[135].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[136].value}),(0,e.jsxs)("td",{align:"left",children:[r[137].value,(0,e.jsx)("code",{children:r[138].value}),r[139].value,(0,e.jsx)("code",{children:r[140].value})]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[141].value})}),(0,e.jsx)("td",{align:"left",children:r[142].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[143].value}),(0,e.jsxs)("td",{align:"left",children:[r[144].value,(0,e.jsx)("code",{children:r[145].value}),r[146].value,(0,e.jsx)("code",{children:r[147].value})]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[148].value})}),(0,e.jsx)("td",{align:"left",children:r[149].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[150].value}),(0,e.jsxs)("td",{align:"left",children:[r[151].value,(0,e.jsx)("code",{children:r[152].value}),r[153].value]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[154].value})}),(0,e.jsx)("td",{align:"left",children:r[155].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[156].value}),(0,e.jsxs)("td",{align:"left",children:[r[157].value,(0,e.jsx)("code",{children:r[158].value}),r[159].value,(0,e.jsx)("code",{children:r[160].value})]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[161].value})}),(0,e.jsx)("td",{align:"left",children:r[162].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[163].value}),(0,e.jsxs)("td",{align:"left",children:[r[164].value,(0,e.jsx)("code",{children:r[165].value}),r[166].value]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[167].value})}),(0,e.jsx)("td",{align:"left",children:r[168].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:r[169].value}),(0,e.jsxs)("td",{align:"left",children:[r[170].value,(0,e.jsx)("code",{children:r[171].value}),r[172].value,(0,e.jsx)("code",{children:r[173].value})]}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:r[174].value})}),(0,e.jsx)("td",{align:"left",children:r[175].value})]})]})]}),(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"questions-about-color-assignment",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#questions-about-color-assignment",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Questions about color assignment"]}),(0,e.jsxs)("p",{children:[r[176].value,(0,e.jsx)("code",{children:r[177].value}),r[178].value,(0,e.jsx)("code",{children:r[179].value}),r[180].value]})]})]})})}c.default=s}}]);
