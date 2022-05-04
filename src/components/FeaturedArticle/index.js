import React, { useState } from 'react';

const FeaturedArticle = ({chosenArticle}) => {
    
return (
    <>
      {/* Conditional rendering example 2 */}
      {chosenArticle && (
        <article aria-label="featured story" id="feature">
          {' '}
          {/* This should almost certainly be a separate component! */}
          <h3>{chosenArticle.headline}</h3>
          <p>
            {chosenArticle.snippet} Cat ipsum dolor sit amet, meow loudly just
            to annoy owners or caticus cuteicus and the best thing in the
            universe is a cardboard box gimme attention gimme attention gimme
            attention gimme attention gimme attention gimme attention just
            kidding i don't want it anymore meow bye. Catch mouse and gave it
            as a present cat slap dog in face. Kitty pounce, trip, faceplant
            you didn't see that no you didn't definitely didn't lick, lick,
            lick, and preen away the embarrassment this is the day yet hate
            dog. Find something else more interesting blow up sofa in 3
            seconds for meoooow cat cat moo moo lick ears lick paws kitty
            loves pigs, curl into a furry donut mewl for food at 4am. I will
            ruin the couch with my claws scratch at door to be let outside,
            get let out then scratch at door immmediately after to be let back
            in or asdflkjaertvlkjasntvkjn (sits on keyboard) walk on car
            leaving trail of paw prints on hood and windshield. Scamper purr
            like an angel and leave hair everywhere purr for no reason put
            butt in owner's face bleghbleghvomit my furball really tie the
            room together but i like frogs and 0 gravity. Good morning
            sunshine. Meow meow meow mama for destroy couch as revenge but
            headbutt owner's knee all of a sudden cat goes crazy. Human is
            washing you why halp oh the horror flee scratch hiss bite human is
            behind a closed door, emergency! abandoned! meeooowwww!!! scratch
            leg; meow for can opener to feed me or hunt anything that moves
            all of a sudden cat goes crazy. If it fits i sits. Making bread on
            the bathrobe. Find box a little too small and curl up with fur
            hanging out . Stinky cat i like cats because they are fat and
            fluffy or murder hooman toes i like fish lick plastic bags and
            grass smells good ears back wide eyed. Pet me pet me pet me pet
            me, bite, scratch, why are you petting me meow to be let in so i
            like frogs and 0 gravity, the best thing in the universe is a
            cardboard box. White cat sleeps on a black shirt
            asdflkjaertvlkjasntvkjn (sits on keyboard). Cats making all the
            muffins scamper eat from dog's food, but meow. Enslave the hooman
            trip owner up in kitchen i want food. Scratch at door to be let
            outside, get let out then scratch at door immmediately after to be
            let back in hunt anything that moves claw drapes. Run up and down
            stairs knock dish off table head butt cant eat out of my own dish
            scratch at fleas, meow until belly rubs, hide behind curtain when
            vacuum cleaner is on scratch strangers and poo on owners food
            unwrap toilet paper litter box is life. More napping, more napping
            all the napping is exhausting plop down in the middle where
            everybody walks for the dog smells bad for stand in doorway,
            unwilling to chose whether to stay in or go out. Eat grass, throw
            it back up.
          </p>
        </article>
      )}
      </>
)
}

export default FeaturedArticle;
