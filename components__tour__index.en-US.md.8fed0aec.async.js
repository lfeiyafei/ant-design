"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6176],{263005:function(u,s,t){t.r(s);var _=t(502143),p=t(968521),h=t(720719),x=t(28840),j=t(759907),c=t(828089),m=t(825673),v=t(902068),f=t(574399),g=t(863942),E=t(316073),O=t(24628),b=t(719260),P=t(956140),d=t(127179),l=t(905388),D=t(245583),B=t(606965),y=t(268696),T=t(587302),r=t(424128),U=t(249706),C=t(795127),M=t(116846),R=t(720538),A=t(212039),I=t(73024),k=t(553913),i=t(606641),W=t(667294),e=t(785893);function o(){var a=(0,i.eL)(),n=a.texts;return(0,e.jsx)(i.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("p",{children:[n[0].value,(0,e.jsx)("code",{children:n[1].value}),n[2].value]}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsx)("p",{children:n[3].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(l.Z,{items:[{demo:{id:"tour-demo-basic"},previewerProps:{title:"Basic",filename:"components/tour/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"tour-demo-non-modal"},previewerProps:{title:"Non-modal",filename:"components/tour/demo/non-modal.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin non-modal Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} mask={false} type="primary" steps={steps} />
    </>
  );
};
export default App;
`,description:'<p>Use <code>mask={false}</code> to make Tour non-modal. At the meantime it is recommended to use with <code>type="primary"</code> to emphasize the guide itself.</p>'}},{demo:{id:"tour-demo-placement"},previewerProps:{title:"Placement",filename:"components/tour/demo/placement.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useRef, useState } from 'react';
import { Button, Tour } from 'antd';
const App = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>Change the placement of the guide relative to the target, there are 12 placements available. When <code>target={null}</code> the guide will show in the center.</p>"}},{demo:{id:"tour-demo-mask"},previewerProps:{title:"Custom mask style",filename:"components/tour/demo/mask.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
      mask: {
        style: {
          boxShadow: 'inset 0 0 15px #fff',
        },
        color: 'rgba(40, 0, 255, .4)',
      },
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
      mask: false,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        mask={{
          style: {
            boxShadow: 'inset 0 0 15px #333',
          },
          color: 'rgba(80, 255, 255, .4)',
        }}
      />
    </>
  );
};
export default App;
`,description:"<p>Custom mask style.</p>"}},{demo:{id:"tour-demo-indicator"},previewerProps:{title:"Custom indicator",filename:"components/tour/demo/indicator.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import { Button, Divider, Space, Tour } from 'antd';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>Custom indicator.</p>"}},{demo:{id:"tour-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tour/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Tour } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Tour;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
      background: 'rgba(50,0,0,0.65)',
      padding: 8,
    }}
  >
    <InternalPanel title="Hello World!" description="Hello World?!" />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      cover={
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      }
      current={5}
      total={7}
    />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      type="primary"
      current={4}
      total={5}
    />
  </div>
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"tour",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tour",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Tour"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[4].value}),(0,e.jsx)("th",{children:n[5].value}),(0,e.jsx)("th",{children:n[6].value}),(0,e.jsx)("th",{children:n[7].value}),(0,e.jsx)("th",{children:n[8].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[9].value}),(0,e.jsx)("td",{children:n[10].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[11].value}),n[12].value,(0,e.jsx)("code",{children:n[13].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[14].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[15].value}),(0,e.jsx)("td",{children:n[16].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[17].value}),n[18].value,(0,e.jsx)("code",{children:n[19].value}),n[20].value,(0,e.jsx)("code",{children:n[21].value}),n[22].value,(0,e.jsx)("code",{children:n[23].value}),n[24].value,(0,e.jsx)("code",{children:n[25].value}),n[26].value,(0,e.jsx)("code",{children:n[27].value}),n[28].value,(0,e.jsx)("code",{children:n[29].value}),n[30].value,(0,e.jsx)("code",{children:n[31].value}),n[32].value,(0,e.jsx)("code",{children:n[33].value}),n[34].value,(0,e.jsx)("code",{children:n[35].value}),n[36].value,(0,e.jsx)("code",{children:n[37].value}),n[38].value,(0,e.jsx)("code",{children:n[39].value}),n[40].value,(0,e.jsx)("code",{children:n[41].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[42].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[43].value}),(0,e.jsx)("td",{children:n[44].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[45].value})}),(0,e.jsx)("td",{children:n[46].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[47].value}),(0,e.jsx)("td",{children:n[48].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[49].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[50].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[51].value}),(0,e.jsx)("td",{children:n[52].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[53].value}),n[54].value,(0,e.jsx)("code",{children:n[55].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[56].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[57].value}),(0,e.jsx)("td",{children:n[58].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[59].value})}),(0,e.jsx)("td",{children:n[60].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[61].value}),(0,e.jsx)("td",{children:n[62].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[63].value})}),(0,e.jsx)("td",{children:n[64].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[65].value}),(0,e.jsx)("td",{children:n[66].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[67].value})}),(0,e.jsx)("td",{children:n[68].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[69].value}),(0,e.jsx)("td",{children:n[70].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[71].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[72].value})}),(0,e.jsx)("td",{children:n[73].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[74].value}),(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[76].value})}),(0,e.jsx)("td",{children:n[77].value}),(0,e.jsx)("td",{children:n[78].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[79].value}),(0,e.jsx)("td",{children:n[80].value}),(0,e.jsx)("td",{children:n[81].value}),(0,e.jsx)("td",{children:n[82].value}),(0,e.jsx)("td",{children:n[83].value})]})]})]}),(0,e.jsxs)("h3",{id:"tourstep",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#tourstep",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"TourStep"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[84].value}),(0,e.jsx)("th",{children:n[85].value}),(0,e.jsx)("th",{children:n[86].value}),(0,e.jsx)("th",{children:n[87].value}),(0,e.jsx)("th",{children:n[88].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[89].value}),(0,e.jsx)("td",{children:n[90].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[91].value}),n[92].value,(0,e.jsx)("code",{children:n[93].value})]}),(0,e.jsx)("td",{children:n[94].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[95].value}),(0,e.jsx)("td",{children:n[96].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[97].value}),n[98].value,(0,e.jsx)("code",{children:n[99].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[100].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[101].value}),(0,e.jsx)("td",{children:n[102].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[103].value})}),(0,e.jsx)("td",{children:n[104].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[105].value}),(0,e.jsx)("td",{children:n[106].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[107].value})}),(0,e.jsx)("td",{children:n[108].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[109].value}),(0,e.jsx)("td",{children:n[110].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[111].value})}),(0,e.jsx)("td",{children:n[112].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:n[114].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[115].value}),n[116].value,(0,e.jsx)("code",{children:n[117].value}),n[118].value,(0,e.jsx)("code",{children:n[119].value}),n[120].value,(0,e.jsx)("code",{children:n[121].value}),n[122].value,(0,e.jsx)("code",{children:n[123].value}),n[124].value,(0,e.jsx)("code",{children:n[125].value}),n[126].value,(0,e.jsx)("code",{children:n[127].value}),n[128].value,(0,e.jsx)("code",{children:n[129].value}),n[130].value,(0,e.jsx)("code",{children:n[131].value}),n[132].value,(0,e.jsx)("code",{children:n[133].value}),n[134].value,(0,e.jsx)("code",{children:n[135].value}),n[136].value,(0,e.jsx)("code",{children:n[137].value}),n[138].value,(0,e.jsx)("code",{children:n[139].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[140].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[141].value}),(0,e.jsx)("td",{children:n[142].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[143].value})}),(0,e.jsx)("td",{children:n[144].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[145].value}),(0,e.jsxs)("td",{children:[n[146].value,(0,e.jsx)("code",{children:n[147].value}),n[148].value]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[149].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[150].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[151].value}),(0,e.jsx)("td",{children:n[152].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[153].value}),n[154].value,(0,e.jsx)("code",{children:n[155].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[156].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[157].value}),(0,e.jsx)("td",{children:n[158].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[159].value})}),(0,e.jsx)("td",{children:n[160].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[161].value}),(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[163].value})}),(0,e.jsx)("td",{children:n[164].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[165].value}),(0,e.jsxs)("td",{children:[n[166].value,(0,e.jsx)("code",{children:n[167].value}),n[168].value]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[169].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[170].value})}),(0,e.jsx)("td",{children:n[171].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(d.Z,{component:"Tour"})]})})}s.default=o}}]);
