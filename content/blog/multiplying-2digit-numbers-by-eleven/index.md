---
title: "[2]: Multiplying 2-digit Numbers By 11"
date: "2019-10-10"
template: "post"
draft: false
slug: "/posts/multiply-2digit-numbers-by-11/"
category: "Math"
tags:
  - "Math"
description: "Just a quick mental math trick for multiplying by 2-digit numbers by 11"
---

There is a simple trick to quickly multiply a 2-digit number by 11.  Suppose a
2-digit number $n$ with digits $k$ and $m$ of the form $km$.  We know
the product will be a 3-digit number since $n$ and 11 are both at least 10.  The
product will have $k$ in the hundreds' place, $m$ in the ones' place, and sum of
$k$ and $m$ in the tens place, carrying the one when $k + m \geq 10$.

We can see this expanded out below:

$$
\begin{matrix}
\phantom{k} & k & m \\
\phantom{k} & 1 & 1 \\
\hline \\
\phantom{k} & k & m \\
k & m & 0 \\
\hline \\
k & (k+m) & m
\end{matrix}
$$

This works for $n \geq 91$, but becomes a bit cumbersome by having to carry a
digit into the hundreds' place and the thousands' place.

It's a small but satisfying proof, and makes for a neat party trick.
