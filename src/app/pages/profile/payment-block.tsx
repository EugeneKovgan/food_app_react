/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { EmptyCreditCard, PaymentMethod } from '@components/ui-kit';
import { CreditCard } from '@components/ui-kit/credit-card';
import { useAppSelector } from '@core/hooks';

import './styles.scss';

export const PaymentBlock: React.FC = () => {
  const currentUser = useAppSelector(state => state.user.user);

  return (
    <div className="payment-block">
      {currentUser?.cardNumber ? (
        currentUser.cardNumber.map((_card: string) => (
          <CreditCard
            key={currentUser.id}
            card={_card}
            name={currentUser.name}
            surname={currentUser.surname}
          />
        ))
      ) : (
        <EmptyCreditCard />
      )}

      <PaymentMethod />
    </div>
  );
};
