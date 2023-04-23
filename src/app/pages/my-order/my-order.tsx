import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Empty, Modal } from 'antd';
import { PromoCode, TotalPrice } from '@components/ui-kit';
import { OrderCard } from '@components/ui-kit/order-card';
import { OrderTitle } from '@components/ui-kit/order-title';
import { useAppSelector } from '@core/hooks';
import { clearBasket, getGoodsInBasket, InitialStateType } from '@store/basket';
import { useCreateOrderMutation } from '@store/order';

import './styles.scss';

export const MyOrder: React.FC = () => {
  const goodsInBasket = useAppSelector<InitialStateType[]>(getGoodsInBasket);
  const currentUser = useAppSelector(state => state.user.user);
  const [order] = useCreateOrderMutation();
  const dispatch = useDispatch();

  const totalPrice = useMemo(
    () =>
      goodsInBasket.reduce((sum: number, item: InitialStateType): number => {
        return sum + item.productPrice * item.quantity;
      }, 0),
    [goodsInBasket],
  );

  const infoMessage = () => {
    Modal.info({
      title: 'Info message',
      content: 'Order was sended !',
    });
  };

  const confirmOrder = async () => {
    await order({ id: currentUser?.id, data: { data: goodsInBasket } });
    dispatch(clearBasket());
    infoMessage();
  };

  return (
    <div className="container">
      <div className="my-order">
        <OrderTitle />
        <div className="my-order__container">
          {goodsInBasket.length > 0 ? (
            <>
              {goodsInBasket.map((good: InitialStateType) => {
                return <OrderCard good={good} key={good.id} />;
              })}
              <PromoCode />
              <TotalPrice totalPrice={totalPrice} />
              <button
                onClick={confirmOrder}
                type="button"
                className="my-order__container__btn"
              >
                CONFIRM ORDER
              </button>
            </>
          ) : (
            <div className="my-order__container__empty-basket">
              <Empty description={false} />
              <p>Basket is empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
