import { useState } from 'react';

/**
 * Данные о номере гостиницы.
 */
export interface RoomData {
  /** Название номера */
  title: string;
  /** Цена за сутки в рублях */
  price: number;
  /** Ссылка на фотографию */
  imageUrl: string;
  /** Количество мест */
  capacity: number;
}

/**
 * Свойства компонента RoomCard.
 */
export interface RoomCardProps {
  /** Данные о номере */
  room: RoomData;
  /** Доступен ли номер для бронирования */
  isAvailable: boolean;
}

/**
 * Компонент карточки гостиничного номера.
 *
 * Показывает фотографию, название, цену, количество мест.
 * Если номер доступен, показывает кнопку «Забронировать».
 * Если номер занят, показывает надпись «Номер занят».
 *
 * @param props - Свойства компонента
 * @returns Карточка номера
 */
export const RoomCard = ({ room, isAvailable }: RoomCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '16px',
    maxWidth: '300px',
    backgroundColor: isHovered ? '#f0f8ff' : 'white',
    transition: 'background-color 0.3s',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    backgroundColor: isAvailable ? '#4CAF50' : '#ccc',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: isAvailable ? 'pointer' : 'not-allowed',
    fontSize: '16px',
    marginTop: '12px',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Номер: ${room.title}`}
    >
      <img src={room.imageUrl} alt={room.title} style={imageStyle} />
      <h3 style={{ margin: '12px 0 4px' }}>{room.title}</h3>
      <p style={{ color: '#666', margin: '4px 0' }}>
        Вместимость: {room.capacity} чел.
      </p>
      <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '8px 0' }}>
        {room.price} ₽ / ночь
      </p>
      <button
        style={buttonStyle}
        disabled={!isAvailable}
        aria-label={
          isAvailable
            ? `Забронировать номер ${room.title}`
            : `Номер ${room.title} недоступен`
        }
      >
        {isAvailable ? 'Забронировать' : 'Номер занят'}
      </button>
    </div>
  );
};