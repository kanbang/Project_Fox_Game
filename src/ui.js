export const modFox = function modFox(state) {
  document.querySelector('.fox').className = `fox fox-${state}`;
}

export const modScene = function modScene(state) {
  document.querySelector('.game').className = `game ${state}`;
}

/*
 * Using "classList", you can add or remove a class without affecting any others the element may have.
 * But if you assign "className", it will wipe out any existing classes while adding the new one (or if you assign an empty string it will wipe out all of them).
 * Assigning "className" can be a convenience for cases where you are certain no other classes will be used on the element,
 * but I would normally use the "classList" methods exclusively.
 * And "classList" also has handy "toggle" and "replace" methods.
 */

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector('.poop-bag').classList.toggle('hidden', !show);
}
