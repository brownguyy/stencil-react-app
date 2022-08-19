import Stack from "../components/Stack";

export default {
  title: "components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: {
      type: "number",
      defaultValue: 4,
    },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((el) => {
      return (
        <div
          key={el}
          style={{
            background: "linear-gradient(to right, #ad5389, #3c1053)",
            color: "white",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => alert(el + 1)}
        >
          {el + 1}
        </div>
      );
    })}
  </Stack>
);

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  wrap: false,
  spacing: 3,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  wrap: false,
  spacing: 3,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  direction: "row",
  wrap: false,
  spacing: 0,
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  direction: "row",
  wrap: true,
  spacing: 10,
  numberOfChildren: 400,
};

export const VerticalReverse = Template.bind({});
VerticalReverse.args = {
  direction: "column-reverse",
  wrap: false,
  spacing: 3,
};

export const HorizontalReverse = Template.bind({});
HorizontalReverse.args = {
  direction: "row-reverse",
  wrap: false,
  spacing: 3,
};
