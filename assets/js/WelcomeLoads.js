
  function simulateLoading() {
    const progressElement = document.querySelector('.progress');
    let progress = 0;
    const totalIterations = 60; // Adjust the total number of iterations as needed
    const duration = 3000; // Adjust the desired loading duration in milliseconds
    const intervalDuration = duration / totalIterations;

    const interval = setInterval(() => {
      progress++;
      progressElement.style.width = `${progress * (100 / totalIterations)}%`;

      if (progress === totalIterations) {
        clearInterval(interval);
        setTimeout(redirect, 5000);
      }
    }, intervalDuration);
  }



  function redirect() {
    const currentPage = window.location.pathname;

    if (currentPage.endsWith('Sign-up.html')) {
      window.location.href = 'Login.html';
    } else if (currentPage.endsWith('Login.html')) {
      window.location.href = 'Gamelist.html';
    }
    else if (currentPage.endsWith('Gamelist.html')){
      window.location.href = 'GameMathBlaster.html';
    }
  }

  window.addEventListener('DOMContentLoaded', simulateLoading);
