import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import Image from 'next/image';

const banks = [
  { id: 'bca', name: 'BCA', logo: '/images/bca.png' },
  { id: 'bni', name: 'BNI', logo: '/images/bni.png' },
  { id: 'bri', name: 'BRI', logo: '/images/bri.png' },
  { id: 'cimb', name: 'CIMB', logo: '/images/cimb.svg' }
];

type BankSelectionProps = {
  setSelectedBank: (bank: string) => void;
  selectedBank: string;
};

export default function BankSelection({
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
            className={`flex h-20 cursor-pointer flex-col  items-center gap-2 rounded-lg border p-3 transition-all ${
              selectedBank === bank.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300'
            }`}
            onClick={() => setSelectedBank(bank.id)}
          >
            <RadioGroupItem value={bank.id} id={bank.id} className="hidden" />
            <Image src={bank.logo} alt={bank.name} width={40} height={40} />
            <Label
              htmlFor={bank.id}
              className="cursor-pointer text-sm font-medium"
            >
              {bank.name}
            </Label>
          </Card>
        ))}
      </RadioGroup>
    </div>
  );
}
