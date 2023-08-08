import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cell from '..';

describe('Cell', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
    jest.restoreAllMocks();
  });

  it('should render value slot correctly', () => {
    wrapper = mount(<Cell value="Custom Value" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render title slot correctly', () => {
    wrapper = mount(<Cell title="Custom Title" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render label slot correctly', () => {
    wrapper = mount(<Cell title="Title" label="Custom Label" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render icon slot correctly', () => {
    wrapper = mount(<Cell icon="location-o" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render extra slot correctly', () => {
    wrapper = mount(<Cell title="Title" value="Value" extra="Custom Extra" />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should change arrow direction when using arrow-direction prop', () => {
    wrapper = mount(<Cell title="Title" value="Value" isLink arrowDirection="down" />);
    expect(wrapper.find('.rc-cell__right-icon').exists()).toBeTruthy();
    expect(wrapper.find('.van-icon-arrow-down').exists()).toBeTruthy();
  });

  it('should change title style when using title-style prop', () => {
    wrapper = mount(<Cell title="Title" titleStyle={{ color: 'red' }} />);
    const title = wrapper.find('.rc-cell__title');
    expect(title.getDOMNode().style.color).toEqual('red');
  });

  it('should change icon class prefix when using icon-prefix prop', () => {
    wrapper = mount(<Cell title="Title" icon="success" iconPrefix="my-icon" />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should allow to disable clicakble when using is-link prop', () => {
    wrapper = mount(<Cell title="Title" isLink clickable={false} />);
    expect(wrapper.find('.rc-cell--clickable').exists()).toBeTruthy();
  });

  it('should render correctly when wrapperd with Cell.Group', () => {
    wrapper = mount(
      <Cell.Group>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" />
      </Cell.Group>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly when using title prop in Cell.Group', () => {
    wrapper = mount(
      <div>
        <Cell.Group title="分组1">
          <Cell title="单元格" value="内容" />
        </Cell.Group>
        <Cell.Group title="分组2">
          <Cell title="单元格" value="内容" />
        </Cell.Group>
      </div>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly when using inset prop in Cell.Group', () => {
    wrapper = mount(
      <Cell.Group inset>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" />
      </Cell.Group>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
