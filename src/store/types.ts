export interface PhoneContextStructure {
  phoneNumber: string[];
  isCalling: boolean;
  addDigit: (digit: string) => void;
  emptyPhoneNumber: () => void;
}
