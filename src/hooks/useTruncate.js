import { useState } from 'react';

export default function useTruncate(
  originalString,
  settings = { maxLength: 1000, ending: '\u2026' }
) {
  const shouldTruncate = originalString?.length > settings.maxLength;
  const [isTruncated, setIsTruncated] = useState(true);
  const [outputString, setOutputString] = useState(getTruncatedString());

  function getTruncatedString() {
    if (!shouldTruncate) return originalString;
    return originalString.substring(0, settings.maxLength) + settings.ending;
  }
  function onToggleTruncate() {
    setIsTruncated(!isTruncated);
    if (isTruncated) {
      setOutputString(originalString);
    } else {
      setOutputString(getTruncatedString());
    }
  }
  return { outputString, shouldTruncate, isTruncated, onToggleTruncate };
}
