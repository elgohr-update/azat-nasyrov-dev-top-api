import { ITelegramOptions } from '../telegram/telegram.interface';
import { ConfigService } from '@nestjs/config';

export const getTelegramConfig = async (
  configService: ConfigService,
): Promise<ITelegramOptions> => {
  const token = configService.get('TELEGRAM_TOKEN');

  if (!token) {
    throw new Error('TELEGRAM_TOKEN не задан');
  }

  return {
    chatId: configService.get('CHAT_ID') ?? '',
    token,
  };
};
