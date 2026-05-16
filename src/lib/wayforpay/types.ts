/**
 * WayForPay webhook payload + response типы.
 * Доки: https://wiki.wayforpay.com/uk/view/852091
 */

export type TransactionStatus =
  | 'Approved'
  | 'Declined'
  | 'Refunded'
  | 'Voided'
  | 'Expired'
  | 'Pending'
  | 'InProcessing'
  | 'WaitingAuthComplete'
  | 'RefundInProcessing';

export type ResponseStatus = 'accept' | 'decline';

/**
 * Тело webhook от WayForPay.
 * Не все поля гарантированно присутствуют — WayForPay варьирует payload
 * по типу транзакции (новая оплата, рефанд, повторная подписка).
 */
export interface WebhookPayload {
  merchantAccount: string;
  orderReference: string;
  merchantSignature: string;
  amount: number | string;
  currency: string;
  authCode?: string;
  email?: string;
  phone?: string;
  createdDate?: number;
  processingDate?: number;
  cardPan?: string;
  cardType?: string;
  issuerBankCountry?: string;
  issuerBankName?: string;
  recToken?: string;
  transactionStatus: TransactionStatus;
  reason?: string;
  reasonCode?: number | string;
  fee?: number | string;
  paymentSystem?: string;
  // Любые дополнительные поля, которые WayForPay может прислать
  [key: string]: unknown;
}

export interface WebhookResponse {
  orderReference: string;
  status: ResponseStatus;
  time: number;
  signature: string;
}
