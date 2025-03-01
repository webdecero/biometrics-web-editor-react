import {stringToKebabCase} from "app/utils/transformers";

export const emitMainMessage = (identifier, dataContent) => {
  const data = Array.isArray(dataContent) ? dataContent : dataContent ? [dataContent] : [];

  if (typeof identifier !== 'number' && typeof identifier !== 'string') return;
  window.parent.postMessage(
    {
      action: 'builder-on-message',
      id: identifier,
      success: true,
      data,
    },
    '*');
};

export const emitErrorMessage = (identifier, errorContent) => {
  console.log(errorContent);
  if (typeof identifier !== 'number' && typeof identifier !== 'string') return;
  window.parent.postMessage(
    {
      action: 'builder-on-message',
      id: identifier,
      success: false,
      data: errorContent,
    },
    '*');
}

export const emitCustomMessage = (identifier, eventName, data) => {
  if (typeof identifier !== 'number' && typeof identifier !== 'string') return;
  if (typeof eventName !== 'string' || eventName.length === 0) return;
  const transformedEventName = stringToKebabCase(eventName);
  window.parent.postMessage(
    {
      action: `builder-on-${transformedEventName}`,
      id: identifier,
      success: true,
      data,
    },
    '*');
}