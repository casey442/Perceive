# BoardPlanner messaging architecture (v1)

Built with the Punchy method (positioning → messaging → copywriting), applied to the
product overview. Honors the blocking copy rules in `CLAUDE.md`: 2–4 word imperative
headlines, buyer vocabulary, numbers not superlatives, one CTA verb ("See a demo"),
AI mentions state provenance, no "more secure" claims, stop-slop on all new copy.
This is the *messaging* layer (what we say). Page copy (how we say it) derives from here.

---

## 1 · Positioning (the stake in the ground)

For the **board secretary / executive assistant to the superintendent** who runs a K-12
district's board meetings and is accountable for the record, **BoardPlanner** is the board
meeting software that keeps every agenda, packet, minute, and policy **complete and
findable** — and handles the packet assembly, minutes, posting, and history migration that
used to eat the week.

Unlike general board portals, the record stays **searchable** (full-text across every PDF,
with plain-language summaries that cite their source page) and **portable** (we move your
full history over for you).

**SMIT (the one thing to remember):** *Keep the record.* — already the homepage H1.

---

## 2 · One buyer, three users

The buyer, the daily user, and the person feeling the pain are the **same person**: the
secretary/superintendent. Boards are not involved in the purchase. Write to her.

| User | Their reality (the emotional truth) | We speak to them as |
|---|---|---|
| **Secretary / Superintendent** (buyer + daily user) | Single point of failure. Fears a missed statutory deadline and an open-records request she can't answer. Carries the district's memory in her head. | The whole site. Primary. |
| **Board members** | Often uninterested; struggle to find what they need; call her desk. | *Findability*, on the phone in their pocket. Never framed as unprepared. |
| **Community members** | Almost no one reads the record today. | *Readability* — summaries make it worth opening. |

---

## 3 · VBF hierarchy (Value → Benefits → Features)

Max three benefits. Every feature ladders up to one.

### Value proposition  *(Visionary framing — chosen 2026-08-07)*
**Every decision your board has ever made, kept complete and searchable, long after anyone remembers the meeting.**

Supporting line (Definitive, for subheads that need the mechanism):
*A complete, searchable record of every board decision, with the packet and minutes built for you.*

### Benefit 1 — Less work per meeting  *(Do)*
The packet and the minutes build themselves from a structure you set once.
- Agenda builder with reusable templates (not freeform text)
- Email-to-upload: forward a document, it files onto the right agenda item
- Email an item to the agenda; it lands on the draft in order
- Draft → review → publish workflow
- Minutes tied to agenda items, autopopulated as the meeting runs

### Benefit 2 — Nothing gets lost  *(Be)*
Your institutional memory survives turnover, audits, and records requests.
- Migration agent imports your full history from BoardDocs or Diligent before day one
- Full-text search across every agenda, minute, and policy PDF
- Each minute entry ties back to the posted notice
- Commitment tracker: the board's goals with every related item pulled into one view

### Benefit 3 — People actually read it  *(Feel)*
The board and the public find what they need without calling your desk.
- Plain-language summaries in the reader's language, each citing its source page
- Public search portal, open inside your state's notice window
- A private section per board member, sealed until the meeting opens
- Works on the phone in their pocket; no app to install

---

## 4 · Feature copy (benefit-first, buyer language)

Each row: the feature → the "so what?" line customers actually feel → the page it lives on →
who it serves. All lines pass the stop-slop gate. `[wedge]` = passes the Competitor Test
(BoardDocs/Diligent can't easily say it).

| Feature | Customer line | Page | Serves |
|---|---|---|---|
| Agenda builder + templates | Templates hold the shape. You fill in the night's business, not the format. | How it works | Secretary |
| Email-to-upload `[wedge]` | Forward a document and it files itself onto the right agenda item. | How it works | Secretary |
| Email an item to the agenda `[wedge]` | Email a new item and it lands on the draft agenda, in order. | How it works | Secretary |
| Draft → review → publish | You draft in private, route for review, and publish when the board approves. | How it works | Secretary |
| Minutes tied to agenda + autopopulate | Minutes start from the agenda and fill in as the meeting runs: motions, votes, roll calls. | How it works | Secretary |
| Migration agent `[wedge]` | We move your full history over from BoardDocs or Diligent before day one. | How it works / Security | Secretary |
| Full-text PDF search `[wedge]` | Search every agenda, minute, and policy by the words inside the PDF. | How it works | All three |
| Summaries, translated + cited `[wedge]` | Every item carries a plain-language summary in the reader's language that cites its source page. | How it works / Public portal | Board, Community |
| Public search portal | The public reads the same record you keep, posted inside your state's notice window. | Public portal | Community |
| Private member portal, sealed until meeting `[wedge]` | Each member gets a private section for notes and packets, sealed until the meeting opens. | Board members | Board |
| Mobile-responsive | It works on the phone in their pocket. No app to install. | Board members | Board |
| Commitment tracker `[wedge]` | Track the board's goals in one place; summaries pull every related item into view. | How it works | Superintendent |

---

## 5 · The wedge (what only we can say)

Per confirmed rule R-4, **search is the wedge capability**, and the overview sharpens it:
the record is only worth keeping if people can *find* and *read* it. Our defensible cluster:

1. **Full-text search across every PDF** — the record becomes answerable, not just archived.
2. **Summaries that translate and cite** — readable, trustworthy, and reachable for non-English
   families. The citation answers the researched objection ("confident ignorance is corrosive").
3. **Migration done for you** — kills the #1 objection (migration anxiety) before day one, and
   naming BoardDocs / Diligent makes the switch feel concrete.

These lead the **How it works** page. AI never leads; it rides on search with citations visible.

---

## 6 · Decisions

**Decided 2026-08-07 (Tyler):**

1. **Naming competitors — yes.** Copy may name **BoardDocs and Diligent** in the migration
   context. Keep it factual and non-disparaging. Do not use the 2025 BoardDocs security
   incident as a selling point, and never claim to be "more secure" (`CLAUDE.md`). The hero
   still says "your full history"; interior/feature copy may name them. `CLAUDE.md` open item #2 closed.
2. **Summary scope — plain-language + translation.** Summaries are written in plain language
   and available in the reader's language; each still cites its source page.

**Still open (need Tyler's call):**

3. **Commitment tracker naming.** "Commitment tracker" vs "goals" vs "board priorities" — needs
   a buyer-vocabulary check against real RFP language.
4. **"Sealed until the meeting" for member portals.** Confirm this is a real product behavior
   before it becomes a copy promise.
