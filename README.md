# Unit-4-RPG

1. i spent pretty much all of the week of christmas getting this game done. and by new year i had only figured out about half the project. I looked onto the next homework and saw that there was a video guide for this game i could follow. i followed and coded along trying to deduce how things are done. I think it was best for my learning to code to go along with the video. simply to get it done and learn the jquery and js. in the future, ill need to learn to pseudo code much better. because that feels to be kust as important learning all the js syntax and jquery. critical thinking skills and such.  

2. How the game works:

   * When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

   * The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.

   * The player chooses an opponent by clicking on an enemy's picture.

   * Once the player selects an opponent, that enemy is moved to a `defender area`.

   * The player will now be able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.

3. The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.
