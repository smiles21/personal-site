---
title: "[0]: An Interesting Approach to An Urn Problem"
date: "2019-04-28"
template: "post"
draft: false
slug: "/posts/an-interesting-approach-to-an-urn-problem/"
category: "Mathematics"
tags:
  - "Algorithms"
  - "Proofs"
description: "An urn problem with an easy to explain answer"
---

I found myself watching a lecture by Edsger Dijkstra a few days back and saw an
interesting problem which I posed to some colleagues:

Suppose an urn with one or more pebbles, each pebble being black or white, and
the following simple game.  Continue making moves as long as there are two or
more pebbles in the urn, where a move is defined as:
 - Take two pebbles out of the urn
 - If their colors are the same, put a black pebble in the urn.  If their colors
   are different, put a white pebble in the urn.

Given the above, what can be said about the color of the final pebble in the
urn?

As I had tried myself, all of my colleagues approached the problem using a case
analysis of the last few pebbles.  This method quickly gets out of hand
determining how the urn could even have reached a combination of just three
pebbles.

After a small hint, I was able to see the argument.  I liked the beauty of the
answer and it opened my eyes to a different way to approach problems.

__Answer:__

_Completion:_

The game will complete with only one pebble in the urn, since in every move we
remove two pebbles and place one in.  This move results in one less pebble being
in the urn at the end of the turn.  If we have only one pebble, we are done, and
if we have more than one pebble, this process will eventually leave only one
pebble in the urn.

<!-- We shall show this while ignoring the color of the pebbles in the urn.

Let $K = B + W$, where $K$ is the initial number of pebbles, $B$ is the initial number of
black pebbles, and $W$ is the initial number of white pebbles.  At the
beginning of the game, let $k := K$.  We are guaranteed that $k /geq 1$ by the
precondition of the game.  As a move goes on, we remove two pebbles
($k := k - 2$) and add back one pebble ($k := k + 1$), with a net result being
to remove one pebble ($k := k - 1$) -->

_Correctness:_

To see which color will remain at the end of the game, we shall examine the
change in number of each color.  Suppose at the beginning of an arbitrary turn,
there are $b$ black pebbles and $w$ white pebbles in the urn.  Examining the
possible cases of the moves where $B$ signifies a black pebble pulled from the
urn and $W$ a white pebble pulled from the urn, we see:

* Assuming $b \geq 1 \wedge w \geq 1$, $\{BW \rightarrow W\} \Rightarrow b := b - 1$
* Assuming $b \geq 2$, $\{BB \rightarrow B\} \Rightarrow b := b - 1$
* Assuming $w \geq 2$,  $\{WW \rightarrow B\} \Rightarrow b := b + 1 ; w := w - 2$

If we observe the parity of $w$, we notice that it will never change, since $w$
only ever changes by 2.  Taking this a step further, we can say that the parity
of $w$ will never change as the game is played.

Given that we play this game until we only have one pebble, we can safely say
that the last pebble's color can be determined by the number of white
pebbles in the urn at the beginning of the game.  If that number is even, the
last pebble will be black, and if that number is odd, the last pebble will be
white.

__End of Answer__

Now I very much like this answer for a number of reason.  Firstly, I was
pleased when I saw it first because of the interesting way it seems to throw
out how my colleagues and I initially tried to solve it.  By ignoring how we
got to any specific instance in the chain of moves, we can eventually see that
the chain of moves hardly ever mattered.  The only thing that actually mattered
was the initial number of white pebbles.

Secondly, I enjoy this answer because it is extremely easy to explain to a
layman.  Anyone with a very basic background in math or who can think critically
can wrap their heads around such an easy game, and likewise a answer that
revolves around if a number is even.

