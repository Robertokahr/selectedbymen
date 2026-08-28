---
name: sbm-product-roundups
description: >
  Rules for Selected by Men ranked "best of" / comparison posts (N best X for men).
  Use when writing or editing roundups, buying guides with a ranked list, or
  "best [product] for men" articles. Also when the user runs /sbm-product-roundups.
---

# Product roundups

Read `editorial.md` first (skip image sections). This skill is the extra layer for ranked lists.

Every ranked list on Selected by Men needs three things the specs-only draft usually misses.

## 1. Defend "best"

Do not let the title rest on editorial taste alone.

- Add a **How we picked** section near the top.
- Use this frame (adapt the criteria to the category):

  We evaluated each [product] based on [criterion 1], [criterion 2], [criterion 3], [criterion 4], [criterion 5], price, and Amazon customer feedback.

- For this site the usual set is: **skin protection or materials, versatility, battery or durability, waterproofing or real-world use, ergonomics, price, Amazon customer feedback**.
- Cite manufacturer specs and Amazon star ratings / review volume. Do not invent lab tests.
- State that prices are typical listings and move.

## 2. Comparison table first

Put a markdown table **above** the individual reviews so a reader can decide in ten seconds.

Columns (adapt names, keep this job):

| [Product] | Price | [Key spec 1] | [Key spec 2] | [Key spec 3] | Best for |

For trimmers that was: Price, Battery, Waterproof, Lengths, Best for.

Wrap-friendly: `global.css` already makes `.prose-article table` scroll horizontally.

## 3. Related search terms, written as English

The title tag / `seoTitle` can carry the head term (`5 Best Ball Trimmers for Men in 2026`). The H1 should be editorial enough that the page is not a factory stamp — see `editorial.md` §§34–35. In the body, use related queries **once or twice each**, in sentences, never as a comma list.

Example for that post: best trimmer for balls, best groin trimmer for men, pubic hair trimmer, men's intimate trimmer, ball shaver, groin hair trimmer, below-the-belt trimmer.

Do the same for every roundup: list 5–8 sibling queries from how people actually search, then weave them. No keyword stuffing. No repeating the same phrase in consecutive sentences.

Also put 1–2 of those terms in `description` and in tags only when they are real categories (`groin`, `intimate`), not a stuffed keyword string.

## Still required

- Open each Amazon URL. Real name, ASIN, price, specs. Do not invent.
- English, editorial masculine, who it is for and not for.
- Exact affiliate URLs the user gave.
- Product images from Amazon listings unless the user asks otherwise.
- One MDX file. Do not touch other posts or layout unless asked.
