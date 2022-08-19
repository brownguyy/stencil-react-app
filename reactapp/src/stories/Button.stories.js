import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "Green",
  label: "Click Me !",
  size: "large",
  primary: false,
};

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "Red",
  label: "Click Me !",
  size: "large",

  primary: false,
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  size: "large",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  size: "large",
  primary: false,
};
