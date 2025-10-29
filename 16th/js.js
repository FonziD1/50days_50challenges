
  const smallCups = document.querySelectorAll(".cup-small");
  const litersEl = document.querySelector(".liters");        // matches your HTML
  const percentage = document.getElementById("percentage");
  const remained = document.getElementById("remained");

  // Attach click handlers
  smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCups(idx));
  });

  function highlightCups(idx) {
    const isFull = smallCups[idx].classList.contains("full");
    const nextIsFull = smallCups[idx].nextElementSibling?.classList.contains("full");

    // Toggle off when clicking the last full cup
    if (isFull && !nextIsFull) idx--;

    smallCups.forEach((cup, i) => {
      if (i <= idx) cup.classList.add("full");
      else cup.classList.remove("full");
    });

    updateBigCup();
  }

  function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length; // FIX
    const totalCups = smallCups.length;

    if (fullCups === 0) {
      percentage.style.visibility = "hidden";
      percentage.style.height = "0px";
      percentage.innerText = "";
    } else {
      const ratio = fullCups / totalCups;
      percentage.style.visibility = "visible";
      percentage.style.height = `${ratio * 330}px`;          // 330px = .cup height
      percentage.innerText = `${Math.round(ratio * 100)}%`;  // FIX name + rounding
    }

    // 8 cups * 250ml = 2L total
    const litersLeft = 2 - (250 * fullCups) / 1000;

    if (fullCups === totalCups) {
      remained.style.visibility = "hidden";
      remained.style.height = "0px";
      litersEl.textContent = "";
    } else {
      remained.style.visibility = "visible";
      remained.style.height = ""; // let CSS handle
      litersEl.textContent = `${litersLeft.toFixed(2)}L`;
    }
  }

  // Initialize UI on load
  updateBigCup();

