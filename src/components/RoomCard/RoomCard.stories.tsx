import type { Meta, StoryObj } from '@storybook/react';
import { RoomCard } from './RoomCard';

const meta: Meta<typeof RoomCard> = {
  title: 'Гостиница/RoomCard',
  component: RoomCard,
  tags: ['autodocs'],
  argTypes: {
    isAvailable: {
      control: 'boolean',
      description: 'Доступен ли номер для бронирования',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RoomCard>;

// История 1: Доступный номер
export const Available: Story = {
  args: {
    room: {
      title: 'Одноместный Стандарт',
      price: 2500,
      imageUrl: 'https://picsum.photos/300/200',
      capacity: 1,
    },
    isAvailable: true,
  },
};

// История 2: Занятый номер
export const Booked: Story = {
  args: {
    room: {
      title: 'Двухместный Комфорт',
      price: 4500,
      imageUrl: 'https://picsum.photos/300/200',
      capacity: 2,
    },
    isAvailable: false,
  },
};

// История 3: Номер с большой вместимостью
export const FamilyRoom: Story = {
  args: {
    room: {
      title: 'Семейный Апартамент',
      price: 8000,
      imageUrl: 'https://picsum.photos/300/200',
      capacity: 4,
    },
    isAvailable: true,
  },
};