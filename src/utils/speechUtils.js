
export function speakPhrase(text, languageCode) {
  if (!("speechSynthesis" in window)) {
    return {
      success: false,
      message: "Speech synthesis is not supported by this browser.",
    };
  }

  const synth = window.speechSynthesis;

  function findMatchingVoice() {
    const voices = synth.getVoices();

    return voices.find(
      (voice) =>
        voice.lang.toLowerCase() === languageCode.toLowerCase()
    );
  }

  function playWithVoice(voice) {
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = voice;
    utterance.lang = languageCode;
    utterance.rate = 0.85;
    utterance.pitch = 1;

    synth.speak(utterance);
  }

  const matchingVoice = findMatchingVoice();

  if (matchingVoice) {
    playWithVoice(matchingVoice);

    return {
      success: true,
      message: "Playing pronunciation.",
    };
  }

  // Wait for the browser to load its available voices.
  return new Promise((resolve) => {
    let resolved = false;

    const timeout = window.setTimeout(() => {
      finish();
    }, 2000);

    function finish() {
      if (resolved) return;

      resolved = true;
      window.clearTimeout(timeout);

      synth.removeEventListener("voiceschanged", finish);

      const voice = findMatchingVoice();

      if (voice) {
        playWithVoice(voice);

        resolve({
          success: true,
          message: "Playing pronunciation.",
        });
      } else {
        resolve({
          success: false,
          message: `No ${languageCode} voice is available on this device.`,
        });
      }
    }

    synth.addEventListener("voiceschanged", finish);

    // Check again in case voices loaded between our first check
    // and registering the event listener.
    if (synth.getVoices().length > 0) {
      finish();
    }
  });
}
