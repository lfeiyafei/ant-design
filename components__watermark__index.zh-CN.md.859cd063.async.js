"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9664],{316984:function(m,s,t){t.r(s);var u=t(502143),h=t(968521),x=t(720719),p=t(28840),d=t(759907),i=t(828089),j=t(825673),v=t(902068),g=t(574399),f=t(863942),E=t(316073),b=t(24628),P=t(719260),A=t(956140),c=t(127179),o=t(905388),I=t(245583),D=t(606965),y=t(268696),M=t(587302),r=t(424128),O=t(249706),T=t(795127),U=t(116846),C=t(720538),k=t(212039),W=t(73024),F=t(553913),a=t(606641),L=t(667294),e=t(785893);function l(){var _=(0,a.eL)(),n=_.texts;return(0,e.jsx)(a.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[1].value}),(0,e.jsx)("li",{children:n[2].value})]}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(o.Z,{items:[{demo:{id:"watermark-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/watermark/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Watermark } from 'antd';
const App = () => (
  <Watermark content="Ant Design">
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"watermark-demo-multi-line"},previewerProps:{title:"\u591A\u884C\u6C34\u5370",filename:"components/watermark/demo/multi-line.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Watermark } from 'antd';
const App = () => (
  <Watermark content={['Ant Design', 'Happy Working']}>
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>content</code> \u8BBE\u7F6E \u5B57\u7B26\u4E32\u6570\u7EC4 \u6307\u5B9A\u591A\u884C\u6587\u5B57\u6C34\u5370\u5185\u5BB9\u3002</p>"}},{demo:{id:"watermark-demo-image"},previewerProps:{title:"\u56FE\u7247\u6C34\u5370",filename:"components/watermark/demo/image.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Watermark } from 'antd';
const App = () => (
  <Watermark
    height={30}
    width={130}
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>image</code> \u6307\u5B9A\u56FE\u7247\u5730\u5740\u3002\u4E3A\u4FDD\u8BC1\u56FE\u7247\u9AD8\u6E05\u4E14\u4E0D\u88AB\u62C9\u4F38\uFF0C\u8BF7\u8BBE\u7F6E width \u548C height, \u5E76\u4E0A\u4F20\u81F3\u5C11\u4E24\u500D\u7684\u5BBD\u9AD8\u7684 logo \u56FE\u7247\u5730\u5740\u3002</p>"}},{demo:{id:"watermark-demo-custom"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u914D\u7F6E",filename:"components/watermark/demo/custom.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useMemo, useState } from 'react';
import { ColorPicker, Form, Input, InputNumber, Slider, Space, Typography, Watermark } from 'antd';
const { Paragraph } = Typography;
const App = () => {
  const [form] = Form.useForm();
  const [config, setConfig] = useState({
    content: 'Ant Design',
    color: 'rgba(0, 0, 0, 0.15)',
    fontSize: 16,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
  });
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config;
  const watermarkProps = useMemo(
    () => ({
      content,
      font: {
        color: typeof color === 'string' ? color : color.toRgbString(),
        fontSize,
      },
      zIndex,
      rotate,
      gap,
      offset,
    }),
    [config],
  );
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Watermark {...watermarkProps}>
        <Typography>
          <Paragraph>
            The light-speed iteration of the digital world makes products more complex. However,
            human consciousness and attention resources are limited. Facing this design
            contradiction, the pursuit of natural interaction will be the consistent direction of
            Ant Design.
          </Paragraph>
          <Paragraph>
            Natural user cognition: According to cognitive psychology, about 80% of external
            information is obtained through visual channels. The most important visual elements in
            the interface design, including layout, colors, illustrations, icons, etc., should fully
            absorb the laws of nature, thereby reducing the user&apos;s cognitive cost and bringing
            authentic and smooth feelings. In some scenarios, opportunely adding other sensory
            channels such as hearing, touch can create a richer and more natural product experience.
          </Paragraph>
          <Paragraph>
            Natural user behavior: In the interaction with the system, the designer should fully
            understand the relationship between users, system roles, and task objectives, and also
            contextually organize system functions and services. At the same time, a series of
            methods such as behavior analysis, artificial intelligence and sensors could be applied
            to assist users to make effective decisions and reduce extra operations of users, to
            save users&apos; mental and physical resources and make human-computer interaction more
            natural.
          </Paragraph>
        </Typography>
        <img
          style={{
            zIndex: 10,
            width: '100%',
            maxWidth: 800,
            position: 'relative',
          }}
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
          alt="\u793A\u4F8B\u56FE\u7247"
        />
      </Watermark>
      <Form
        style={{
          width: 280,
          flexShrink: 0,
          borderLeft: '1px solid #eee',
          paddingLeft: 20,
          marginLeft: 20,
        }}
        form={form}
        layout="vertical"
        initialValues={config}
        onValuesChange={(_, values) => {
          setConfig(values);
        }}
      >
        <Form.Item name="content" label="Content">
          <Input placeholder="\u8BF7\u8F93\u5165" />
        </Form.Item>
        <Form.Item name="color" label="Color">
          <ColorPicker />
        </Form.Item>
        <Form.Item name="fontSize" label="FontSize">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="zIndex" label="zIndex">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="rotate" label="Rotate">
          <Slider step={1} min={-180} max={180} />
        </Form.Item>
        <Form.Item
          label="Gap"
          style={{
            marginBottom: 0,
          }}
        >
          <Space
            style={{
              display: 'flex',
            }}
            align="baseline"
          >
            <Form.Item name={['gap', 0]}>
              <InputNumber
                placeholder="gapX"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item name={['gap', 1]}>
              <InputNumber
                placeholder="gapY"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item
          label="Offset"
          style={{
            marginBottom: 0,
          }}
        >
          <Space
            style={{
              display: 'flex',
            }}
            align="baseline"
          >
            <Form.Item name={['offset', 0]}>
              <InputNumber
                placeholder="offsetLeft"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item name={['offset', 1]}>
              <InputNumber
                placeholder="offsetTop"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u81EA\u5B9A\u4E49\u53C2\u6570\u914D\u7F6E\u9884\u89C8\u6C34\u5370\u6548\u679C\u3002</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"watermark",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#watermark",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Watermark"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[3].value}),(0,e.jsx)("th",{children:n[4].value}),(0,e.jsx)("th",{children:n[5].value}),(0,e.jsx)("th",{children:n[6].value}),(0,e.jsx)("th",{children:n[7].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[8].value}),(0,e.jsxs)("td",{children:[n[9].value,(0,e.jsx)("code",{children:n[10].value}),n[11].value]}),(0,e.jsx)("td",{children:n[12].value}),(0,e.jsx)("td",{children:n[13].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[14].value}),(0,e.jsxs)("td",{children:[n[15].value,(0,e.jsx)("code",{children:n[16].value}),n[17].value]}),(0,e.jsx)("td",{children:n[18].value}),(0,e.jsx)("td",{children:n[19].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[20].value}),(0,e.jsxs)("td",{children:[n[21].value,(0,e.jsx)("code",{children:n[22].value})]}),(0,e.jsx)("td",{children:n[23].value}),(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{children:n[27].value}),(0,e.jsx)("td",{children:n[28].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[29].value}),(0,e.jsx)("td",{children:n[30].value}),(0,e.jsx)("td",{children:n[31].value}),(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[33].value}),(0,e.jsx)("td",{children:n[34].value}),(0,e.jsx)("td",{children:n[35].value}),(0,e.jsx)("td",{children:n[36].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[37].value}),(0,e.jsx)("td",{children:n[38].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#font",sourceType:"Link",children:n[39].value})}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#font",sourceType:"Link",children:n[40].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[41].value}),(0,e.jsx)("td",{children:n[42].value}),(0,e.jsx)("td",{children:n[43].value}),(0,e.jsx)("td",{children:n[44].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[45].value}),(0,e.jsxs)("td",{children:[n[46].value,(0,e.jsx)("code",{children:n[47].value})]}),(0,e.jsx)("td",{children:n[48].value}),(0,e.jsx)("td",{children:n[49].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"font",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#font",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Font"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[50].value}),(0,e.jsx)("th",{children:n[51].value}),(0,e.jsx)("th",{children:n[52].value}),(0,e.jsx)("th",{children:n[53].value}),(0,e.jsx)("th",{children:n[54].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[55].value}),(0,e.jsx)("td",{children:n[56].value}),(0,e.jsx)("td",{children:n[57].value}),(0,e.jsx)("td",{children:n[58].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[59].value}),(0,e.jsx)("td",{children:n[60].value}),(0,e.jsx)("td",{children:n[61].value}),(0,e.jsx)("td",{children:n[62].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[63].value}),(0,e.jsx)("td",{children:n[64].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[65].value}),n[66].value,(0,e.jsx)("code",{children:n[67].value}),n[68].value,(0,e.jsx)("code",{children:n[69].value}),n[70].value]}),(0,e.jsx)("td",{children:n[71].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[72].value}),(0,e.jsx)("td",{children:n[73].value}),(0,e.jsx)("td",{children:n[74].value}),(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[76].value}),(0,e.jsx)("td",{children:n[77].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[78].value}),n[79].value,(0,e.jsx)("code",{children:n[80].value}),n[81].value,(0,e.jsx)("code",{children:n[82].value}),n[83].value,(0,e.jsx)("code",{children:n[84].value})]}),(0,e.jsx)("td",{children:n[85].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(c.Z,{component:"Watermark"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"\u5904\u7406\u5F02\u5E38\u56FE\u7247\u6C34\u5370",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5904\u7406\u5F02\u5E38\u56FE\u7247\u6C34\u5370",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5904\u7406\u5F02\u5E38\u56FE\u7247\u6C34\u5370"]}),(0,e.jsxs)("p",{children:[n[86].value,(0,e.jsx)("code",{children:n[87].value}),n[88].value]}),(0,e.jsx)(d.Z,{lang:"typescript",children:n[89].value})]})]})})}s.default=l}}]);
