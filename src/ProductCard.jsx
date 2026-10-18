import { useCart } from './contexts/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

/** Карточка получает данные о товаре через props. */
export default function ProductCard({ product }) {
  const { items, addItem, removeOne } = useCart();
  const navigate = useNavigate();
  const quantity = items.find((item) => item.id === product.id)?.quantity ?? 0;

  return (
    <article className="product-card">
      <div
        className="product-image"
        style={{ background: product.color, height: '245px', overflow: 'hidden', position: 'relative' }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover', pointerEvents: 'none' }}
        />
      </div>

      <div className="product-details" style={{ position: 'relative', zIndex: 2 }}>
        <p className="category">{product.category}</p>
        <h2>{product.name}</h2>
        <p className="price">{product.price.toLocaleString('ru-RU')} ₽</p>

        <div className="card-footer">
          <button type="button" onClick={() => { addItem(product); navigate('/cart', { state: { addedProduct: product.name } }); }}>
            Добавить в корзину
          </button>
          <button
            className="remove-button"
            type="button"
            onClick={() => removeOne(product.id)}
            disabled={quantity === 0}
          >
            Убрать
          </button>
          <span className="counter" aria-label={`В корзине: ${quantity}`}>
            {quantity}
          </span>
        </div>
        <p className="counter-label">Выбрано: {quantity} шт.</p>
      </div>
    </article>
  );
}
