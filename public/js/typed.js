class TypedAnimation {
  constructor(elementId, dataUrl) {
    this.elementId = elementId;
    this.dataUrl = dataUrl;
    this.typed = null;
  }

  async startTyping() {
    const data = await fetch(this.dataUrl).then((response) => response.text());

    // Destroy the previous instance of Typed.js, if it exists
    if (this.typed !== null) {
      this.typed.destroy();
    }

    const options = {
      strings: [data],
      typeSpeed: 50,
      cursorChar: '',
      onComplete: async () => {
        // Wait for 2 seconds before starting a new loop
        await new Promise((resolve) => setTimeout(resolve, 2000));
        this.startTyping();
      },
    };

    this.typed = new Typed(`#${this.elementId}`, options);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const typedAnimations = [
    new TypedAnimation('typed-number', 'http://numbersapi.com/random/trivia'),
    new TypedAnimation('typed-date', 'http://numbersapi.com/random/date'),
    new TypedAnimation(
      'typed-mathematical',
      'http://numbersapi.com/random/math'
    ),
    new TypedAnimation('typed-year', 'http://numbersapi.com/random/year'),
  ];

  typedAnimations.forEach((animation) => {
    animation.startTyping();
  });
});
