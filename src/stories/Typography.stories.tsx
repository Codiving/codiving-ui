import { TypographyVariant } from "@/ThemeContext/theme/typography";
import type { Meta, StoryObj } from "@storybook/react";
import Typography from "../components/Typography";

const TYPOGRAPHY_VARIANT_LIST: TypographyVariant[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "button",
  "caption",
  "overline"
];

const disabledProps = {
  component: {
    table: {
      disable: true
    }
  },
  style: {
    table: {
      disable: true
    }
  }
};

const meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "보여지는 텍스트"
    },
    variant: {
      control: "inline-radio"
    },
    color: {
      control: "inline-radio"
    },
    noWrap: {
      control: "boolean"
    },
    align: {
      control: "inline-radio"
    },
    ...disabledProps
  },
  args: {
    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    align: "inherit",
    variant: "body1",
    noWrap: false,
    color: "textPrimary"
  }
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTypography: Story = {
  name: "Typography",
  args: {},
  argTypes: {}
};

export const AllVariantTypography: Story = {
  args: {},
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  },
  render: props => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {TYPOGRAPHY_VARIANT_LIST.map(variant => (
          <Typography key={variant} {...props} variant={variant} />
        ))}
      </div>
    );
  }
};
