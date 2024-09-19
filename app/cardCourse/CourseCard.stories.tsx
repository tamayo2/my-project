import { Meta, StoryFn } from '@storybook/react';
import CourseCard from './CourseCard';

export default {
  title: 'Molecules/CourseCard',
  component: CourseCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof CourseCard> = (args) => <CourseCard {...args} />;

export const Default = Template.bind({});