import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import Image from 'next/image';

const banks = [
  { id: 'gopay', name: 'Gopay', logo: '/images/gopay.png' },
  { id: 'shopeepay', name: 'Shopee Pay', logo: '/images/shopeepay.png' }
];

type BankSelectionProps = {
  setSelectedBank: (bank: string) => void;
  selectedBank: string;
};

export default function EwalletSelection({
  setSelectedBank,
  selectedBank
}: BankSelectionProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <RadioGroup
        onValueChange={setSelectedBank}
        className="grid grid-cols-2 gap-3"
      >
        {banks.map((bank) => (
          <Card
            key={bank.id}
            className={`flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-3 transition-all ${
              selectedBank === bank.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300'
            }`}
            onClick={() => setSelectedBank(bank.id)}
          >
            <RadioGroupItem value={bank.id} id={bank.id} className="hidden" />
            <Image
              className="my-auto"
              src={bank.logo}
              alt={bank.name}
              width={40}
              height={40}
            />
            <Label
              htmlFor={bank.id}
              className="mt-auto cursor-pointer text-sm font-medium"
            >
              {bank.name}
            </Label>
          </Card>
        ))}
      </RadioGroup>
    </div>
  );
}
