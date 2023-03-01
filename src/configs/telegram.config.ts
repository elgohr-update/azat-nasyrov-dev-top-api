import { ITelegramOptions } from '../telegram/telegram.interface';

export const getTelegramConfig = (): ITelegramOptions => {
  return {
    chatId: '',
    token: '',
  };
};
